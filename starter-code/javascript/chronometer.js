class Chronometer {
  constructor() {

    this.currentTime = 0;
    this.intervalId
  
  }

   startClick() {
     this.intervalId = setInterval(() => {
      this.currentTime ++;
    }, 1000);
   }

   
   getMinutes() {
     let timeInMinutes = Math.floor(this.currentTime / 60)
     return timeInMinutes
   }  

   getSeconds() {
     let remainingSeconds = Math.floor(this.currentTime % 60)
      return remainingSeconds
   }

   twoDigitsNumber(value) {
    if(value < 10){
      return "0" + `${value}`
    }else{
      return `${value}`
    }
   }

   stopClick() {
     clearInterval(this.intervalId)
   }

   resetClick() {
    this.currentTime = 0;
    
   }

  // splitClick() {
  // ..
  // }
}
