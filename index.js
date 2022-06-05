// Global variables
const time_hms = document.querySelector(".hms .time");
// const start_btn = document.getElementById("startbtn");
const start_btn = document.querySelector("#startbtn").addEventListener('click', start_Timer);
const pause_btn = document.querySelector(".btns .pause").addEventListener('click', pause_Timer);
const stop_btn = document.getElementById("stopbtn").addEventListener('click', reset_Timer);

let seconds = 0;
let controller = null;

function sw_timer(){
    seconds++;

    let hrs = Math.floor(seconds / 3600);
    let min = Math.floor((seconds - (hrs * 3600)) / 60);
    let sec = seconds % 60;

    formatter(hrs, min, sec);
}

function formatter (hrs, min, sec) {
    if(hrs < 10) hrs = '0' + hrs;
    if(min < 10) min = '0' + min;
    if(sec < 10) sec = '0' + sec;

    time_hms.innerHTML = `${hrs}:${min}:${sec}`;
}


function start_Timer(){
    if(controller) return;
    controller =  setInterval(sw_timer, 1000);
    // setTimeout(sw_timer, 1000);
}

function pause_Timer(){
    clearInterval(controller);
    controller = null;
}

function reset_Timer(){
    pause_Timer();
    seconds = -1;
    sw_timer();
    // time_hms.innerText = "00:00:00";
}