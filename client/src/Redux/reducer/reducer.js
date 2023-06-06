import {
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
            if(state.countries.length === 0){
              return {
                ...state,
                countries: action.payload,
                allContinents: action.payload
              }}
            return {
                ...state,
                allContinents: action.payload,
                
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
        

        case CLEAR_FILTER :
            const clear = state.allContinents
            return {
                ...state,
                countries: clear

            } 

        case FILTER_BY_CONTINENTS:
            const continents = state.allContinents;
            const filteredContinents = action.payload === "All" ? continents :
            continents.filter(c => c.continents === action.payload)
            return{
                ...state,
                countries: filteredContinents,
            }

        case ORDER_BY_NAME:

          const type = action.payload;
          let sortedCountries = [...state.allContinents];
          let sortedCountries2 = [...state.countries]

          if (type === "a-z") {
            sortedCountries.sort((a, b) => a.name.localeCompare(b.name));
            sortedCountries2.sort((a, b) => a.name.localeCompare(b.name));
            return{
              ...state,
              allContinents: sortedCountries,
              countries: sortedCountries2
            }
          } 
          if (type === "z-a") {
            sortedCountries.sort((a, b) => b.name.localeCompare(a.name));
            sortedCountries2.sort((a, b) => b.name.localeCompare(a.name));
            return{
              ...state,
              allContinents: sortedCountries,
              countries: sortedCountries2
            }
          }else{
            sortedCountries = state.allContinents
          }
          
          return {
            ...state,
            countries: sortedCountries
          };

        
          case ORDER_BY_POPULATION:
          let populationOrden = [];
          let populationOrden2 = [];

          if (action.payload === "asc") {
            populationOrden = state.allContinents.slice().sort((a, b) => b.population - a.population);
            populationOrden2 = state.countries.slice().sort((a,b)=> b.population - a.population);
            return{
              ...state,
              allContinents: populationOrden,
              countries: populationOrden2
            }
          } 
          if (action.payload === "desc") {
            populationOrden = state.allContinents.slice().sort((a, b) => a.population - b.population);
            populationOrden2 = state.countries.slice().sort((a, b) => a.population - b.population);
            return{
              ...state,
              allContinents: populationOrden,
              countries: populationOrden2
            }
          } else {
            populationOrden = state.allContinents;
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
         
            case FILTER_BY_SEASON:
                const { payload } = action;
              
                const filteredActivities = state.allContinents.map((act) => {

                  const temporada = act.activities.map((el) => ({ seasons: el.season }));

                  return {
                    id: act.id,
                    name: act.name,
                    flags: act.flags,
                    continents: act.continents,
                    capital: act.capital,
                    population: act.population,
                    activities: temporada,
                  };
                });
              
                let seasonActivities = [];
                if (payload === 'All') {
                  seasonActivities = filteredActivities.filter((el) => el.activities.length > 0);
                } else {
                  seasonActivities = filteredActivities.filter((el) =>
                    el.activities.some((s) => s.seasons && s.seasons.includes(payload))
                  );
                }
                return {
                  ...state,
                  countries: seasonActivities,
                }; 

          case DELETE_ACTIVITY:
            const { payload: activityId } = action;
            const updatedActivities = state.activities.filter((activity) => activity.id !== activityId);
      
            return {
              ...state,
              activities: updatedActivities,
            };
        default:
                return state;
    }

}

export default rootReducer;


