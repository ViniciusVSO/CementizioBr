'use client'

import React, { useEffect, useRef} from "react";
import {motion, useInView, useMotionValueEvent, useScroll, useTransform} from "framer-motion";
import VideoComponent from "./sub-components/videoComponent";

export default function About() {
  return (
    <div className=" bg-primary w-full" id="sobre">
      <motion.div initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        margin: "-500px"
      }} className="wrapper text-white flex-row justify-between px-6 py-28 gap-8 response:flex-col">
        <div className="flex flex-col gap-8 ">
          <h1 className="font-primary text-5xl response:text-3xl">Quem somos?</h1>
          <p className="text-xl font-thin response:text-base text-center">
          A Cementizio é uma empresa especializada em revestimentos cimentícios e atérmicos, oferecendo uma variedade de produtos para piscinas, áreas externas e internas, que possuem excelente durabilidade, alta qualidade, segurança, sofisticação e, claro, uma beleza que os torna visualmente atraentes. Nosso material é resistente ao desgaste, não escorrega e não se degrada facilmente sob a exposição constante à água e ao sol. As bordas de piscinas são oferecidas em estilos e tamanhos diferentes, para combinar com o gosto do cliente, incluindo opções curvas para piscinas que saem do convencional. Para completar a segurança da sua área externa, também possuímos uma grelha de escoamento de água. Também oferecemos outros tipos de revestimentos como: painel ripado, rodapés e pisos, que podem ser utilizados em ambientes internos e externos.
          </p>
        </div>
        <div className="flex justify-center items-center">
          <VideoComponent />
        </div>
      </motion.div>
    </div>
  );
}
