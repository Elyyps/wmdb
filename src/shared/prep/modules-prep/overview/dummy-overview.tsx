const SelectOptions = {
  name: "select",
  placeholder: "Alle leeftijden",
  options: [{ value: "item", label: "Item" }, { value: "item2", label: "Item 2" }, { value: "item3", label: "Item 3" }]
};

const CheckBoxes = [
  {
    label: "Musea",
    name: "musea1",
    isChecked: false
  },
  {
    label: "Speeltuin",
    name: "speeltuin",
    isChecked: false
  },
  {
    label: "Voorstellingen",
    name: "voorstellingen",
    isChecked: false
  },
  {
    label: "Pretpark",
    name: "pretpark",
    isChecked: false
  },
  {
    label: "Eten",
    name: "eten",
    isChecked: false
  },
  {
    label: "Schoolreisjes",
    name: "schoolreisjes",
    isChecked: false
  },
  {
    label: "Overnachten",
    name: "overnachten",
    isChecked: false
  }
];
const RadioButtons = [
  {
    label: "Binnen en Apeldoorn",
    name: "radio"
  },
  {
    label: "Alleen binnen",
    name: "radio"
  },
  {
    label: "Alleen buiten",
    name: "radio"
  }
];
const CheckBoxesSpecial = [
  {
    label: "Alle activiteiten met korting",
    name: "alle_activiteiten_met_korting",
    isChecked: false
  },
  {
    label: "Geschikt voor gehandicapten",
    name: "geschikt_voor_gehandicapten",
    isChecked: false
  }
];

export { CheckBoxes, RadioButtons, SelectOptions, CheckBoxesSpecial };
