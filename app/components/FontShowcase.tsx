// app/components/FontShowcase.tsx
import {
  Dancing_Script,
  Anton,
  Bebas_Neue,
  Charm,
  Cinzel,
  Comfortaa,
  Courgette,
  Crimson_Text,
  Dosis,
  Great_Vibes,
  Indie_Flower,
  Josefin_Sans,
  Kalam,
  Lato,
  Libre_Baskerville,
  Lobster,
  Montserrat,
  Open_Sans,
  Oswald,
  Pacifico,
  Playfair_Display,
  Poppins,
  Quicksand,
  Raleway,
  Roboto,
  Roboto_Condensed,
  Roboto_Mono,
  Roboto_Slab,
  Rubik,
  Source_Sans_3,
  Source_Serif_4,
  Space_Grotesk,
  Space_Mono,
  Ubuntu,
  Work_Sans,
} from "next/font/google";

// Each font instantiated with appropriate weights
const dancingScript = Dancing_Script({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });
const anton = Anton({ weight: "400", subsets: ["latin"], display: "swap" });
const bebasNeue = Bebas_Neue({ weight: "400", subsets: ["latin"], display: "swap" });
const charm = Charm({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });
const cinzel = Cinzel({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });
const comfortaa = Comfortaa({ weight: ["300", "400", "700"], subsets: ["latin"], display: "swap" });
const courgette = Courgette({ weight: "400", subsets: ["latin"], display: "swap" });
const crimsonText = Crimson_Text({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });
const dosis = Dosis({ weight: ["200", "400", "700"], subsets: ["latin"], display: "swap" });
const greatVibes = Great_Vibes({ weight: "400", subsets: ["latin"], display: "swap" });
const indieFlower = Indie_Flower({ weight: "400", subsets: ["latin"], display: "swap" });
const josefinSans = Josefin_Sans({ weight: ["300", "400", "700"], subsets: ["latin"], display: "swap" });
const kalam = Kalam({ weight: ["300", "400", "700"], subsets: ["latin"], display: "swap" });
const lato = Lato({ weight: ["300", "400", "700"], subsets: ["latin"], display: "swap" });
const libreBaskerville = Libre_Baskerville({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });
const lobster = Lobster({ weight: "400", subsets: ["latin"], display: "swap" });
const montserrat = Montserrat({ weight: ["300", "400", "700"], subsets: ["latin"], display: "swap" });
const openSans = Open_Sans({ weight: ["300", "400", "700"], subsets: ["latin"], display: "swap" });
const oswald = Oswald({ weight: ["200", "400", "700"], subsets: ["latin"], display: "swap" });
const pacifico = Pacifico({ weight: "400", subsets: ["latin"], display: "swap" });
const playfairDisplay = Playfair_Display({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });
const poppins = Poppins({ weight: ["300", "400", "700"], subsets: ["latin"], display: "swap" });
const quicksand = Quicksand({ weight: ["300", "400", "700"], subsets: ["latin"], display: "swap" });
const raleway = Raleway({ weight: ["300", "400", "700"], subsets: ["latin"], display: "swap" });
const roboto = Roboto({ weight: ["300", "400", "700"], subsets: ["latin"], display: "swap" });
const robotoCondensed = Roboto_Condensed({ weight: ["300", "400", "700"], subsets: ["latin"], display: "swap" });
const robotoMono = Roboto_Mono({ weight: ["300", "400", "700"], subsets: ["latin"], display: "swap" });
const robotoSlab = Roboto_Slab({ weight: ["300", "400", "700"], subsets: ["latin"], display: "swap" });
const rubik = Rubik({ weight: ["300", "400", "700"], subsets: ["latin"], display: "swap" });
const sourceSansPro = Source_Sans_3({ weight: ["300", "400", "700"], subsets: ["latin"], display: "swap" });
const sourceSerifPro = Source_Serif_4({ weight: ["300", "400", "700"], subsets: ["latin"], display: "swap" });
const spaceGrotesk = Space_Grotesk({ weight: ["300", "400", "700"], subsets: ["latin"], display: "swap" });
const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"], display: "swap" });
const ubuntu = Ubuntu({ weight: ["300", "400", "700"], subsets: ["latin"], display: "swap" });
const workSans = Work_Sans({ weight: ["300", "400", "700"], subsets: ["latin"], display: "swap" });

const fonts = [
  { name: "Dancing Script", text: "AI Art Generator", className: dancingScript.className },
  { name: "Anton", text: "AI Art Generator", className: anton.className },
  { name: "Bebas Neue", text: "AI Art Generator", className: bebasNeue.className },
  { name: "Charm", text: "AI Art Generator", className: charm.className },
  { name: "Cinzel", text: "AI Art Generator", className: cinzel.className },
  { name: "Comfortaa", text: "AI Art Generator", className: comfortaa.className },
  { name: "Courgette", text: "AI Art Generator", className: courgette.className },
  { name: "Crimson Text", text: "AI Art Generator", className: crimsonText.className },
  { name: "Dosis", text: "AI Art Generator", className: dosis.className },
  { name: "Great Vibes", text: "AI Art Generator", className: greatVibes.className },
  { name: "Indie Flower", text: "AI Art Generator", className: indieFlower.className },
  { name: "Josefin Sans", text: "AI Art Generator", className: josefinSans.className },
  { name: "Kalam", text: "AI Art Generator", className: kalam.className },
  { name: "Lato", text: "AI Art Generator", className: lato.className },
  { name: "Libre Baskerville", text: "AI Art Generator", className: libreBaskerville.className },
  { name: "Lobster", text: "AI Art Generator", className: lobster.className },
  { name: "Montserrat", text: "AI Art Generator", className: montserrat.className },
  { name: "Open Sans", text: "AI Art Generator", className: openSans.className },
  { name: "Oswald", text: "AI Art Generator", className: oswald.className },
  { name: "Pacifico", text: "AI Art Generator", className: pacifico.className },
  { name: "Playfair Display", text: "AI Art Generator", className: playfairDisplay.className },
  { name: "Poppins", text: "AI Art Generator", className: poppins.className },
  { name: "Quicksand", text: "AI Art Generator", className: quicksand.className },
  { name: "Raleway", text: "AI Art Generator", className: raleway.className },
  { name: "Roboto", text: "AI Art Generator", className: roboto.className },
  { name: "Roboto Condensed", text: "AI Art Generator", className: robotoCondensed.className },
  { name: "Roboto Mono", text: "AI Art Generator", className: robotoMono.className },
  { name: "Roboto Slab", text: "AI Art Generator", className: robotoSlab.className },
  { name: "Rubik", text: "AI Art Generator", className: rubik.className },
  { name: "Source Sans Pro", text: "AI Art Generator", className: sourceSansPro.className },
  { name: "Source Serif Pro", text: "AI Art Generator", className: sourceSerifPro.className },
  { name: "Space Grotesk", text: "AI Art Generator", className: spaceGrotesk.className },
  { name: "Space Mono", text: "AI Art Generator", className: spaceMono.className },
  { name: "Ubuntu", text: "AI Art Generator", className: ubuntu.className },
  { name: "Work Sans", text: "AI Art Generator", className: workSans.className },
];

export default function FontShowcase() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-4">
          Our AI Models Can Generate Text in These Fonts
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12">
          Experience the power of AI with our extensive font collection
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {fonts.map((font) => (
            <div
              key={font.name}
              className="bg-white dark:bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <div className={`text-2xl mb-4 ${font.className}`}>
                {font.text}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {font.name}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
