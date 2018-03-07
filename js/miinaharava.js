"use strict";
// let MH = {
//   teeKentta = function() {
//
//   },
//   luoRuutu = function() {
//
//   },
//   boom = function() {
//
//   }
// }

// let klikki = $(this).data("numero")

$(document).ready(function(){
  let i = 0; // kaikki ruudut
  let j = 0; // ruutu rivillä
  let rivi = 0;
  let canvas = document.getElementById("miinakenttä");
  let ruutu = canvas.getContext("2d");
  let kuva = document.getElementById("ruutu");
  try {
    do {
      //
      if (i % 8 === 0){
        rivi++;
        j = 0;
      }
      console.log(i,j,rivi);
      ruutu.drawImage(kuva,j*50,rivi*50);
      i++;
      j++;
    } while (i < 64);
  }
  catch (e) {
    console.log(e.Name);
    console.log(e.Message);
    console.log(e);
  }
  function getCursorPosition(canvas, event) {
    var rect = canvas.getBoundingClientRect();
    var x = event.clientX - rect.left;
    var y = event.clientY - rect.top;
    console.log("x: " + x + " y: " + y);
  }

  $('#miinakenttä').click(function(){
    getCursorPosition(canvas, event);
    let pommit = [];
    let satunnainen;
    let i = 1;
    pommit[0] = -1;
    do {
      satunnainen = 1 + Math.floor(Math.random() * 64);
      if (pommit.indexOf(satunnainen) === -1) {
        pommit[i] = satunnainen;
        i++;
      }
    } while (pommit.length < 10);
    console.log(pommit);
  });
});
