let isim = prompt("Adınızı Girin: ")
let myName = document.querySelector("#myName")
myName.innerHTML = isim;

let myClock = document.querySelector("#myClock")
function showTime() {
    const nowDate = new Date();
    myClock.innerHTML = `
        ${nowDate.getHours()}:${addZero(nowDate.getMinutes())}:${addZero(nowDate.getSeconds())}
        ${nowDate.toLocaleDateString('tr-tr', {weekday:"long"})}`
    setTimeout(showTime, 1000);
}
document.addEventListener("DOMContentLoaded", showTime);

function addZero(i) {
         if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
         return i;
     }


//DOMContentLoaded

// function doSomething() {
//     console.info('DOM loaded');
//   }
  
//   if (document.readyState === 'loading') {  // Loading hasn't finished yet
//     document.addEventListener('DOMContentLoaded', doSomething);
//   } else {  // `DOMContentLoaded` has already fired
//     doSomething();
//   }
  

// CLOCK

// function startTime() {
//     const today = new Date();
//     let h = today.getHours();
//     let m = today.getMinutes();
//     let s = today.getSeconds();
//     m = checkTime(m);
//     s = checkTime(s);
//     document.getElementById('txt').innerHTML = h + ":" + m + ":" + s;
//     setTimeout(startTime, 1000);
// }

// function checkTime(i) {
//     if (i < 10) { i = "0" + i };  // add zero in front of numbers < 10
//     return i;
// }