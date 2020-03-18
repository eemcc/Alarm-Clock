
function getTime(){
    const date = new Date();
    let hour = date.getHours();
    let min = date.getMinutes();
    let second = date.getSeconds();
    let amPm = "AM";
    if (hour > 12){
        hour = hour - 12;
        amPm = "PM";
    }
    if (hour < 10){
        hour = "0" + hour;
    }
    if (min < 10){
        min = "0" + min;
    }
    if (second < 10){
        second = "0" + second;
    }
    // console.log(hour + ':' + min + ':' + second);
    
    var currentTime = document.getElementById("clock").innerHTML = hour + ':' + min + ':' + second + " " + amPm;
};
getTime();
setInterval(getTime, 1000);

var sound = new Audio("https://www.freespecialeffects.co.uk/soundfx/animals/duck1.wav");
sound.loop = true;

function alarmClock(){
    var alarmHour = document.getElementById("pickHour");
    var alarmMinutes = document.getElementById("pickMinutes");
    var alarmSeconds = document.getElementById("pickSeconds");
    if (document.getElementById("AM").checked){
        var alarmAMPM = document.getElementById("AM");
    } else{
        var alarmAMPM = document.getElementById("PM");
    }
    var selectedHour = alarmHour.options[alarmHour.selectedIndex].value;
    var selectedMin = alarmMinutes.options[alarmMinutes.selectedIndex].value;
    var selectedSec = alarmSeconds.options[alarmSeconds.selectedIndex].value;
    var selectedAP = alarmAMPM.options[alarmAMPM.selectedIndex].value;

    document.getElementById("pickHour").disabled = true;
	document.getElementById("pickMinutes").disabled = true;
	document.getElementById("pickSeconds").disabled = true;

    var alarmTime = selectedHour + ":" + selectedMin + ":" + selectedSec + " " + selectedAP;

    if (alarmTime === currentTime){
            sound.play();
    }
}

function resetAlarm(){
    document.getElementById("pickHour").disabled = false;
	document.getElementById("pickMinutes").disabled = false;
	document.getElementById("pickSeconds").disabled = false;
	sound.pause();
}
const seconds = document.getElementById("pickSeconds")

const maxSeconds = 59;

for (let index = 0; index <= maxSeconds; index++) {
    seconds.innerHTML= seconds.innerHTML + `<option value="${index}">${index}</option>`; 
    if (seconds < 10){
        seconds = "0" + seconds;
    }
}

const minutes = document.getElementById("pickMinutes")

const maxMinutes = 59;

for (let index=0; index<=maxMinutes; index++){
    minutes.innerHTML = minutes.innerHTML + `<option value="${index}">${index}</option>`;
    if (minutes < 10){
        minutes = "0" + minutes;
    }
}

const hours = document.getElementById("pickHour")

const maxHour = 12;

for (let index = 0; index <=maxHour; index ++){
    hours.innerHTML = hours.innerHTML + `<option value="${index}">${index}</option>`;
    if (hours < 10){
        hours = "0" + hours;
    }
}


