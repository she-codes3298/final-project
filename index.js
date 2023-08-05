function search ( city ) {
    let apiKey = "cabdbda40038ba7d1165b953b1c7bd6c";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${ city }&appid=${ apiKey }&units=metric`;

    axios.get( apiUrl ).then( displayTemperature );
}
function displayTemperature ( response ) {
    let place = document.querySelector( "#place" );
    place.innerHTML = response.data.name;
    let description = document.querySelector( "#description" );
    description.innerHTML = response.data.weather[ 0 ].description;
    let iconElement = document.querySelector( "#icon" );
    iconElement.setAttribute(
        "src",
        `http://openweathermap.org/img/wn/${ response.data.weather[ 0 ].icon }@2x.png`
    );
    iconElement.setAttribute( "alt", response.data.weather[ 0 ].description );

    let temperature = document.querySelector( "#temperature" );
    temperature.innerHTML = response.data.wind.deg;
}

function displayCity ( event ) {
    event.preventDefault()
    let element1 = document.querySelector( "#weather-api" );
    let city = element1.value;
    search( city );



}
let cityName = document.querySelector( "#city-holder" );
cityName.addEventListener( "submit", displayCity );