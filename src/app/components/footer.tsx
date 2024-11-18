"use client";

import Image from "next/image";
import CementizioLogoDark from "../assets/images/cementizio-logo.png";
import CementizioLogoLight from "../assets/images/cementizio-logo-alternativa.png";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { Mail } from "lucide-react";
import SocialMediaLink from "./sub-components/socialMediaLinks";

const socialLinks = [
  {
    socialName: "@cementizio",
    Icon: IconBrandInstagram,
    link: "https://www.instagram.com/cementizio/",
  },
  {
    socialName: "Cementizio",
    Icon: IconBrandLinkedin,
    link: "https://www.linkedin.com/company/cementizio",
  },
  {
    socialName: "comercial@cementizio.com.br",
    Icon: Mail,
  },
  {
    socialName: "(11) 98767-7725",
    Icon: IconBrandWhatsapp,
  },
];

export default function Footer() {
  

  return (
    <div className="w-full shadow-top-sh " id="contato">
      <div className="wrapper  px-6 pb-6 pt-20 gap-8 flex flex-col dark:text-white text-primary">
        <div className="w-full flex justify-between  tablet:flex-col gap-8">
          <div className="flex flex-col gap-10">
            <Image
              className=" block dark:hidden"
              src={CementizioLogoLight}
              width={180}
              height={60}
              alt="Cementizio Logo"
            />
            <Image
              className=" hidden dark:block"
              src={CementizioLogoDark}
              width={180}
              height={60}
              alt="Cementizio Logo"
            />
            <div className="flex flex-col gap-4">
              <span className="text-xl font-medium font-primary">Contatos</span>
              <div className="flex flex-col gap-2">
                {socialLinks.map((link, index) => (
                  <SocialMediaLink
                    key={index}
                    socialMedia={link.socialName}
                    Icon={link.Icon}
                    link={link.link}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="w-[400px] h-[400px] tablet:h-[400px] tablet:w-full">
            <iframe
              className="w-full h-full"
              src="https://www.google.com/maps/embed/v1/place?q=R.+Antônio+Oliveira+Costa,+48+-+Granja+Viana,+Cotia+-+SP,+06709-302,+Brasil&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
            ></iframe>
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          © 2024 - Cementizio
        </div>
      </div>
    </div>
  );
}
