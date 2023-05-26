import axios from 'axios';

import {url,
    GET_COUNTRIES,
    GET_COUNTRIES_NAME,
    GET_DETAIL,
    FILTER_BY_CONTINENTS,
    ORDER_BY_NAME,
    ORDER_BY_POPULATION,
    GET_ACTIVITY_CREATED,
    POST_ACTIVITY,
    CLEAR_DETAIL,
    COUNTRY_BY_ACTIVITY,
    } from '../actions-types/actions-types'




//Renderizado de todos los países, por Id y nombre
export function getCountries () {
    return function(dispatch) {
        //Conexión entre FRONT Y BACK
        return axios.get(`${url}/countries`)
        .then(response => {
            dispatch({
                type: GET_COUNTRIES,
                payload: response.data
            });
        })
        .catch(error => {
        // Manejar el error en caso de que la solicitud falle
            console.error('Error:', error);
        });
    };
}

//Para el searchBar
export function getCountriesName(name) {
    return function(dispatch) {
      return axios
      .get(`${url}/countries?name=${name}`)
        .then(response => {
          const filteredCountries = response.data.filter(country =>
            country.name.toLowerCase().includes(name.toLowerCase())
          );
          dispatch({
            type: GET_COUNTRIES_NAME,
            payload: filteredCountries
          });
        })
        .catch(error => {
          // Manejar el error en caso de que la solicitud falle
          console.error('Error:', error);
        });
    };
  }

//Para el detailId
export function getDetail(id) {
    return async function (dispatch) {
      try {
        let json = await axios.get(`${url}/countries/${id}`);
        return dispatch({
          type: GET_DETAIL,
          payload: json.data,
        });
      } catch (error) {
        console.error(error);
      }
    };
  }

export function clearDetail(){
    return{
        type: CLEAR_DETAIL
    }
}


//Filtro por Continentes
export function filterByContinents(payload) {
    return {
        type: FILTER_BY_CONTINENTS,
        payload
    }
}


//Orden por nombre alfabetico
export function orderByName(type) {
    return {
        type: ORDER_BY_NAME,
        payload: {type}
    }
}

//Orden por población
export function orderByPopulation(payload) {
  return {
    type: ORDER_BY_POPULATION,
    payload
  };
}


//Crea actividades
export const createActivity = (payload) => {
    return async function (dispatch) {
        const apiData = await axios.post(`${url}/activities`, payload)
         console.log(apiData);
        
        dispatch({type: POST_ACTIVITY, payload: apiData})
    }
}

//Busca las actividades creadas
export const getActivityCreated = () => {
    return async function (dispatch) {
        const apiData = await axios.get(`${url}/activities`)

        const getDataActivity = apiData.data;
        dispatch({ type: GET_ACTIVITY_CREATED , payload: getDataActivity})
    }
}

export const countryByActivitys = (payload) => {
  return {
      type: COUNTRY_BY_ACTIVITY,
      payload
  }
}

