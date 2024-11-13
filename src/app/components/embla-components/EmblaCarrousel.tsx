"use client";

import { useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import EmblaSlide from "./EmblaSlide";
import Autoplay from "embla-carousel-autoplay";

export default function EmblaCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  const autoScroll = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

 

  return (
    <div className="embla" ref={emblaRef}>
      <div className="emblaContainer  w-full h-full ">
        <EmblaSlide titulo="Volaire" subtitulo="Uma opção versátil para revestimento" url="/Hero.png"/>
        <EmblaSlide titulo="Piuma d’Oro" subtitulo="Ótima escolha para pequenas áreas externas" url="/Hero2.png" />
        <EmblaSlide titulo="Ali Del Vento" subtitulo="Para todos os tipos de piscinas" url="/Hero3.png" />
      </div>
    </div>
  );
}
