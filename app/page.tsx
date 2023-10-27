"use client";

import { useEffect } from "react";
import Image from "next/image";
import Swal from "sweetalert2";

import "./page.css";
import { Asistencia, Countdown, Divider, DividerBottom, Fotos, Ubicacion } from "./components/pages/home";

const styles = {
  backgroundImage: "url(/img/fondo-invitacion2.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100vh",
};

export default function Invitacion() {
  useEffect(() => {
    const audio = document.getElementsByTagName("audio");
    Swal.fire({
      title: "Bienvenidos",
      text: "a la invitacion del Baby Shower de Ana Fernanda",
      confirmButtonColor: "#8D7B68",
      background: "#e7d1ba",
      confirmButtonText: "Ingresar",
      allowEnterKey: false,
    }).then(() => {
      audio[0].play();
    });
  }, []);

  return (
    <>
      <main className="mb-3">
        <audio src="howl.mp3" autoPlay loop></audio>
        <div style={styles}>
          <Divider fill={"shape-fill-2"} />
          <div className="flex flex-col h-full justify-between py-12 w-full">
            <h1 className="text-6xl drop-shadow-2xl md:text-7xl text-center font-extrabold mx-auto font-great">
              Baby Shower de Ana Fernanda
            </h1>

            <Countdown />
          </div>
        </div>
        <DividerBottom />
        <Divider fill={"shape-fill"} />
        <div className="container mx-auto px-3 custom-width">
          <Image
            className="rounded-2xl my-3"
            src={"/img/frase.png"}
            alt="Ubicacion"
            width={1920}
            height={100}
          />
          <Ubicacion />
          <Fotos/>
          <Asistencia/>
        </div>
      </main>
    </>
  );
}
