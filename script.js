let startBtn = document.querySelector("#start");
let stopBtn = document.querySelector("#stop");
let timeDOM = document.querySelector("#timer");

// STEP 3: Create an object from the timer class

let timeObj = new Timer();

function updateTime() {
  // update the time DOM here
  // console.log('Here')
  timeDOM.textContent = timeObj.time;
}

startBtn.addEventListener("click", () => {
  // Call the timer start method
  timeObj.start();
  updateTime();
});

stopBtn.addEventListener("click", () => {
  // Call the timer stop method
  timeObj.stop();
});
