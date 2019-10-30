import { IAboutPageModule } from "./about-page";

export const generateAboutPageDummyData = (): IAboutPageModule => ({
  title: "Over deze pagina",
  content: `  
  <p>Er zijn heel veel citygames mogelijk in Amsterdam! U kunt zo de stad Amsterdam op een leuke manier beter leren
kennen. U kunt GPS tochten door de stad doen, moordtochten, puzzeltochten enz. U kunt lopend Amsterdam verkennen
tijdens uw citygame, maar ook per step, tuktuk, waterfiets of solex! Kiest u voor bepaalde wijken zoals de
Wallen, of gaat u liever Zuid.
</p>

<p>Nog niet alles duidelijk? Stel je vraag!</p>`,
  button: { title: "Stel je vraag", url: "/info-page" }
});
