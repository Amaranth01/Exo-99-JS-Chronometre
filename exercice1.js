// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let ok = true;
let time = 0;

let countUp = function() {
        let today = new Date();
        today.setSeconds(0)
        seconds.innerHTML = time;
        time++;
        if (ok === true) {
            setTimeout(countUp, 1000);
        }
};
countUp();

// How can you make it stop counting?
let stopCountUp = function() {
    ok = false;
};

let stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);
