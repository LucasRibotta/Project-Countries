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
    CLEAR_FILTER,
    FILTER_BY_SEASON,
    DELETE_ACTIVITY
    } from '../actions-types/actions-types'


export function getCountries(){
  return function(payload){
   return axios.get(`${url}/countries`)
    .then((resp)=> {
      payload({
        type: GET_COUNTRIES,
        payload: resp.data
      })
    }).catch((error) => {
     console.log(error)
    })
  }
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

export function clearFilter(){
    return{
      type: CLEAR_FILTER
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
export function orderByName(sortOrder) {
  return {
    type: ORDER_BY_NAME,
    payload: sortOrder,
  };
}

//Orden por población
export function orderByPopulation(payload) {
  return {
    type: ORDER_BY_POPULATION,
    payload
  };
}


export const createActivity = (payload) => {
  return async function (dispatch) {
      const apiData = await axios.post(`${url}/activities`, payload)
      
      dispatch({type: POST_ACTIVITY, payload: apiData})
  }
}


//Busca las actividades creadas
export const getActivityCreated = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`${url}/activities`);
      const activities = response.data;

      dispatch({ type: GET_ACTIVITY_CREATED, payload: activities });
    } catch (error) {
      console.log(error);
     
    }
  };
};

export function filterBySeason(payload) {
  return {
    type: FILTER_BY_SEASON,
    payload
  };
  
}

export function deleteActivity(activityId){
  return {
    type: DELETE_ACTIVITY,
    payload: activityId 
  };
}
