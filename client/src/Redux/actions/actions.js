import axios from 'axios';

import {url,
    GET_COUNTRIES,
    GET_COUNTRIES_NAME,
    GET_COUNTRIES_ID,
    FILTER_BY_CONTINENTS,
    ORDER_BY_NAME,
    ORDER_BY_POPULATION,
    GET_ACTIVITY_CREATED,
    POST_ACTIVITY,
    COUNTRY_BY_ACTIVITY} from '../actions-types/actions-types'




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
export function getCountriesName (name) {
    return function(dispatch) {
        return axios.get(`${url}/countries?name=${name}`)
        .then(response => {
            dispatch({
                type: GET_COUNTRIES_NAME,
                payload: response.data
            });
        })
        .catch(error => {
        // Manejar el error en caso de que la solicitud falle
            console.error('Error:', error);
        });
    };
}

//Para el detailId
export function getCountriesId (id) {
    return function(dispatch) {
        return axios.get(`${url}/countries/${id}`)
        .then(response => {
            dispatch({
                type: GET_COUNTRIES_ID,
                payload: response.data
            });
        })
        .catch(error => {
        // Manejar el error en caso de que la solicitud falle
            console.error('Error:', error);
        });
    };
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
    }
}

/* //Filtro por actividad
export function filterTourActivity(payload){
    return {
        type: FILTER_TOUR_ACTIVITY,
        payload
    }
} */

//control de renderizado de action - reducer - home - created - app ! no llama a la app

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