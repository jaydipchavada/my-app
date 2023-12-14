const display1 = document.getElementById('hour');
const display2 = document.getElementById('minutes');
const display3 = document.getElementById('seconds');
const display4 = document.getElementById('meridiem');
const greet = document.getElementById('greet');

function updateTime() {
    const date = new Date();

    let hour = date.getHours();
    const minutes = formatTime(date.getMinutes());
    const seconds = formatTime(date.getSeconds());
    const meridiem = (hour >= 12) ? "PM" : "AM";
    // display4.innerHTML = `${meridiem}`;



    display1.innerHTML = `${formatTime(hour)}`;
    display2.innerHTML = `${minutes}`;
    display3.innerHTML = `${seconds}`;
    display4.innerHTML = `${meridiem}`;

    const welcomeTypes = ["Good Morning","Good Afternoon", "Good Evening"];
    let welcomeText = "";

    if (hour < 12) welcomeText = welcomeTypes[0];
    else if (hour < 18) welcomeText = welcomeTypes[1];
    else welcomeText = welcomeTypes[2];

    greeting.innerHTML = `${welcomeText}`;
    console.log(greeting);
}


function formatTime(time) {
    return (time < 10) ? '0' + time : time;
}

setInterval(updateTime, 1000);

function setImage(select) {
    const image = document.getElementsByName("image-swap")[0];
    image.src = select.options[select.selectedIndex].value;
}

function setTimer() {
    const selectWakeTime = document.getElementById("setWakeTime");
    const optionWake = selectWakeTime.options[selectWakeTime.selectedIndex];

    const selectLunchTime = document.getElementById("setLunchTime");
    const optionLunch = selectLunchTime.options[selectLunchTime.selectedIndex];

    const selectNapTime = document.getElementById("setNapTime");
    const optionNap = selectNapTime.options[selectNapTime.selectedIndex];

    if (
        optionWake.value == "default" &&
        optionLunch.value == "default" &&
        optionNap.value == "default"
    ) {
        
    } else {
        document.getElementById("greet").style.display = "block";
    }

    if (optionWake.value != "default") {
        document.getElementById(
            "wakeupTime"
        ).innerHTML = `Wake Up Time: ${optionWake.innerHTML}`;
    }
    if (optionLunch.value != "default") {
        document.getElementById(
            "lunchTime"
        ).innerHTML = `Lunch Time: ${optionLunch.innerHTML}`;
    }
    if (optionNap.value != "default") {
        document.getElementById(
            "napTime"
        ).innerHTML = `Nap Time: ${optionNap.innerHTML}`;
    }
}
