const clock = document.querySelector("h2#clock");

function getClock() {
    const date = new Date();
    clock.innerText = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
}

// setInterval(sayhello, 5000);

// setTimeout(sayhello, 5000);


getClock()
setInterval(getClock, 1000);