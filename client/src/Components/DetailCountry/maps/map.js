import { getCountries } from "../../../redux/actions/actions";

export function Maps() {
  // Lógica para obtener los países de la función getcountris
  const countries = getCountries();

  // Crea el elemento <script> para cargar la API de Google Maps
  const script = document.createElement('script');
  script.defer = true;
  script.src = 'https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=false';

  // Agrega el elemento <script> al cuerpo del documento
  document.body.appendChild(script);

  // Callback para cuando se carga la API de Google Maps
  script.onload = function () {
    // Crea el mapa y configura las opciones
    const mapOptions = {
      center: { lat: 0, lng: 0 }, // Centra el mapa en las coordenadas deseadas
      zoom: 2, // Configura el nivel de zoom inicial
    };

    // Crea el objeto del mapa y lo muestra en el elemento con id "map"
    const map = new window.google.maps.Map(document.getElementById('map'), mapOptions);

    // Itera sobre los países y crea marcadores en el mapa
    countries.forEach(function (country) {
      // Crea el marcador con las coordenadas del país
      const marker = new window.google.maps.Marker({
        position: { lat: country.lat, lng: country.lng },
        map: map,
        title: country.name,
      });

      // Crea una ventana de información para el marcador
      const infoWindow = new window.google.maps.InfoWindow({
        content: country.name,
      });

      // Asocia el evento click al marcador para mostrar la ventana de información
      marker.addListener('click', function () {
        infoWindow.open(map, marker);
      });
    });
  };
}