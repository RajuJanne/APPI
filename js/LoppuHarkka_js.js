$(document).ready(function(){
  $('.APPI-nappi').click(function (){
    APPI.poistaPopup();
    /* Tästä eteenpäin kannattaa pitää silmät kiinni jos on alaikäinen.
       Keksein tämän ratkaisun itse ilman googlettelua. */
    let likainenTemppu = APPI.komennot.indexOf($('.APPI-syote').val());
    $('.APPI-syote').val("");
    if (likainenTemppu > -1) { /* indexOf() palauttaa arvon -1 jos ei löydy */
      eval(`APPI.f${likainenTemppu}()`);
    }
  });
  $(document).keypress(function (e){
    if (e.which === 13) {
      APPI.poistaPopup();
      let likainenTemppu = APPI.komennot.indexOf($('.APPI-syote').val());
      $('.APPI-syote').val("");
      if (likainenTemppu > -1) {
        eval(`APPI.f${likainenTemppu}()`);
      }
    }
  });
});

// kaikki f + numero muotoa olevat funktiot ovat mahdollisia komentoja.
var APPI = {
  f0: function() {
    // listataa kaikki
    APPI.luoPopup("list");
    for (var i = 0; i < APPI.komennot.length; i++) {
      // $('.popup').append(APPI.komennot[i] + "<br/>");
      APPI.taytaPopup(APPI.komennot[i] + "<br />");
    }
    APPI.luoNappi("oikAla", "palaa", "APPI.poistaPopup()");
  },
  f1: function() {
    // google
    APPI.luoPopup("google");
    APPI.taytaPopup("<p>Siirrytäänkö Googleen?</p>");
    APPI.luoNappi("gKyllä", "Kyllä", "window.location = 'https://google.com'");
    APPI.luoNappi("gEi", "Ei","APPI.poistaPopup()")
  },
  f2: function() {
    // janne
    APPI.luoPopup("janne");
    APPI.luoNappi("oikAla", "palaa", "APPI.poistaPopup()")
  },
  f3: function() {
    // responsiivinen
    APPI.luoPopup("respo");
    APPI.taytaPopup("<p>Tää oli oikeesti ihan saatanan hauska kurssi, en ollu koskaan ennen koskenu mihinkään css:ää korkeempiin voimiin selaimissa. Kaikki tää kamaluus on siis tään kurssin innoittamana opittua >:3</p>");
  },
  f4: function() {
    // mielenhallintakakkara
  },
  f5: function() {
    // hans
  },
  f6: function() {
    // akku
  },
  f7: function() {
    // miinaharava
  },
  f8: function() {
    // gentoo
  },
  f9: function() {
    // kärpät
    window.close();
  },
  f10: function () {
    // peter
    APPI.luoPopup("ounou");
    APPI.taytaPopup("<p>EI OLLU HYVÄ IDEA</p><p>PS. Eevertti teki kuvam käsintelyt.</p>");
  },
  luoPopup: function(v) {
    let popUp = `<div class="popup ${v}"></div>`;
    $('.APPI-inner').append(popUp);
  },
  poistaPopup: function() {
    $('.popup').remove();
  },
  taytaPopup: function(a) {
    $('.popup').append(a);
  },
  luoNappi: function(a, b, c) {
    $('.popup').append(`<input type="button" class="${a}" value="${b}" onclick="${c}" />`);
  },
  komennot: ['listaa kaikki', 'google', 'janne', 'responsiivinen', 'mielenhallintakakkara', 'hans', 'akku', 'miinaharava', 'gentoo', 'kärpät', 'peter']
}
