"use client";

import React from "react";
import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
  motion
} from "framer-motion";
import Link from "next/link";

const products = [
  {
    name: "Aquila Reale",
    description:
      "Uma escolha excelente para piscinas grandes que possuem apenas áreas quadradas e retangulares é a nossa peça de 50x50cm denominada AquilaReale. Ela ajuda a definir o espaço de forma clara e acentuada, as linhas retas e ângulos precisos podem criar uma estética moderna e sofisticada que complementa bem a arquitetura contemporânea e minimalista.",
    picture: "/aquila-reale.png",
  },
  {
    name: "Piuma d’Oro",
    description:
      "Ter uma área externa pequena em casa se tornou comum nos dias atuais, especialmente se você mora em uma cidade grande onde as casas e apartamentos estão cada vez mais compactos. Porém, se engana quem acredita que isso é um motivo para impedir as pessoas de terem um espaço de lazer com piscina.",
    picture: "/piuma-d-oro.png",
  },
  {
    name: "Ali del Vento",
    description:
      "Uma ótima opção para todos os tipos de piscinas, incluindo as de fibra, muito usadas em sítios e chácaras. Isso porque ela possui além da peça reta, peças com diferentes curvaturas para poder atender às necessidades específicas de cada projeto, se tornando um elemento decorativo importante no ambiente.",
    picture: "/ali-del-vento.png",
  },
  {
    name: "Volare",
    description:
      "Enquanto as demais bordas presentes em nosso catálogo são produzidas no estilo conhecido como peito de pombo, a Volare é uma borda plana com ponta boleada, o que permite que ela ofereça uma transição suave e elegante entre a água e o ambiente ao redor da piscina, mantendo a segurança de quem utiliza.",
    picture: "/volare.png",
  },
  {
    name: "Ottanta",
    description:
      "Uma das principais vantagens do piso Ottanta é a sua característica atérmica, o que significa que ele não absorve calor, mesmo em dias quentes de verão. Isso é possível graças à sua composição, que combina cimento, agregados minerais e pigmentos de alta qualidade. Dessa forma, o piso se mantém sempre fresco e confortável, garantindo um ambiente agradável para aproveitar com a família e os amigos.",
    picture: "/ottanta.png",
  },
];

export default function Product() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [autoplayInterval, setAutoplayInterval] =
    useState<NodeJS.Timeout | null>(null);

  const handleSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 15000);
    setAutoplayInterval(autoplay);

    return () => clearInterval(autoplay);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on("select", handleSelect);
    handleSelect();
  }, [emblaApi, handleSelect]);

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className=" w-full"
      id="produtos"
    >
      <div className="text-black dark:text-white wrapper flex-col justify-between px-6 gap-12 py-28 response:gap-8  tablet:py-16">
        <div className="flex flex-col">
          <h2 className="text-primary dark:text-white text-5xl font-primary response:text-3xl response:text-center">
            Nossa linha de produtos
          </h2>
          <span className="text-xl font-light response:text-lg response:text-center">
            Alguns de nossos produtos e qualificações
          </span>
        </div>

        <div className="flex w-full h-full justify-between gap-6 response:flex-col">
          <div className="flex flex-col gap-8 min-w-[340px] response:min-w-full min-h-auto">
            <div className="flex justify-between flex-col gap-2">
              <div className="">
                <h2 className="text-4xl font-medium response:text-xl">
                  {products[selectedIndex].name}
                </h2>
                <span className="response:text-sm">
                  Liso / Rústico / Esplendore / Cementício / Atérmico 
                </span>
              </div>
              <div className="flex gap-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === selectedIndex ? "bg-primary dark:bg-white" : "bg-gray-300 dark:bg-stone-800"
                    }`}
                    onClick={() => emblaApi?.scrollTo(index)}
                    aria-label={`Slide ${index + 1}`}
                  ></button>
                ))}
              </div>
            </div>
            <p className="text-xl response:text-base response:text-center">
              {products[selectedIndex].description}
            </p>
            <div className="w-full flex items-center response:justify-center">
              <Link href="#catalogo">
                <button className="bg-primary text-white dark:bg-white dark:text-primary font-primary font-semibold px-8 py-4 response:px-4 response:py-2 response:text-sm">
                  Ver catálogo completo
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-8">
            <div className="relative overflow-hidden w-full" ref={emblaRef}>
              <div className="flex transition-transform ease-out duration-300 gap-8">
                {products.map((product, index) => (
                  <div
                    key={index}
                    className="min-w-full flex items-center justify-center "
                  >
                    <img
                      src={product.picture}
                      alt={`Imagem ${product.picture}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
