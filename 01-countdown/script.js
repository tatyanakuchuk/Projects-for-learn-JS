const timerDays = document.querySelector('.timer__days .timer__number');
const timerHours = document.querySelector('.timer__hours .timer__number');
const timerMinutes = document.querySelector('.timer__minutes .timer__number');
const timerSeconds = document.querySelector('.timer__seconds .timer__number');

const DATE_OF_EVENT = '2024 04 03';

const ONE_DAY_IN_SECONDS = 86400;
const ONE_HOUR_IN_SECONDS = 3600;
const ONE_MINUTE_IN_SECONDS = 60;

const getTimeLeft = () => {
    const currentTime = Date.now();
    const dateOfEvent = new Date(DATE_OF_EVENT).getTime();

    // getting rid of milliseconds and getting difference in seconds
    const diff = (dateOfEvent - currentTime) / 1000;

    // get days
    const daysLeft = Math.floor(diff / ONE_DAY_IN_SECONDS);
    // get days in seconds
    const daysLeftInSec = daysLeft * ONE_DAY_IN_SECONDS;
    // set days
    timerDays.innerHTML = daysLeft;

    // get hours
    const hoursLeft = Math.floor((diff - daysLeftInSec) / ONE_HOUR_IN_SECONDS);
    // get hours in seconds
    const hoursLeftInSec = hoursLeft * ONE_HOUR_IN_SECONDS;
    // set hours
    timerHours.innerHTML = hoursLeft;

    // get minutes
    const minutesLeft = Math.floor((diff - daysLeftInSec - hoursLeftInSec) / 60);
    // get minutes in seconds
    const minutesLeftInSec = minutesLeft * 60;
    // set minutes
    timerMinutes.innerHTML = minutesLeft;

    // get seconds
    const secondsLeft = Math.floor(diff - daysLeftInSec - hoursLeftInSec - minutesLeftInSec);
    // set seconds
    timerSeconds.innerHTML = secondsLeft;
}

const setDays = () => {};

const setHours = () => {};

const setMinutes = () => {};

const setSeconds = () => {};

const getCurrentTime = () => {}

const setTimer = (fc) => {
    setInterval(fc, 1000);
}

setTimer(getTimeLeft);

//======================================================
// What is the unix time stamp?
// The unix time stamp is a way to track time as a running total of seconds.

// Fri Feb 09 2024 11:17:53 GMT+0100 
const currentDate = new Date();

// текущее время
// console.log(currentDate);

// время дня Х
// console.log(new Date(DATE_OF_EVENT));

// переводим в UnixTime

// use methods of Object Date()
// console.log(currentDate.getFullYear());

// 0...11
// console.log(currentDate.getMonth()); 

// day of month
// console.log(currentDate.getDate());

// day of week 0..6 (from sunday to saturday)
// console.log(currentDate.getDay()); 

// 0...24
// console.log(currentDate.getHours());

// 0...59
// console.log(currentDate.getMinutes());
// console.log(currentDate.getSeconds());

// get unixTime
// console.log(currentDate.getTime());
// console.log(Date.now());
// =====================================================