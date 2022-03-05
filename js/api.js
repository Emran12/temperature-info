const getTemperature = () => {
    const API_KEY = 'ce5df87a1f6cbc6133d766ceb937328e';
    const location = document.getElementById('location').value;
    document.getElementById('location').value = '';
    const url = `https://api.openweathermap.org/data/2.5/weather?q= ${location}&units=metric&appid=${API_KEY}`
    fetch(url)
        .then(res => res.json())
        .then(data => getData(location, data))
}

const getData = (location, data) => {
    console.log(data);
    setInnerText('city', data.name);
    setInnerText('temperature', data.main.temp)
}

const setInnerText = (id, value) => {
    const elem = document.getElementById(id);
    elem.innerText = value;
}