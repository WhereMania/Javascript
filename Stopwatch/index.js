

const Time = document.getElementById("Time");
let timer = null;
let startTIme = 0;
let elapsedTIme = 0 ;
let isRunning = false;


function start() {

    if(!isRunning) {
        startTIme = Date.now() - elapsedTIme;
        timer = setInterval(update, 1000);
        isRunning = true;
    }



}
function stop() {



}

function reset() {}


function update(){
    const currentTime = Date.now();
    elapsedTIme = currentTime - startTIme;

    let hours = Math.floor(elapsedTIme /(1000*60*60));
    let minutes = Math.floor(elapsedTIme/ (1000 * 60) %60 ); 
    let seconds = Math.floor(elapsedTIme / 1000 % 60);
    let milliseconds = Math.floor(elapsedTIme % 1000 / 10);

    Time.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`

}