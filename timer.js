// add properties and methods for your timer here
class Timer {
  //STEP 0: Add necessary properties for your timer
  constructor() {
    this.time = 0;
    this.intervalID = 0;
  }

  // STEP1: Create a start method to start the timer
  start(callback) {
    this.intervalID = setInterval(() => {
      this.time = this.time + 1;
      updateTime();
    }, 1000);
  }

  // STEP2: Create a stop method to stop the timer
  stop() {
    clearInterval(this.intervalID);
  }
}
