'use client'

import {motion} from "framer-motion";
import VideoComponent from "./sub-components/videoComponent";

export default function About() {

  

  return (
    <div className="w-full" id="sobre">
      <motion.div initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      className="wrapper text-primary dark:text-white flex-row justify-between px-6 py-28 gap-8 response:flex-col-reverse tablet:py-16">
        <div className="flex justify-center items-center">
          <VideoComponent />
        </div>
        <div className="flex flex-col gap-8 ">
          <h1 className="font-primary text-5xl response:text-3xl">Quem somos?</h1>
          <p className="text-xl font-normal response:text-base ">
          A Cementizio é uma empresa especializada em revestimentos cimentícios e atérmicos, oferecendo uma variedade de produtos para piscinas, áreas externas e internas, que possuem excelente durabilidade, alta qualidade, segurança, sofisticação e, claro, uma beleza que os torna visualmente atraentes. Nosso material é resistente ao desgaste, não escorrega e não se degrada facilmente sob a exposição constante à água e ao sol. As bordas de piscinas são oferecidas em estilos e tamanhos diferentes, para combinar com o gosto do cliente, incluindo opções curvas para piscinas que saem do convencional. Para completar a segurança da sua área externa, também possuímos uma grelha de escoamento de água. Também oferecemos outros tipos de revestimentos como: painel ripado, rodapés e pisos, que podem ser utilizados em ambientes internos e externos.
          </p>
        </div>
        
      </motion.div>
    </div>
  );
}
