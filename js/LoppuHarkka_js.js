$(document).ready(function(){
  var APPI = {
    f0: function() {
      // listataan kaikki kivasti johonki.
      console.log(komennot[0]);
    },
    f1: function() {
      // google popuppi

    },
    f2: function() {
      // oma nimesi

    },
    f3: function() {
      // responsiivinen

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
    }
  }
  var komennot = ['listaa kaikki', 'google', 'oma nimesi', 'responsiivisuus', 'mielenhallintakakkara', 'hans', 'akku', 'miinaharava', 'gentoo', 'kärpät'];
  console.log("Valmis.");
  //APPI.f0();
  eval(`APPI.f${komennot.indexOf('listaa kaikki')}()`)
  // APPI.f{i}();
  // $(".APPI-inner").html(appi);
});

// APPI.google;
