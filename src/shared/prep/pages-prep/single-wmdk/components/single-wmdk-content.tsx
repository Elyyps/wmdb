import * as React from "react";
import { Button } from "@app/prep/modules-prep/core";

export interface ISingleWmdkContentComponentProps {}

const SingleWmdkContent = (props: ISingleWmdkContentComponentProps) => (
  <>
    <p>
      De Julianatoren in Apeldoorn is het gezelligste, veiligste en meest overzichtelijke familiepretpark van Nederland.
      Het pretpark, met méér dan 60 te gekke attracties, biedt een heerlijk dagje uit aan gezinnen met kinderen van 2
      tot circa 12 jaar.
    </p>
    <p>
      Maak een spannende tocht door Jul’s Dino Toer waar je oog in oog komt te staan met levensechte dinosaurussen! Rijd
      met je hippe cabrio door Jul’s Safari en maak een snelle rit met scherpe bochten in Jul’s Rollerskates! Vaar samen
      over de hoge golven in de Moby Dick en spuit elkaar nat in de Piratenbootjes.
    </p>
    <p>
      Aan de allerkleinsten heeft de Julianatoren ook gedacht. Als een echte cowboy op je eigen paard over de
      Paardenbaan en sta versteld van alle zingende en muziek makende kabouters in Kabouterwonderland.
    </p>
    <h5>Kinderfeestje</h5>
    <p>Vier je verjaardag bij de Julianatoren en het wordt gegarandeerd een te gek feestje!</p>
    <p>Vier je verjaardag bij de Julianatoren en het wordt gegarandeerd een te gek feestje!</p>
    Jul’s Kinderfeestje bestaat uit:
    <ul>
      <li>Entree tot de Julianatoren</li>
      <li>Drankje naar keuze en een heerlijke donut</li>
      <li>Een kidsbox bestaande uit: een frietje, een snack, een drankje en een verrassing</li>
      <li>Een terugkom kaart.</li>
    </ul>
    <p>Dit alles voor slechts € 15,95 p.p.</p>
    <h5>Schoolreis en ligging</h5>
    <p>
      Voor het leukste schoolreisje ga je naar de Julianatoren. In de meer dan 60 te gekke attracties beleven de
      kinderen, jong en oud, de dag van hun leven!
    </p>
    <p>
      Aan de rand van Apeldoorn. Het park staat op alle invalswegen aangegeven. Via openbaar vervoer vanaf NS-station
      Apeldoorn lijn 102 of 104. De bus stopt voor de ingang van het pretpark.
    </p>
    <p>
      Er zijn twee ruime parkeerterreinen waar je je auto kunt parkeren. Wanneer parkeerterrein 1 (naast het pretpark)
      vol is, word je door onze medewerkers. en bewegwijzering doorverwezen naar parkeerterrein 2 aan de J.C. Wilslaan.
    </p>
    <Button title={"Prijsindicatie aanvragen"} variant={"primary"} />
  </>
);

export { SingleWmdkContent };
