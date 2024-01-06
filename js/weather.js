
function getPosition (position) {
    const API_KEY = "24530cbbf805a169fa2e63ac286b6772";
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const cityName = data.name;
        const weatherDesc = data.weather[0].main;
        const tempNo = data.main.temp;
        toDisplayWeather(cityName,weatherDesc,tempNo);
    })
}

function handleError () {
    alert("위치 정보가 없어 날씨 정보를 파악하기 어렵습니다.");
}

function toDisplayWeather (cityName,weatherDesc,tempNo) {
    const weatherBox = document.getElementById("weatherBox");
    weatherBox.innerText = `${cityName} ${weatherDesc} / ${tempNo}`;
}

navigator.geolocation.getCurrentPosition(getPosition, handleError);