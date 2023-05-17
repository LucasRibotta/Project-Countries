import {
    GET_COUNTRIES,
    GET_COUNTRIES_NAME,
    GET_COUNTRIES_ID,
    FILTER_BY_CONTINENTS,
    ORDER_BY_NAME,
    ORDER_BY_POPULATION,
    GET_ACTIVITY_CREATED,
    POST_ACTIVITY,
    COUNTRY_BY_ACTIVITY} from '../actions-types/actions-types'

const initialState = {
    countries: [],
    allContinents: [],
    activities: [],
    /* detailId: {}, */
    controllActivities: {}, 
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

        case GET_COUNTRIES_ID:
            return {
                ...state,
                detailId: action.payload,
            }

        case FILTER_BY_CONTINENTS:
            const continents = state.allContinents;
            const filteredContinents = action.payload === "All" ? continents :
            continents.filter(c => c.continents === action.payload)
            return{
                ...state,
                countries: filteredContinents
            }

       /*  case FILTER_TOUR_ACTIVITY:
                const seasonFilter = action.payload.season;
                const filteredActivityCountrys = state.countries.filter(country => {
                    const hasTourActivities = country.activity.length > 0;
                    let passesSeasonFilter = true;
                    if(seasonFilter){
                        passesSeasonFilter = country.season === seasonFilter
                    }
                    return hasTourActivities && passesSeasonFilter
                })

            return{
                ...state,
                countries: filteredActivityCountrys
                } */

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
            const populationOrden = (a, b) => {
                if(b.population > a.population) return 1;
                if(a.population > b.population)return -1;
                return 0
            }
            if (action.payload === "population +") {
                return {
                  ...state,
                 countries: state.countries.slice().sort(populationOrden),
                
                }
              } else {
                return {
                  ...state,
                  countries: state.countries.slice().sort(populationOrden).reverse(),
                 
                }
              } 
         
        case GET_ACTIVITY_CREATED:
            return {
                ...state,
                activities: action.payload

            }      
        
        case COUNTRY_BY_ACTIVITY:
            const activitiesbycountries = state.activities
            const countrysAll = state.countries
            const filtro = action.payload === 'sin filtros' ? countrysAll : activitiesbycountries.filter(a=> a.name ===  action.payload)[0].countries.map(e => e)
            return {
                ...state,
                countries: filtro
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