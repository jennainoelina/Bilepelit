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
  "...ollut mustasukkainen ilman hyvää syytä.",
  "...lähettänyt sydänemojin liian aikaisin.",
  "...ollut ihastunut opettajaan tai työkaveriin.",
  "...käyttänyt deittisovellusta vain tylsyyteen.",
  "...jutellut useamman kanssa samaan aikaan romanttisessa mielessä.",
  "...unohtanut treffikumppanin nimen.",
  "...tehnyt ensimmäistä siirtoa.",
  "...feikannut itsevarmuutta treffeillä.",
  "...ollut friendzonella tai friendzonannut jonkun.",
  "...palannut exän kanssa yhteen.",
  "...haaveillut romanssista täysin tuntemattoman kanssa.",
  "...antanut väärän numeron välttääkseni tilanteen.",
  "...ollut kolmas pyörä tahattomasti.",
  "...nauranut hermostuksissani treffeillä.",
  "...tehnyt jotain romanttista spontaanisti.",
  "...ollut ihastunut johonkuhun, joka ei tiedä sitä vieläkään.",
  "...lähettänyt flirttailevaa viestiä, jonka tarkoitus oli enemmän kuin viaton.",
  "...fantasioinut jostakusta tässä huoneessa.",
  "...suudellut jotakuta heti ensitapaamisella.",
  "...ollut ihastunut pelkän ulkonäön perusteella.",
  "...käyttänyt alkoholia rohkaistakseni itseäni tekemään siirron.",
  "...tehnyt jotain kiellettyä jännityksen takia.",
  "...ollut tilanteessa, jossa kemia oli täysin käsinkosketeltavaa.",
  "...lähettänyt vihjailevan kuvan tai viestin.",
  "...kokenut walk of shame -hetken.",
  "...ollut ihastunut johonkuhun, joka oli varattu.",
  "...pussannut useampaa kuin yhtä ihmistä saman illan aikana.",
  "...ollut mukana draamassa ihmissuhteiden takia.",
  "...käyttänyt iskurepliikkiä (vakavasti tai vitsillä).",
  "...ollut friends with benefits -tilanteessa.",
  "...ihastunut kaveripiirin sisällä.",
  "...ollut mustasukkainen vaikka ei olisi saanut olla.",
  "...kokenut todella kiusallisen treffihetken.",
  "...tehnyt jotain spontaania romanttisessa mielessä julkisella paikalla.",
  "...ollut tilanteessa, jossa en ollut varma mitä toinen haluaa.",
  "...jäänyt miettimään 'mitä jos' jonkun kanssa.",
  "...ollut mukana kolmiodraamassa.",
  "...käyttänyt deittisovellusta vain säätämiseen.",
  "...ottanut riskin ihmissuhteessa ja katunut sitä myöhemmin.",
  "...ollut tilanteessa, jossa jännite oli niin kova, että sen huomasi kaikki.",
  "...leikitellyt ajatuksella tehdä jotain, mitä en normaalisti tekisi.",
  "...mennyt kotiin jonkun kanssa täysin spontaanisti.",
  "...leikkinyt hard to get vaikka oikeasti olin kiinnostunut.",
  "...testannut rajoja vain nähdäkseni mitä tapahtuu.",
  "...ollut tilanteessa, jossa tiesin tekeväni jotain huonoa ideaa mutta tein silti.",
  "...flirtannut jonkun kanssa, vaikka tiesin ettei siitä tule mitään.",
  "...ollut osa salaperäistä tai 'ei kerrota tästä muille' -tilannetta.",
  "...käyttänyt ulkonäköä tai viehätysvoimaa saadakseni tahtoni läpi."
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
  "...pitää useamman ihmisen kiinnostuneena samaan aikaan.",
  "...antaa periksi pelkälle kemialle.",
  "...tekee jotain impulsiivista ihmissuhteissa.",
  "...flirttailee huvin vuoksi ilman aikomuksia.",
  "...on vaikea vastustaa viettelytilanteessa.",
  "...aloittaa keskustelun tuntemattoman kanssa rohkeasti.",
  "...lähettää vahingossa nolon viestin väärälle henkilölle.",
  "...päätyy elokuvamaiseen tilanteeseen jonkun kanssa.",
  "...ottaa riskin rakkaudessa.",
  "...on se, joka jää miettimään mitä jos.",
  "...on kaikkein mystisin ihmissuhteissaan.",
  "...saa eniten huomiota ilman että yrittää.",
  "...on mustasukkainen vaikka ei myönnä sitä.",
  "...on se, jolle aina tapahtuu kaikkea draamaa.",
  "...lähtee mukaan hulluun ideaan hetken mielijohteesta.",
  "...tekee rohkeimman liikkeen illan aikana."
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
  "On tosi itsevarma ja tietää mitä haluaa.",
  "Muuttaa mielipidettään usein fiiliksen mukaan.",
  "Testaa toista huumorilla.",
  "On vähän mustasukkainen.",
  "Ei ole yhtään mustasukkainen.",
  "Pitää useita vaihtoehtoja auki deittailussa.",
  "Lopettaa muut heti kun kiinnostuu yhdestä.",
  "On vaikeasti tavoitettava.",
  "On aina heti saatavilla.",
  "Antaa ristiriitaisia signaaleja alussa.",
  "On todella intensiivinen heti alussa.",
  "On tosi chill ja go with the flow.",
  "Suunnittelee kaiken etukäteen.",
  "Haluaa pitää suhteen yksityisenä pitkään.",
  "Jakaa paljon somessa heti alussa.",
  "On vähän arvaamaton.",
  "Käy edelleen silloin tällöin yhteydessä exään.",
  "Tarkistaa kumppanin puhelimen varmuuden vuoksi.",
  "Haluaa tietää missä toinen on ja kenen kanssa.",
  "Ei kerro kaikista tekemisistään kumppanille.",
  "Tykkää testata toisen reaktiota tekemällä tahallaan mustasukkaiseksi.",
  "On sitä mieltä, että pieni draama pitää suhteen elävänä.",
  "Pitää varavaihtoehtoja siltä varalta että suhde ei toimi.",
  "Uskoo että pettäminen voi joskus olla ymmärrettävää.",
  "Haluaa täydellisen rehellisyyden, vaikka se satuttaisi.",
  "Jättää asioita kertomatta ettei toinen loukkaannu.",
  "Ajattelee että mustasukkaisuus on merkki rakkaudesta.",
  "Haluaa päättää suurimman osan yhteisistä asioista.",
  "On sitä mieltä että yksityisyys menee kaiken edelle parisuhteessa.",
  "Jakaa salasanoja kumppanin kanssa.",
  "Ei halua määritellä suhdetta ollenkaan.",
  "Haluaa avoimen suhteen.",
  "Ajattelee että seksi on tärkein osa suhdetta.",
  "Ajattelee että tunnepuoli on tärkeämpi kuin fyysinen vetovoima.",
  "On ok valehdella pienistä asioista rauhan säilyttämiseksi.",
  "Haluaa tietää kumppanin menneisyydestä kaiken.",
  "Ei halua kuulla mitään kumppanin existä.",
  "Ajattelee että kiinnostus pitää ansaita jatkuvasti.",
  "On sitä mieltä että jos pitää kysyä, kiinnostus ei ole aitoa.",
  "Uskoo että jos se on tarkoitettu, sen ei pitäisi tuntua vaikealta."
]

};

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
  }
};

let nykyinenPeli = "en_ikinä";

const peliNapit = document.querySelectorAll(".pelivalinta button");
const peliOtsikko = document.getElementById("peliOtsikko");
const peliKuvaus = document.getElementById("peliKuvaus");
const kysymysTeksti = document.getElementById("kysymysTeksti");
const uusiKysymysNappi = document.getElementById("uusiKysymysNappi");

function vaihdaPeli(peli) {
  nykyinenPeli = peli;

  peliNapit.forEach(nappi => {
    nappi.classList.toggle("aktiivinen", nappi.dataset.peli === peli);
  });

  peliOtsikko.textContent = meta[peli].otsikko;
  peliKuvaus.textContent = meta[peli].kuvaus;
  kysymysTeksti.textContent = "Paina \"Uusi kysymys\" jatkaaksesi.";
}

function arvoKysymys() {
  const lista = kysymykset[nykyinenPeli];
  const index = Math.floor(Math.random() * lista.length);
  return lista[index];
}

peliNapit.forEach(nappi => {
  nappi.addEventListener("click", () => vaihdaPeli(nappi.dataset.peli));
});

uusiKysymysNappi.addEventListener("click", () => {
  kysymysTeksti.textContent = arvoKysymys();
});
