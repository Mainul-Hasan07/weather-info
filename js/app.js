const API_KEY = `fedccea9ffc29f65a320f71b0daba15e`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
    .then(res => res.json())
    .then(data => displayTemperature(data))
}


const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}


const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    //set weather
    const url = `http://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imageIcon = document.getElementById('weather-icon');
    imageIcon.setAttribute('src', url);
}