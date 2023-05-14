import axios from 'axios';

export function getCountries () {
    return function(dispatch) {
        //Conexión entre FRONT Y BACK
        return axios.get("http://localhost:3001/countries")
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


