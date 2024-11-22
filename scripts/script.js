let globalSeconds = 0; //this is the amount of seconds

function toSeconds(minutes=true, time){
    // takes either minutes or hours and multiplies them into seconds
    if (minutes) {
        console.log(time)
        return time * 60;
    }
    else {
        console.log(time)
        return time * 60 * 60;
    }
}

function getUserTime(){
    const seconds = document.getElementById('seconds');
    const minutes = document.getElementById('minutes');
    const hours = document.getElementById('hour');
    globalSeconds = Number(seconds.value) + Number(toSeconds(true, minutes.value)) + Number(toSeconds(false, hours.value));
}

function getFutureTime(time) {
    let now = new Date()
    let futureTime = new Date(now.getTime() + time * 1000);
    console.log(futureTime)
}

function getTotal(){
    console.log(globalSeconds)
    getFutureTime(globalSeconds)
}

