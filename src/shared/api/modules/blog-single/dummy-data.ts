import { IBlogSingle } from "./blog-single";
import IMG from "@assets/img-blog.jpg";

export const generateBlogSingleDummyData = (): IBlogSingle => ({
  headerImage: IMG,
  title: "Vakantiepret: spelletjes voor onderweg!",
  path: [
    { title: "Home", url: "/" },
    { title: "Blogs", url: "/blog-overview" },
    { title: "Vakantiepret: spelletjes voor onderweg!", url: "" }
  ],
  content: `
  <p>Het is altijd leuk om op vakantie te gaan, maar je moet wel eerst nog maar op de vakantiebestemming aankomen. Misschien moet je uren in de auto zitten of een tijdje doorbrengen op een vliegveld. Zeker wanneer je met kinderen reist kan dat nog wel een hele opgave zijn, maar gelukkig kan je er ook een leuke tijd van maken. Vakantiepret begint namelijk al onderweg, want er zijn tal van leuke spelletjes die je dan kan gaan spelen. Onderstaande spellen zijn allemaal geschikt voor op reis en kunnen eenvoudig worden meegenomen in een rugzak, voor sommige spelletjes heb je zelfs helemaal niks nodig behalve een goed humeur.</p>
  <h5> <b>Tablet en smartphone</b> </h5>
  <p>Kinderen gaan mee met hun tijd en de meeste weten precies hoe een tablet of een smartphone werkt, soms beter dan de ouders. Je kan de tablet of smartphone dan ook meenemen op reis. Zorg ervoor dat er vooraf al leuke filmpjes op worden gezet of nieuwe spelletjes zijn gedownload. Vergeet trouwens ook niet om een koptelefoon mee te nemen, zodat niemand anders last heeft van de geluiden. Enkele leuke spelletjes zijn: Candy Crush en Angry Birds. </p>
  <h5> <b>Spelletjes voor in de auto</b> </h5>
  <p>Kinderen kunnen nog wel eens een zware tijd hebben in de auto, want ze moeten uren blijven zitten. Gelukkig zijn er allerlei leuke spelletjes die in de auto gespeeld kunnen worden.</p>
  <h5> <b>Kentekenplaten raden</b> </h5>

  <p>Het enige wat je nodig hebt voor een spelletje ‘kentekenplaten raden’ is een pen, papier en een goede concentratie. Jij en kinderen gaan namelijk tijdens de reis bekijken of je een buitenlands kenteken tegenkomt. En dan is aan het deelnemers om te raden uit welk land de auto komt of misschien zelfs wel welke stad. En de kentekens van diplomaten, die leveren extra veel punten op. Welke speler kan de meeste punten scoren en wint het spel? Trouwens, kom je een koninklijke stoet tegen dan is degene die dat het eerste zegt meteen de grote winnaar van het spel.</p>
  <h5> <b>Ik zie, ik zie wat jij niet ziet</b> </h5>
  <p>Dit is hoogstwaarschijnlijk wel het bekendste autospelletje ter wereld. Iedereen in de auto kan plezier beleven aan dit spel. Het is ook een ideale manier om de kinderen van de tablet of smartphone te krijgen en meer van de omgeving te laten genieten. Een van de spelers zegt ‘ik zie, ik zie wat jij niet ziet en de kleur is’. En dan mag de rest proberen te raden wat het is. Maar let op, je mag niet iets kiezen waar je allang langs bent gereden, want dat is natuurlijk niet zo eerlijk.</p>
  <h5> <b>Woordenslang</b> </h5>

  <p>Een woordenslang maken is niet alleen heel leuk, maar ook nog eens heel leerzaam. Het is een simpel spel. Allereerst zal er een onderwerp uitgekozen worden, bijvoorbeeld dieren of eten. Kies je voor eten dan mag de eerste deelnemer iets opnoemen, bijvoorbeeld ‘pizza’. De twee deelnemer moet dan een woord bedenken dat begint met de laatste letter van het vorige woord, bijvoorbeeld ‘aardappels’. En de eerstvolgende moet dan iets van eten verzinnen dat begint met de letter s. Hoelang kunnen jullie het volhouden? </p>
  <h5> <b>Wie ben ik?</b> </h5>
  <p>Een van de spelers in de auto kiest een bekend persoon uit of een kennis die iedereen kent. Alle spelers mogen een x-aantal vragen stellen, zodat zij op die manier de persoon kunnen raden. Zorg ervoor dat het niet te moeilijk zal worden, want het moet wel leuk blijven. Handige vragen zijn bijvoorbeeld: is het man of een vrouw, waar is hij of zij bekend van? </p>
  `
});
