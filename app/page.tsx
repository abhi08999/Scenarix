import dynamic from "next/dynamic";
import Hero from "./components/Hero";
import Features from "./components/Features";
import GallerySkeleton from "./components/GallerySkeleton";
// import Gallery from "./components/Gallery";
const Gallery = dynamic(() => import("./components/Gallery"), {
  loading: () => <GallerySkeleton />,
});
const FontShowcase = dynamic(() => import("./components/FontShowcase"), {
  ssr:false,
});

// import FontShowcase from "./components/FontShowcase";

const features = [
  {
    title: "AI-Powered Generation",
    description:
      "Create unique illustrations and logos in seconds using advanced AI technology",
  },
  {
    title: "Professional Quality",
    description:
      "Get high-resolution, print-ready artwork suitable for any project",
  },
  {
    title: "Easy to Use",
    description:
      "Simple text prompts transform into beautiful artwork with just a few clicks",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <Features features={features} />
      <FontShowcase />
      <Gallery />
    </div>
  );
}
