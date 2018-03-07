"use strict";
let funktiot = [ // lykkäsin kaikki syötteitä vastaavat funktiot tarjottimelle niin on mukava servata.
  function() { // listataa kaikki
    APPI.luoPopup("list");
    for (var i = 0; i < APPI.komennot.length; i++) {
      // $('.popup').append(APPI.komennot[i] + "<br/>");
      APPI.taytaPopup(APPI.komennot[i] + "<br />");
    }
    APPI.luoNappi("oikAla", "palaa", "APPI.poistaPopup()");
  },function() {
    // google
    APPI.luoPopup("google");
    APPI.taytaPopup("<p>Siirrytäänkö Googleen?</p>");
    APPI.luoNappi("gKyllä", "Kyllä", "window.location=`https://google.com`");
    APPI.luoNappi("gEi", "Palaa", "APPI.poistaPopup()");
  },function() {
    // janne
    APPI.luoPopup("janne");
    APPI.luoNappi("oikAla", "palaa", "APPI.poistaPopup()");
  },function() {
    // responsiivinen
    APPI.luoPopup("respo");
    APPI.taytaPopup("<p>Tää oli oikeesti ihan saatanan hauska kurssi, en ollu koskaan ennen koskenu mihinkään css:ää korkeempiin voimiin selaimissa. Kaikki tää kamaluus on siis tään kurssin innoittamana opittua >:3</p>");
    APPI.taytaPopup('<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FStaartOy%2Fvideos%2F10154505275659376%2F&show_text=0&width=476" width="476" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe><br />');
    APPI.taytaPopup("<p>PS. Toivottavasti maistuu tämä “responsiivisuus”.</p>")
    APPI.luoNappi("oikAla", "palaa", "APPI.poistaPopup()");
  },function() {
    // mielenhallintakakkara
    APPI.luoPopup("mielenhallintakakkara");
    APPI.taytaPopup("<h2>Klikkaa kakkaraa!</h2>");
    APPI.taytaPopup("<img src='https://i.imgur.com/qsFUkTZ.png' />");
    APPI.luoNappi("oikAla", "palaa", "APPI.poistaPopup()");
    APPI.pyoritaKakkaraa();
  },function() {
    // hans
    APPI.luoPopup("CantHoldThisHans");
    setTimeout(function(){ // DRAMATIIKKAA
      APPI.tuotaHANS();
    },1000);
    APPI.luoNappi("HusHans!","Että mitä?","APPI.poistaPopup()");
  },function() {
    // akku
    APPI.luoPopup("akku");
    APPI.alustaAkku(); // Haetaan promise ja odotetaan 300ms sen valmistumista.
    setTimeout(function(){
      if (!APPI.toimiikoAkku() === false) {
        APPI.taytaPopup("<p>Akun taso on: " + APPI.toimiikoAkku() * 100 +"%</p>");
      } else {
        APPI.taytaPopup("<p>Valitettavasti toiminto ei tue  selaintasi.</p>");
      }
    }, 300);
  },function() {
    // miinaharava
    APPI.luoPopup("miinaharava-parent");
    APPI.taytaPopup("<img src='images/Cool.png' id='miinaNaama' height='50' width='50'>");
    APPI.taytaPopup("<canvas id='miinakenttä' width='400' height='400'></canvas>");
    APPI.miinapeli();
    APPI.luoNappi("suljeMiina","Sulje","APPI.poistaPopup()");
  },function() {
    // gentoo
    APPI.luoPopup("gentoo");
    APPI.taytaPopup("<h1>ASENNA GENTOO<p>");
    APPI.luoNappi("gentoo1","JOO!","window.location=`https://www.gentoo.org/downloads/`");
    APPI.luoNappi("gentoo1","todellAKI!","window.location=`https://www.gentoo.org/downloads/`");
  },function() {
    // kärpät
    window.close();
  },function () { // peter
    APPI.luoPopup("ounou");
    APPI.taytaPopup("<p>EI OLLU HYVÄ IDEA</p><p>PS. Eevertti teki kuvam käsintelyt.</p>");
    APPI.luoNappi("😂", "😂", "APPI.poistaPopup()"); // 😂
  }
]

let APPI = { // jannen oma objekti
  luoPopup: function(v) {
    let popUp = "<div class='popup "+v+"'></div>";
    $(".APPI-inner").append(popUp);
  },
  toimiikoAkku: function() {
    let taso = parseFloat($("#piilo").text());
    if (taso > 0) {
      return taso;
    } else {
      return false;
    }
  },
  poistaPopup: function() {
    $(".popup").remove();
    $(".APPI-syote").focus(); /* Heitetään tähtäin takaisin hattuun */
  },
  taytaPopup: function(a) {
    $(".popup").append(a);
  },
  luoNappi: function(a, b, c) {
    $(".popup").append("<input type='button' class='"+a+"' value='"+b+"' onclick='"+c+"' />");
  },
  poistaNappi: function(a) {
    $(a).remove();
  },
  paivitaAkku: function(akku) {
    if (!akku === false) {
      $("#piilo").empty();
      $("#piilo").append(akku.level);
    } else {
      $("#piilo").empty();
      $("#piilo").append(-1);
    }
  },
  putsaa: function() {
    $(".APPI-syote").val("");
  },
  komennot: ['listaa kaikki', 'google', 'janne', 'responsiivinen', 'mielenhallintakakkara', 'hans', 'akku', 'miinaharava', 'gentoo', 'kärpät', 'peter'],
  miinapeli: function() {
    let i = 0, coordX = 0, coordY = 0;
    let canvas = document.getElementById("miinakenttä"), konteksti = canvas.getContext("2d"), kuva = document.getElementById("ruutu");
    try {
      do {
        if (i > 7 && i % 8 === 0){
          coordY++;
          coordX = 0;
        }
        konteksti.drawImage(kuva,coordX*50,coordY*50);
        i++;
        coordX++;
      } while (i < 64);
    }
    catch (e) {
    }
    $('#miinakenttä').click(function(){
      if (!APPI.gameOver) {
        let pommit = [APPI.haeKlikki(canvas, event)];
        let satunnainen;
        let i = 1;
        do {
          satunnainen = Math.floor(Math.random() * 64);
          if (pommit.indexOf(satunnainen) === -1) {
            pommit[i] = satunnainen;
            i++;
          }
        } while (pommit.length < 10);
        APPI.piirraPommit(pommit);
      }
    });
  },
  piirraPommit: function(pommit) {
    let canvas = document.getElementById("miinakenttä"), konteksti = canvas.getContext("2d"), kuva = document.getElementById("pommi");
    try {
      let i = 1;
      let coordY, coordX;
      do {
        coordY = Math.floor(pommit[i]/8); // tämä on oikein
        coordX = pommit[i] - coordY*8;
        konteksti.drawImage(kuva,coordX*50,coordY*50);
        i++;
      } while (i < 10);
      APPI.gameOver = true;
      APPI.miinaNaama();
      APPI.luoNappi("uusiPeli", "Koita uudelleen", "APPI.miinapeli(),APPI.gameOver = false,APPI.poistaNappi(`.uusiPeli`),APPI.miinaNaama()");
    }
    catch (e) {
    }
  },
  piirraKlikki : function(klikattuRuutu) {
    let canvas = document.getElementById("miinakenttä"), konteksti = canvas.getContext("2d"), kuva = document.getElementById("pommiklikattu");
    let coordY, coordX;
    coordY = Math.floor(klikattuRuutu / 8);
    coordX = klikattuRuutu - coordY * 8;
    try {
      konteksti.drawImage(kuva,coordX * 50,coordY * 50);
    }
    catch (e) {
    }
  },
  haeKlikki : function(canvas, event) {
    let rect = canvas.getBoundingClientRect();
    let coordX = event.clientX - rect.left;
    let coordY = event.clientY - rect.top;
    let klikattuRuutu = Math.floor(coordY/50) * 8 + Math.floor(coordX/50);
    APPI.piirraKlikki(klikattuRuutu);
    return klikattuRuutu;
  },
  miinaNaama : function() {
    if (APPI.gameOver === false) {
      $("#miinaNaama").attr("src",'images/Cool.png');
    } else if (APPI.gameOver === true) {
      $("#miinaNaama").attr("src",'images/Lose.png');
    }
  },
  gameOver : false,
  alustaAkku : function() {
    try {
      navigator.getBattery().then(function(akku) {
        APPI.paivitaAkku(akku);
        akku.onlevelchange = function () {
          APPI.paivitaAkku(akku);
        };
      });
    }
    catch (e) {
      APPI.paivitaAkku(false);
    }
  },
  tuotaHANS : function(){
    let hans = $(".Hanscii").text();
    $(".popup").append(hans);
  },
  pyoritaKakkaraa: function() {
    $(".mielenhallintakakkara").click(function(){
      let kakkaranKulma = Math.floor(Math.random()*1080);
      $(this).css({
        "transform": "rotate(" + kakkaranKulma +"deg)",
        "-webkit-transform": "rotate(" + kakkaranKulma +"deg)",
        "-moz-transform": "rotate(" + kakkaranKulma +"deg)",
        "transition": "all 0.6s ease-in-out"
      });
    });
  }
}

$(document).ready(function(){
  $(document).keypress(function (e){
    if (e.which === 13) { /* Laitetaan homma toimimaan entterillä */
      APPI.poistaPopup();
      let i = APPI.komennot.indexOf($(".APPI-syote").val());
      if (i > -1) {
        APPI.putsaa();
        funktiot[i]();
      } else {
        APPI.putsaa();
      }
    }
  });
  $(".APPI-nappi").click(function(){
    APPI.poistaPopup();
    let i = APPI.komennot.indexOf($(".APPI-syote").val());
    if (i > -1) {
      APPI.putsaa();
      funktiot[i]();
    } else {
      APPI.putsaa();
    }
  });
});
