import Image from "next/image";
import Header from "./components/header";
import WhatsAppButton from "@/components/whatsapp";
import EmblaCarousel from "./components/embla-components/EmblaCarrousel";
import About from "./components/about";
import Product from "./components/product";

export default function Home() {
  return (
    <main>
      <Header/>
      <EmblaCarousel />
      <About />
      <Product /> 
      <WhatsAppButton/>
    </main>
  );
}
