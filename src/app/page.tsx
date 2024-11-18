import Image from "next/image";
import Header from "./components/header";
import WhatsAppButton from "@/components/whatsapp";
import EmblaCarousel from "./components/embla-components/EmblaCarrousel";
import About from "./components/about";
import Product from "./components/product";
import Benefits from "./components/benefits";
import FormSection from "./components/formsection";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main>
      <Header/>
      <EmblaCarousel />
      <About />
      <Product /> 
      <Benefits />
      <FormSection />
      <Footer />
      <WhatsAppButton/>
    </main>
  );
}
