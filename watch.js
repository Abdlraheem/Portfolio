var seconds = 0;
var hundreds = 0;

var appendHundred = document.getElementById('hundreds');
var appendSeconds = document.getElementById('seconds');


var buttonStart = document.getElementById('button-start');
var buttonStop = document.getElementById('button-stop');
var buttonReset = document.getElementById('button-reset');

var interval;

//start button click

function startTimer(){
    hundreds++;
    if(hundreds <=9){
        appendHundred.innerHTML = "0" + hundreds;

    };
    if(hundreds > 9){
        appendHundred.innerHTML= hundreds;
    }
    if(hundreds >99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        hundreds = 0;
        appendHundred.innerHTML = "0" + 0;;
    }
    if(seconds > 9){
        appendSeconds.innerHTML = seconds
    }
};

buttonStart.onclick = function(){
    if(interval) {
        clearInterval(interval);
    }
    interval = setInterval(startTimer, 10);
};


buttonStop.onclick = function(){
    clearInterval(interval);
}

buttonReset.onclick = function(){
    clearInterval(interval)
    hundreds = "00";
    seconds = "00";
    appendSeconds.innerHTML = seconds;
    appendHundred.innerHTML = hundreds

}

setInterval(myTimer, 1000);
function myTimer(){
    const date = new Date();
    document.getElementById('watch').innerHTML = date;
}