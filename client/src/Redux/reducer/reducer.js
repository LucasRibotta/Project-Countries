import {
    GET_COUNTRIES,
    GET_COUNTRIES_NAME,
    GET_DETAIL,
    FILTER_BY_CONTINENTS,
    ORDER_BY_NAME,
    ORDER_BY_POPULATION,
    GET_ACTIVITY_CREATED,
    POST_ACTIVITY,
    CLEAR_DETAIL,
    FILTER_BY_ACTIVITY,
    } from '../actions-types/actions-types'

const initialState = {
    countries: [],
    allContinents: [],
    activities: [],
    detailId: [], 
    controllActivities: {}, 
    season: [],
    
}

function rootReducer (state= initialState, action) {
    switch(action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload,
                allContinents: action.payload
            }

        case GET_COUNTRIES_NAME :
            return {
                ...state,
                countries: action.payload
            }

        case GET_DETAIL:
            return {
                ...state,
                detailId: action.payload,
            }
        

        case CLEAR_DETAIL :
            return {
                ...state,
                detailId: [],
            }    
        
            
        

        case FILTER_BY_CONTINENTS:
            const continents = state.allContinents;
            const filteredContinents = action.payload === "All" ? continents :
            continents.filter(c => c.continents === action.payload)
            return{
                ...state,
                countries: filteredContinents
            }

            case FILTER_BY_ACTIVITY:
              const { season } = action.payload;
              const allCountries = state.countries;
              let filteredCountries = [];
            
              if (season === "All") {
                filteredCountries = allCountries;
              } else {
                filteredCountries = allCountries.filter((country) => {
                  return country.activities.some(
                    (activity) => activity.season.toLowerCase() === season.toLowerCase()
                  );
                });
              }
            
              return {
                ...state,
                countries: filteredCountries
              };


        case ORDER_BY_NAME:
               const { type } = action.payload;
               const sortedCountries = [...state.countries];
                  
               if (type === "a-z") {
                 sortedCountries.sort((a, b) => a.name.localeCompare(b.name));
               } else if (type === "z-a") {
                 sortedCountries.sort((a, b) => b.name.localeCompare(a.name));
               }
                  
               return {
                 ...state,
                      countries: sortedCountries
               };
              
               case ORDER_BY_POPULATION:
                let populationOrden;
                if (action.payload === "asc") {
                  populationOrden = state.countries.slice().sort((a, b) => b.population - a.population);
                } else if (action.payload === "desc") {
                  populationOrden = state.countries.slice().sort((a, b) => a.population - b.population);
                } else {
                  populationOrden = state.countries;
                }
                return {
                  ...state,
                  countries: populationOrden,
                };
                      
         
        case GET_ACTIVITY_CREATED:
            return {
                ...state,
                activities: action.payload

            }      
        
        
        case POST_ACTIVITY:
            return {
                ...state,
                controllActivities: action.payload
            }      
            
                 

        default:
                return state;
    }

}

export default rootReducer;