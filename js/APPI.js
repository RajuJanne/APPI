"use strict";
let funktiot = [ // lykkäsin kaikki syötteitä vastaavat funktiot tarjottimelle niin on mukava servata.
  function() { // listataa kaikki
    APPI.luoPopup("list");
    for (var i = 0; i < APPI.komennot.length; i++) {
      // $('.popup').append(APPI.komennot[i] + "<br/>");
      APPI.taytaPopup(APPI.komennot[i] + "<br />");
    }
    APPI.luoNappi("oikAla", "palaa", "APPI.poistaPopup()");
  },function() { // google
    APPI.luoPopup("google");
    APPI.taytaPopup("<p>Siirrytäänkö Googleen?</p>");
    APPI.luoNappi("gKyllä", "Kyllä", "window.location=`https://google.com`");
    APPI.luoNappi("gEi", "Palaa", "APPI.poistaPopup()");
  },function() { // janne
    APPI.luoPopup("janne");
    APPI.luoNappi("oikAla", "palaa", "APPI.poistaPopup()");
  },function() { // responsiivinen
    APPI.luoPopup("respo");
    APPI.taytaPopup("<p>Tää oli oikeesti ihan saatanan hauska kurssi, en ollu koskaan ennen koskenu mihinkään css:ää korkeempiin voimiin selaimissa. Kaikki tää kamaluus on siis tään kurssin innoittamana opittua >:3</p>");
    APPI.taytaPopup('<iframe src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2FStaartOy%2Fvideos%2F10154505275659376%2F&show_text=0&width=476" width="476" height="476" style="border:none;overflow:hidden" scrolling="no" frameborder="0" allowTransparency="true" allowFullScreen="true"></iframe><br />');
    APPI.taytaPopup("<p>PS. Toivottavasti maistuu tämä responsiivisuus.</p>")
    APPI.luoNappi("oikAla", "palaa", "APPI.poistaPopup()");
  },function() { console.log("Not implemented lol!");// mielenhallintakakkara
  },function() { console.log("Not implemented lol!");// hans
  },function() { // akku
    APPI.luoPopup("akku");
    if (!APPI.toimiikoAkku() === false) {
      APPI.taytaPopup("<p>Akun taso on: " + APPI.toimiikoAkku() * 100 +"%</p>");
    } else {
      APPI.taytaPopup("<p>Valitettavasti toiminto ei tue  selaintasi.</p>");
    }
  },function() { console.log("Not implemented lol!");// miinaharava
  },function() { console.log("Not implemented lol!");// gentoo
  },function() { // kärpät
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
}
// tätä en osannut käsitellä APPIn sisällä :(
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
