"use client"

import Form from "./sub-components/form";
import {motion} from "framer-motion";

export default function FormSection() {
  return (
    <motion.div initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      viewport={{
        margin: "-500px"
      }} className="wrapper text-white px-6 py-28 gap-8 flex flex-col" id="catalogo">
      <div className="w-full response:flex flex-col justify-center items-center">
        <h2 className="text-primary  text-5xl font-primary response:text-3xl response:text-center ">
          Receba nosso catálogo
        </h2>
        <span className="text-xl font-light text-primary response:text-lg response:text-center">
          Preencha os dados do formulário e receba o catálogo completo
        </span>
      </div>
      <Form />
    </motion.div>
  );
}
