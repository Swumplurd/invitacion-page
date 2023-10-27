import Image from "next/image";
import Swal from "sweetalert2";
const googleEventURL =
  "https://www.google.com/calendar/render?action=TEMPLATE&text=Baby+Shower+de+Ana+Fernanda&details=Acompa%C3%B1anos+a+celebrar+el+Baby+shower+de+nuestra+beb%C3%A9+Ana+Fernanda&location=1a.+Cda+Lazaro+Cardenaz%2C+San+Antonio+Tecomitl%2C+Milpa+Alta&dates=20231216T210000Z%2F20231217T020000Z";
export const Ubicacion = () => {
  const handleToggle = () => {
    Swal.fire({
      title: "Recepcion",
      confirmButtonColor: "#8D7B68",
      background: "#e7d1ba",
      backdrop: "blur",
      confirmButtonText: "Cerrar",
      allowEnterKey: false,
      html: `<div class="p-6 space-y-6">
      <div class="aspect-video relative">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d941.9058793122036!2d-98.99999973038163!3d19.211639265294536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTnCsDEyJzQxLjkiTiA5OMKwNTknNTcuNyJX!5e0!3m2!1ses-419!2smx!4v1696210839654!5m2!1ses-419!2smx"
        allowFullScreen={false}
        loading="lazy"
        class="responsive-iframe"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      </div>
            <p class="text-xl font-medium mb-3">Casita de Ana Fernanda</p>
            <p>
              <span class="text-lg font-medium">Cuando:</span> 16 de
              diciembre del 2023 15:00 hrs.<br>
              <span class="text-lg font-medium">Dirección:</span> 1ra
              Cerrada de Lázaro Cárdenaz #69 Barrio Cruztitla, San Antonio
                Tecomitl, Milpa Alta, CDMX
            </p>
          </div>`,
    });
  };
  return (
    <>
      <h2 className="text-center text-white text-5xl font-great my-6">
        ¿Dónde y cuando?
      </h2>
      <div>
        <div className="bg-brown-light rounded-xl p-4">
          <h3 className="text-2xl font-semibold">Recepción</h3>
          <Image
            className="rounded-2xl my-3"
            src={
              "/img/casa.jpg"
            }
            alt="Ubicacion"
            width={1920}
            height={100}
          />
          <p className="text-xl font-medium mb-3">Casita de Ana Fernanda</p>
          <p>
            <span className="text-lg font-medium">Cuando:</span> 16 de diciembre
            del 2023 15:00 hrs.
          </p>
          <p>
            <span className="text-lg font-medium">Dirección:</span> 1ra Cerrada
            de Lázaro Cárdenas #69 Barrio Cruztitla, San Antonio Tecomitl, Milpa
            Alta, CDMX
          </p>
          <div className="flex flex-col gap-2 mt-3">
            <button
              onClick={handleToggle}
              className="px-3 py-2 bg-brown-secondary hover:bg-brown-secondary/80 text-white rounded"
            >
              Ver Mapa
            </button>
            <a
              href={googleEventURL}
              className="px-3 py-2 text-center bg-brown-secondary hover:bg-brown-secondary/80 text-white rounded"
            >
              Agendar en el calendario de Google
            </a>
          </div>
        </div>
      </div>
    </>
  );
};
