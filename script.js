// Kysymyslistat
const kysymykset = {

  en_ikinä: [
    "...flirtannut saadakseni jotain etua.",
    "...lähettänyt vahingossa nolon viestin väärälle henkilölle.",
    "...ihastunut kaverini exään.",
    "...tehnyt ensivaikutelmaa, joka oli täysin feikki.",
    "...ollut ihastunut kahteen ihmiseen samaan aikaan.",
    "...käynyt sokkotreffeillä.",
    "...ghostannut jotakuta.",
    "...saanut pakkeja ja esittänyt ettei haittaa.",
    "...flirtannut baarimikolle ilmaisen juoman toivossa.",
    "...ollut mustasukkainen ilman hyvää syytä."
  ],

  kuka: [
    "...flirttailee itsensä ulos pulasta.",
    "...ihastuu nopeimmin bileissä.",
    "...lähettää vaarallisen viestin myöhään yöllä.",
    "...tekee ensimmäisen siirron.",
    "...päätyy spontaanisti jatkoille jonkun kanssa.",
    "...jää kiinni säätämisestä.",
    "...on salaa ihastunut johonkuhun tässä huoneessa.",
    "...rakastuu väärään henkilöön.",
    "...ajautuu kolmiodraamaan.",
    "...pitää useamman ihmisen kiinnostuneena samaan aikaan."
  ],

  liput: [
    "Vastaa viesteihin hitaasti mutta aina kunnolla.",
    "On tosi suorasanainen ja suodattamaton.",
    "Flirttailee leikillisesti melkein kaikkien kanssa.",
    "Haluaa edetä nopeasti ihmissuhteessa.",
    "Haluaa edetä todella hitaasti.",
    "On tosi itsenäinen eikä tarvitse paljon yhteydenpitoa.",
    "Haluaa viettää paljon aikaa yhdessä heti alussa.",
    "On mystinen eikä kerro kaikkea itsestään heti.",
    "Kertoo kaiken itsestään hyvin nopeasti.",
    "On tosi itsevarma ja tietää mitä haluaa."
  ],

  tehtävät: [
    "Katso toista silmiin 30 sekuntia puhumatta ja nauramatta. Häviäjä juo.",
    "Kerro ja tarvittaessa selitä inside-vitsi, joka sinulla on kumppanisi kanssa. Jos ei ole, juo 2 hörppyä.",
    "Kerro kumppanille jokin rohkea toive tulevaisuudesta teidän suhteenne kannalta.",
    "Kuvaile kumppaniasi kolmella adjektiivilla. Jokaisen adjektiivin jälkeen hörppy.",
    "Pidä vastakkaista sukupuolta kädestä seuraavan kierroksen ajan. Irrotuksesta molemmille rangaistus 5 hörppyä.",
    "Istu vastakkaisen sukupuolen syliin kierroksen ajaksi.",
    "Anna vieressä istuvalle flirttaileva kehu.",
    "Kuiskaa toisen korvaan jotain vihjailevaa.",
    "Anna seksikkäin ilmeesi 5 sekunnin ajaksi.",
    "Kerro, mikä on oudoin asia, johon olet ihastunut ihmisessä.",
    "Pidä pieni kävelycatwalk huoneen poikki itsevarmasti.",
    "Esitä mustasukkaista kohtausta 15 sekunnin ajan.",
    "Keksi nopea treffiskenaario ja valitse huoneesta pari siihen.",
    "Kerro, mikä on pahin turn off heti ensitreffeillä.",
    "Tee silmänisku henkilölle, jonka tunnet vähiten.",
    "Valitse joku ja tehkää yhdessä dramaattinen romanttinen elokuvakohtaus.",
    "Katso jotakuta päästä varpaisiin mahdollisimman dramaattisesti.",
    "Anna vieruskaverille viettelevä tehtävä.",
    "Näytä viimeisin flirttailuviestisi. Anna tarvittaessa kontekstia.",
    "Suutele kumppaniasi kuin olisitte alttarilla.",
    "Ota rakastavaisten hörppy vastakkaisen sukupuolen kanssa."
  ]

};

// Pelien tiedot
const meta = {

  en_ikinä: {
    otsikko: "Never have I ever",
    kuvaus: "Nostakaa käsi jos olette tehneet tämän."
  },

  kuka: {
    otsikko: "Kuka todennäköisimmin",
    kuvaus: "Valitkaa porukasta se, johon väite sopii parhaiten."
  },

  liput: {
    otsikko: "Green flag vai red flag",
    kuvaus: "Päättäkää yhdessä onko tämä green vai red flag."
  },

  tehtävät: {
    otsikko: "Tehtävät",
    kuvaus: "Suorittakaa rohkeita ja flirttailevia tehtäviä."
  },

  sekoitus: {
    otsikko: "Sekoitus",
    kuvaus: "Satunnaisia kortteja kaikista pelimuodoista."
  }

};


// Nykyinen peli
let nykyinenPeli = "en_ikinä";


// Elementit
const peliNapit = document.querySelectorAll(".pelivalinta button");

const peliOtsikko =
  document.getElementById("peliOtsikko");

const peliKuvaus =
  document.getElementById("peliKuvaus");

const kysymysTeksti =
  document.getElementById("kysymysTeksti");

const uusiKysymysNappi =
  document.getElementById("uusiKysymysNappi");


// Vaihda peliä
function vaihdaPeli(peli) {

  nykyinenPeli = peli;

  peliNapit.forEach(nappi => {

    nappi.classList.toggle(
      "aktiivinen",
      nappi.dataset.peli === peli
    );

  });

  peliOtsikko.textContent =
    meta[peli].otsikko;

  peliKuvaus.textContent =
    meta[peli].kuvaus;

  kysymysTeksti.textContent =
    'Paina "SEURAAVA" saadaksesi kortin.';
}


// Arvo kysymys
function arvoKysymys() {

  // Sekoitus
  if (nykyinenPeli === "sekoitus") {

    const pelit = Object.keys(kysymykset);

    const randomPeli =
      pelit[Math.floor(
        Math.random() * pelit.length
      )];

    const lista =
      kysymykset[randomPeli];

    const index =
      Math.floor(
        Math.random() * lista.length
      );

    // Näytä vain pelin nimi
    peliOtsikko.textContent =
      meta[randomPeli].otsikko;

    peliKuvaus.textContent = "";

    return lista[index];
  }

  // Normaali peli
  peliOtsikko.textContent =
    meta[nykyinenPeli].otsikko;

  peliKuvaus.textContent =
    meta[nykyinenPeli].kuvaus;

  const lista =
    kysymykset[nykyinenPeli];

  const index =
    Math.floor(
      Math.random() * lista.length
    );

  return lista[index];
}


// Pelin vaihto
peliNapit.forEach(nappi => {

  nappi.addEventListener("click", () => {

    vaihdaPeli(
      nappi.dataset.peli
    );

  });

});


// Uusi kysymys
uusiKysymysNappi.addEventListener("click", () => {

  kysymysTeksti.textContent =
    arvoKysymys();

});