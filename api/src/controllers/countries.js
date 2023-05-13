const axios = require('axios');
const { Country, Activity } = require('../db');
const { Op } = require('sequelize');

const getAllCountries = async (req, res) => {
  const { name } = req.query;
  try {
    if (name) {
      const countryName = await Country.findAll({
        where: {
          name: {
            [Op.iLike]: `%${name}%` // Utilizamos Op.iLike para realizar una búsqueda de texto sin distinguir entre mayúsculas y minúsculas
          }
        }
      });
      return countryName.length > 0
        ? res.status(200).json(countryName)
        : res.status(404).json(`El país con el nombre: ${name} no se encontró`);
    }

    const countryDb = await Country.count();
    if (countryDb > 0) {
      const allCountries = await Country.findAll();
      return res.status(200).json(allCountries);
    }

    const getApiInfo = await axios.get('https://restcountries.com/v3/all');
    const apiCountries = getApiInfo.data.map(country => {
      return {
        id: country.cca3,
        name: country.name.common,
        flags: country.flags && country.flags.png ? country.flags.png : "ruta-predeterminada-para-la-bandera",
        continent: country.continent ? country.continent : "Sin continente",
        capital: country.capital ? country.capital : "Sin data",
        subregion: country.subregion ? country.subregion : "Sin subregión",
        population: country.population ? country.population : 0,
        area: country.area ? country.area : 0,
        maps: country.maps && country.maps.googlemaps ? country.maps.googlemaps : "ruta-predeterminada-para-los-mapas"
      }
    });
    await Country.bulkCreate(apiCountries);

    const newlyCreatedCountries = await Country.findAll();
    res.status(200).json(newlyCreatedCountries);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const getCountriesId = async (req, res) => {
    try {
        const {id} = req.params;
        const idUpper = id.toUpperCase();
        const countryId = await Country.findOne({
            where: {
                id: idUpper,
                include: Activity
            }
        })
        countryId ?
        res.status(200).json(countryId) :
        res.status(400).json(`El pais con el id:${id} no se encontro`)
        
    } catch (error) {
        res.status(500).json({error: error.message})
    }

}

module.exports = {
    getAllCountries,
    getCountriesId
}