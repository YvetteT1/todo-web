const clock = document.getElementById("clock");

function updateClock () {
    const dateTime = new Date();
    const hours = String(dateTime.getHours()).padStart(2,"0");
    const minutes = String(dateTime.getMinutes()).padStart(2,"0");
    const seconds = String(dateTime.getSeconds()).padStart(2,"0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock,1000);

