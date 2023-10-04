"use client";

import Image from "next/image";
import { Countdown } from "../components/shared/Countdown";

const styles = {
  backgroundImage: "url(/img/fondo-invitacion.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100vh",
};

export default function Invitacion() {
  const handleToggle = () => {
    const modal = document.getElementById("modal");
    const main = document.getElementsByTagName("main");

    modal?.classList.contains("hidden")
      ? (modal?.classList.remove("hidden"), main[0]?.classList.add("blur"))
      : (modal?.classList.add("hidden"), main[0]?.classList.remove("blur"));
  };

  return (
    <>
      <main>
        <div style={styles}>
          <div className="flex flex-col h-full justify-between py-12 w-full">
            <h1 className="text-6xl md:text-7xl text-center font-extrabold mx-auto font-great">
              Baby Shower de Ana Fernanda
            </h1>

            <Countdown />
          </div>
        </div>
        <h2 className="text-center text-5xl font-great my-6">
          ¿Dónde y cuando?
        </h2>

        <div className="bg-light rounded-xl p-4 mx-3">
          <h3 className="text-2xl font-semibold">Recepción</h3>
          <Image
            className="rounded-2xl my-3"
            src={
              "https://mx.habcdn.com/photos/business/medium/fachadas-casas-modernas-de-dos-plantas-en-esquina-1-457876.jpg"
            }
            alt="Ubicacion"
            width={1000}
            height={100}
          />
          <p className="text-xl font-medium mb-3">Casita de Ana Fernanda</p>
          <p>
            <span className="text-lg font-medium">Cuando:</span> 16 de diciembre
            del 2023 15:00 hrs.
          </p>
          <p>
            <span className="text-lg font-medium">Dirección:</span> 1ra Cerrada
            de Lázaro Cárdenaz #69 Barrio Cruztitla, San Antonio Tecomitl, Milpa
            Alta, CDMX
          </p>
          <div className="flex flex-col gap-2 mt-3">
            <button
              onClick={handleToggle}
              className="px-3 py-2 bg-primary/70 rounded"
            >
              Ver Mapa
            </button>
            <button className="px-3 py-2 bg-primary/70 rounded">
              Agendar en el calendario
            </button>
          </div>
        </div>
      </main>
      <div
        id="modal"
        tabIndex={-1}
        aria-hidden="true"
        className="fixed top-0 left-0 right-0 my-3 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)]"
      >
        <div className="relative w-full max-w-2xl max-h-full">
          <div className="relative rounded-lg shadow bg-dark">
            <div className="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-600">
              <h3 className="text-xl font-semibold text-light">
                Ubicación Recepción
              </h3>
              <button
                type="button"
                onClick={handleToggle}
                className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                data-modal-hide="modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>

            <div className="p-6 space-y-6 text-light">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d941.9058793122036!2d-98.99999973038163!3d19.211639265294536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDEyJzQxLjkiTiA5OMKwNTknNTcuNyJX!5e0!3m2!1ses-419!2smx!4v1696210839654!5m2!1ses-419!2smx"
                width="400"
                height="300"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <p className="text-xl font-medium mb-3">Casita de Ana Fernanda</p>
              <p>
                <span className="text-lg font-medium">Cuando:</span> 16 de
                diciembre del 2023 15:00 hrs.
              </p>
              <p>
                <span className="text-lg font-medium">Dirección:</span> 1ra
                Cerrada de Lázaro Cárdenaz #69 Barrio Cruztitla, San Antonio
                Tecomitl, Milpa Alta, CDMX
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
