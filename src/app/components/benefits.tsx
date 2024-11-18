"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  BrickWall,
  Brush,
  Leaf,
  ShieldHalf,
  Thermometer,
  Users,
} from "lucide-react";
import { useState } from "react";
import {motion} from "framer-motion";

let benefits = [
  {
    name: "Materiais de Alta Qualidade",
    description:
      "Na Cementizio, priorizamos a qualidade em cada etapa do nosso processo de fabricação. Nossos revestimentos são feitos com materiais de excelência, que garantem máxima resistência ao desgaste e durabilidade, mesmo nas condições mais adversas. Você pode confiar que seus ambientes estarão protegidos por materiais que resistem ao tempo, oferecendo uma estética impecável e funcionalidade de longo prazo.",
    icon: <BrickWall size={24} />,
  },
  {
    name: "Soluções Antiderrapantes e Seguras",
    description:
      "A segurança dos nossos clientes é uma das nossas maiores prioridades. Todos os nossos revestimentos são desenvolvidos com superfícies antiderrapantes, garantindo maior estabilidade e evitando acidentes, especialmente em áreas como bordas de piscinas e caminhos externos que estão expostos à umidade constante. Isso proporciona confiança e tranquilidade, sabendo que você está protegendo sua família e amigos.",
    icon: <ShieldHalf size={24} />,
  },
  {
    name: "Revestimento Atérmico para Conforto",
    description:
      "Os revestimentos atérmicos da Cementizio foram projetados para oferecer o máximo de conforto térmico aos nossos clientes. Nossos produtos têm a capacidade de reduzir a absorção de calor em ambientes externos, proporcionando um espaço mais fresco durante os dias quentes de verão, e retendo calor nos meses mais frios, mantendo a temperatura agradável. Isso significa que você desfrutará de um ambiente confortável o ano todo, além de proteger os revestimentos da degradação provocada pela variação de temperatura.",
    icon: <Thermometer size={24} />,
  },
  {
    name: "Design Sofisticado e Personalizável",
    description:
      "Na Cementizio, acreditamos que cada projeto deve refletir a personalidade e os gostos de quem o idealiza. Nossos revestimentos oferecem uma ampla gama de estilos e acabamentos, permitindo que você crie ambientes únicos e personalizados. Se você deseja um design clássico ou moderno, temos soluções que se adaptam perfeitamente às suas necessidades. Além disso, oferecemos bordas curvas para piscinas, ideais para quem busca um estilo mais contemporâneo e diferenciado.",
    icon: <Brush size={24} />,
  },
  {
    name: "Compromisso com a Sustentabilidade",
    description:
      "Nossa preocupação com o meio ambiente se reflete em cada etapa do nosso processo de produção. A Cementizio adota práticas sustentáveis para minimizar o impacto ambiental, utilizando materiais ecológicos e técnicas que reduzem o desperdício. Ao escolher nossos produtos, você não apenas transforma seu espaço, mas também contribui para um futuro mais verde e sustentável.",
    icon: <Leaf size={24} />,
  },
  {
    name: "Atendimento Especializado",
    description:
      "Na Cementizio, oferecemos mais do que produtos de qualidade – oferecemos uma experiência completa. Nossa equipe de atendimento está sempre disponível para fornecer suporte em todas as fases do seu projeto, desde a escolha do revestimento mais adequado até a instalação e o acompanhamento pós-venda. Estamos comprometidos em proporcionar um serviço excepcional e garantir que você tenha a melhor experiência possível ao transformar seus espaços com nossos produtos.",
    icon: <Users size={24} />,
  },
];

export default function Benefits() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleBenefitClick = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div  className="w-full">
      <motion.div initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
       className="wrapper dark:text-white text-primary px-6 py-28 gap-12 flex flex-col  tablet:py-16">
        <div className="flex flex-col items-center">
          <h2 className="text-center text-5xl font-primary response:text-3xl">
            Porque escolher a cementizio?
          </h2>
          <span className="text-xl text-center font-light response:text-lg">
            Algumas das vantagens e benefícios de nossos serviços
          </span>
        </div>
        <div className="w-full flex items-center justify-between gap-10">
          <Accordion type="single" collapsible className="w-full">
            {benefits.map((benefit, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger>
                  <div className="">{benefit.icon}</div>
                  <span className="font-primary font-medium text-start response:text-base">{benefit.name}</span>
                </AccordionTrigger>
                <AccordionContent>
                  <p className="text-xl font-normal p-2 response:text-base">{benefit.description}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </motion.div>
    </div>
  );
}
