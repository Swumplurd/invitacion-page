import { IconBrandWhatsapp } from "@tabler/icons-react";
import Link from "next/link";

export const Asistencia = () => {
  return (
    <>
      <h2 className="text-center text-white text-5xl font-great my-6">
        Confirmar Asistencia
      </h2>
      <div className="container mx-auto flex justify-center">
        <div className="inline-flex flex-col gap-4">
          <Link
            className="bg-brown-light hover:bg-brown-light/80 py-2 px-3 rounded inline-flex gap-2 text-black"
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=5539206656&text=Confirmo asistencia para el Baby Shower de Ana Fernanda"
          >
            <IconBrandWhatsapp />
            Confirmar asistencia con mi mamita
          </Link>
          <Link
            className="bg-brown-light hover:bg-brown-light/80 py-2 px-3 rounded inline-flex gap-2 text-black"
            target="_blank"
            href="https://api.whatsapp.com/send/?phone=5554760731&text=Confirmo asistencia para el Baby Shower de Ana Fernanda"
          >
            <IconBrandWhatsapp />
            Confirmar asistencia con mi papito
          </Link>
        </div>
      </div>
    </>
  );
};
