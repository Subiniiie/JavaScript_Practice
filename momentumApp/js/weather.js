// 깃에 올릴 때 지우기
const API_KEY = "10c26ff4b41b701d5645ca27eb3f088f"  

function onGeoOk(position) {
    let lat = position.coords.latitude
    let lon = position.coords.longitude
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url).then(response => response.json()).then(data => {
        const weather = document.querySelector("#weather :nth-child(1)")
        const temp = document.querySelector("#weather :nth-child(2)")
        const city = document.querySelector("#weather :nth-child(3)")
        weather.innerText = data.weather[0].main
        temp.innerText = `${Math.round(data.main.temp)}ºC`
        city.innerText = data.name
    })
}


function onGeoError(){
    alert("Can't find you. No weather for you.")
}


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)