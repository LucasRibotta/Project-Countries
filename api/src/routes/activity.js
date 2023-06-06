const { Router } = require('express');
const { Activity, Country } = require('../db');
const {getCreateActivity} = require('../controllers/activities')

const router = Router();

router.get('/', async (req, res) => {
    try {
        // Buscar todas las actividades en la base de datos
       const allActivities = await Activity.findAll({
          include: Country
       })
       // Devolvemos las acitividades encontradas como respuesta
       res.status(200).json(allActivities)
    } catch (error) {
       res.status(400).json({ error: "No se encontraron actividades" })
    }
 
 });


router.post("/", async (req,res,next) => {
    try {
         // Crear una nueva actividad utilizando los datos recibidos en el cuerpo de la solicitud
        const response = await getCreateActivity(req.body);
        res.status(201).json({
            status: 'Se ha creado exitosamente'
        })
    
    } catch (error) {
        
        res.status(400).json({error: 'error en la creacion'})
        next(error)
    }
})

router.delete("/:id", async (req, res) => {
    try {
      const { id } = req.params;
  
      // Buscar la actividad por ID y eliminarla
      const deletedActivity = await Activity.destroy({ where: { id } });
  
      if (deletedActivity === 0) {
        // Si no se encontró la actividad, devolver un mensaje de error
        return res.status(404).json({ error: "No se encontró la actividad" });
      }
  
      // Si se eliminó la actividad exitosamente, devolver una respuesta exitosa
      res.status(200).json({ message: "Actividad eliminada exitosamente" });
    } catch (error) {
        res.status(500).send({error: error.message})
    }
  });
  



module.exports = router;