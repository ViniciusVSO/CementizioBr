"use client";

import Image from "next/image";

export default function WhatsAppButton() {
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/5511987677725",
      "_blank"
    );
  };

  return (
    <div
      className="whatsapp-link fixed bottom-6 right-6 flex items-center justify-center w-16 h-16 bg-green-500 rounded-full shadow-lg cursor-pointer"
      onClick={openWhatsApp}
    >
      <Image
        src={"/whatsapp.svg"}
        width={30}
        height={30}
        alt="Converse conosco no whatsapp"
      />
    </div>
  );
}