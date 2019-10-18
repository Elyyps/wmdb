import { IFAQModule } from "./faq";

export const generateFAQDummyData = (): IFAQModule => ({
  items: [
    {
      title: "Wat is de prijs van het uitje?",
      content: `<p>Dit hangt af van uw wensen.. Zoveel mensen, zoveel wensen!</p>
      <ul>
        <li>  Wilt u bijvoorbeeld een een bbq of een lunch bij de activiteit?</li>
        <li>  Met of zonder drank?</li>
        <li>  Komt u met 10 of met 500 personen? </li>
        <li>  Zijn er speciale wensen?</li>
      </ul>
      <p>
        Daarom is de prijs niet zomaar te noemen zonder uw informatie. Alle aanbieders maken voor u graag een offerte
        op maat. Indien u het aanvraagformulier onder het gekozen uitje invult, met uw wensen en aanvullingen, maken
        wij een offerte op maat voor u. Na het invullen ontvangt u ook direct het telefoonnummer van de organisator,
        zodat u indien gewenst ook direct telefonisch contact kunt opnemen.
      </p>`
    },
    {
      title: "Telefonisch contact",
      content: `<p>Onder het tabblad "contact" vindt u het aanvraagformulier en daarnaast ook een button met telefonisch contact om direct naar de uitvoerders van het uitje te kunnen bellen. </p>`
    },
    {
      title: "Kan WegmetdeBaas mij helpen een bedrijfsuitje samen te stellen?",
      content: `<div> <p>Formuleer uw wensen/ vraag zo helder als mogelijk en vul deze in op het onderstaande formulier.</p>
        <p>Uw vraag zullen wij zo goed als mogelijk inventariseren en eventueel direct uitzetten bij aanbieders waarvan wij denken dat u het beste geholpen wordt. Uw vraag of wens beantwoorden wij zo snel moge</p>
        </div>`
    }
  ],
  title: "Veelgestelde vragen",
  formTitle: "Andere vragen?",
  formContent: "Mail ons het aanvraagformulier of direct via info@wegmetdebaas.nl"
});
