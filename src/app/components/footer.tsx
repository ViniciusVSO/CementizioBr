import Image from "next/image";
import CementizioLogo from "../assets/images/cementizio-logo.png";
import {
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandWhatsapp,
} from "@tabler/icons-react";
import { Mail } from "lucide-react";
import SocialMediaLink from "./sub-components/socialMediaLinks";

let socialLinks = [
  {
    socialName: "@cementiziobr",
    Icon: IconBrandInstagram,
    link: "https://www.instagram.com/cementiziobr/",
  },
  {
    socialName: "Cementizio",
    Icon: IconBrandLinkedin,
    link: "https://www.linkedin.com/company/cementizio",
  },
  {
    socialName: "sac@cementizio.com.br",
    Icon: Mail,
  },
  {
    socialName: "(11) 98767-7725",
    Icon: IconBrandWhatsapp,
  },
];

export default function Footer() {
  return (
    <div className="w-full bg-primary " id="contato">
      <div className="wrapper  px-6 pb-6 pt-20 gap-8 flex flex-col text-white">
        <div className="w-full flex justify-between  tablet:flex-col gap-8">
          <div className="flex flex-col gap-10">
            <Image
              src={CementizioLogo}
              width={200}
              height={80}
              alt="Cementizio Logo"
            />
            <div className="flex flex-col gap-4">
              <span className="text-xl font-primary">Contatos</span>
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
