import {
    GET_COUNTRIES, 
    GET_COUNTRIES_NAME,
    GET_COUNTRIES_ID,
    FILTER_BY_CONTINENTS,
    FILTER_TOUR_ACTIVITY,
    ORDER_BY_NAME,
    ORDER_BY_POPULATION
} from "../actions/actions.js"

const initialState = {
    countries: [],
    allContinents: [],
    activities: [],
    detailId: {},
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

        case FILTER_TOUR_ACTIVITY:
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
                }

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
            
                 

        default:
                return state;
    }

}

export default rootReducer;