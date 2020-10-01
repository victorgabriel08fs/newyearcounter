const secondsContainer = document.querySelector('#seconds');
const minutesContainer = document.querySelector('#minutes');
const hoursContainer = document.querySelector('#hours');
const daysContainer = document.querySelector('#days');
const nextYearContainer = document.querySelector('#year');
const spinnerLoading = document.querySelector('#loading');
const countdownContainer = document.querySelector('#countdown')



const nextYear = new Date().getFullYear() + 1;
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`);

nextYearContainer.textContent = nextYear;

const insertCountDownValues = ({ days, hours, minutes, seconds }) => {
    secondsContainer.textContent = seconds < 10 ? '0' + seconds : seconds;
    minutesContainer.textContent = minutes < 10 ? '0' + minutes : minutes;
    hoursContainer.textContent = hours < 10 ? '0' + hours : hours;
    daysContainer.textContent = days < 10 ? '0' + days : days;
}

const updateCounter = () => {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    insertCountDownValues({ days, hours, minutes, seconds })
}

const handleCountDownDisplay = () => {
    spinnerLoading.remove();
    countdownContainer.style.display = 'flex';
}

setTimeout(handleCountDownDisplay, 1000);

setInterval(updateCounter, 1000);