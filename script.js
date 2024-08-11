let timer;
let time = 0;
let running = false;

function startStop() {
    if (running === false) {
        running = true;
        increment();
        document.getElementById("startStop").innerText = "Stop";
    } else {
        running = false;
        document.getElementById("startStop").innerText = "Start";
        clearInterval(timer);
    }
}

function reset() {
    running = false;
    clearInterval(timer);
    time = 0;
    document.getElementById("display").innerText = "00:00:00";
    document.getElementById("startStop").innerText = "Start";
}

function increment() {
    timer = setInterval(function () {
        time += 10;
        let minutes = Math.floor(time / 60000);
        let seconds = Math.floor((time % 60000) / 1000);
        let milliseconds = Math.floor((time % 1000) / 10);

        document.getElementById("display").innerText =
            formatTime(minutes) + ":" + formatTime(seconds) + ":" + formatMilliseconds(milliseconds);
    }, 10);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}
function formatMilliseconds(milliseconds) {
    return milliseconds < 10 ? "0" + milliseconds : milliseconds;
}
