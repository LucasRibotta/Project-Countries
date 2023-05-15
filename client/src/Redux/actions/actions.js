import axios from 'axios';

const url = "http://localhost:3001"
export const GET_COUNTRIES = "GET_COUNTRIES";
export const GET_COUNTRIES_NAME = "GET_COUNTRIES_NAME";
export const GET_COUNTRIES_ID = "GET_COUNTRIES_ID";
export const FILTER_BY_CONTINENTS = 'FILTER_BY_CONTINENTS';
export const FILTER_TOUR_ACTIVITY = 'FILTER_TOUR_ACTIVITY'
export const ORDER_BY_NAME = 'ORDER_BY_NAME'
export const ORDER_BY_POPULATION = 'ORDER_BY_POPULATION'




//Renderizado de todos los países, por Id y nombre
export function getCountries () {
    return function(dispatch) {
        //Conexión entre FRONT Y BACK
        return axios.get(`${url}/countries`)
        .then(response => {
            dispatch({
                type: 'GET_COUNTRIES',
                payload: response.data
            });
        })
        .catch(error => {
        // Manejar el error en caso de que la solicitud falle
            console.error('Error:', error);
        });
    };
}

export function getCountriesName (name) {
    return function(dispatch) {
        return axios.get(`${url}/countries?name=${name}`)
        .then(response => {
            dispatch({
                type: 'GET_COUNTRIES_NAME',
                payload: response.data
            });
        })
        .catch(error => {
        // Manejar el error en caso de que la solicitud falle
            console.error('Error:', error);
        });
    };
}
export function getCountriesId (id) {
    return function(dispatch) {
        return axios.get(`${url}/countries/${id}`)
        .then(response => {
            dispatch({
                type: 'GET_COUNTRIES_ID',
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
        type: 'FILTER_BY_CONTINENTS',
        payload
    }
}

//Filtro por actividad
export function filterTourActivity(payload){
    return {
        type: FILTER_TOUR_ACTIVITY,
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

