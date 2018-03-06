"use strict";
let funktiot = [
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
    APPI.luoNappi("gKyllä", "Kyllä", "window.location = 'https://google.com'");
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
  },function() { // mielenhallintakakkara
  },function() { // hans
  },function() { // akku
    APPI.luoPopup("akku");
    APPI.taytaPopup(`<p>Akun taso on: ${100 * parseFloat($("#piilo").text())}%`);
  },function() { // miinaharava
  },function() { // gentoo
  },function() { // kärpät
    window.close();
  },function () { // peter
    APPI.luoPopup("ounou");
    APPI.taytaPopup("<p>EI OLLU HYVÄ IDEA</p><p>PS. Eevertti teki kuvam käsintelyt.</p>");
    APPI.luoNappi("😂", "😂", "APPI.poistaPopup()"); // 😂
  }
]
$(document).ready(function(){
  $(document).keypress(function (e){
    if (e.which === 13) { /* Laitetaan homma toimimaan entterillä */
      APPI.poistaPopup();
      let i = APPI.komennot.indexOf($('.APPI-syote').val());
      if (i > -1) {
        funktiot[i]();
        $('.APPI-syote').val("");
      }
    }
  });
  $('.APPI-nappi').click(function(){
    APPI.poistaPopup();
    let i = APPI.komennot.indexOf($('.APPI-syote').val());
    if (i > -1) {
      funktiot[i]();
      $('.APPI-syote').val("");
    }
  });
});
let APPI = {
  luoPopup: function(v) {
    let popUp = `<div class="popup ${v}"></div>`;
    $('.APPI-inner').append(popUp);
  },
  onkoAkkuAuki: function() {
    if ($('.AkkuTesti')[0]) {
      return true;
    } else {
      return false;
    }
  },
  poistaPopup: function() {
    $('.popup').remove();
    $('.APPI-syote').focus(); /* Heitetään tähtäin takaisin hattuun */
  },
  taytaPopup: function(a) {
    $('.popup').append(a);
  },
  luoNappi: function(a, b, c) {
    $('.popup').append(`<input type="button" class="${a}" value="${b}" onclick="${c}" />`);
  },
  komennot: ['listaa kaikki', 'google', 'janne', 'responsiivinen', 'mielenhallintakakkara', 'hans', 'akku', 'miinaharava', 'gentoo', 'kärpät', 'peter']
}
function paivitaAkku(akku) {
  $("#piilo").append(akku.level);
}
navigator.getBattery().then(function(akku) {
  paivitaAkku(akku);
  akku.onlevelchange = function () {
    paivitaAkku(akku);
  };
});
