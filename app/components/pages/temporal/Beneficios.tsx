import { IconLeaf, IconBrush, IconMailFast, IconBusinessplan, IconCalendarCheck, IconPalette, IconEdit } from "@tabler/icons-react";

export const Beneficios = () => {
  return (
    <>
      <div className="container mx-auto my-10">
        <h2 className="text-4xl text-center my-10 font-bold">
          Beneficios de una invitación digital
        </h2>
        <div className="flex flex-wrap justify-center gap-10 my-5">
          <div className="flex flex-col items-center hover:opacity-75 hover:bg-light rounded-3xl p-10 w-96 md:w-80 lg:w-60 mx-3 ease-in duration-150 basis-1/1">
            <IconLeaf className="w-16 h-16 md:w-20 md:h-16 lg:w-24 lg:h-24 text-primary"/>
            <p className="text-2xl text-center text-primary font-semibold">Eco-friendly</p>
          </div>
          <div className="flex flex-col items-center hover:opacity-75 hover:bg-light rounded-3xl p-10 w-96 md:w-80 lg:w-60 mx-3 ease-in duration-150 basis-1/1">
            <IconBrush className="w-16 h-16 md:w-20 md:h-16 lg:w-24 lg:h-24 text-primary"/>
            <p className="text-2xl text-center text-primary font-semibold">
              Proceso de diseño más rápido
            </p>
          </div>
          <div className="flex flex-col items-center hover:opacity-75 hover:bg-light rounded-3xl p-10 w-96 md:w-80 lg:w-60 mx-3 ease-in duration-150 basis-1/1">
            <IconMailFast className="w-16 h-16 md:w-20 md:h-16 lg:w-24 lg:h-24 text-primary"/>
            <p className="text-2xl text-center text-primary font-semibold">
              No tendrás problemas de envio
            </p>
          </div>
          <div className="flex flex-col items-center hover:opacity-75 hover:bg-light rounded-3xl p-10 w-96 md:w-80 lg:w-60 mx-3 ease-in duration-150 basis-1/1">
            <IconCalendarCheck className="w-16 h-16 md:w-20 md:h-16 lg:w-24 lg:h-24 text-primary"/>
            <p className="text-2xl text-center text-primary font-semibold">
              Confirmación de asistencia inmediata
            </p>
          </div>
          <div className="flex flex-col items-center hover:opacity-75 hover:bg-light rounded-3xl p-10 w-96 md:w-80 lg:w-60 mx-3 ease-in duration-150 basis-1/1">
            <IconBusinessplan className="w-16 h-16 md:w-20 md:h-16 lg:w-24 lg:h-24 text-primary"/>
            <p className="text-2xl text-center text-primary font-semibold">
              Ahorras dinero y tiempo
            </p>
          </div>
          <div className="flex flex-col items-center hover:opacity-75 hover:bg-light rounded-3xl p-10 w-96 md:w-80 lg:w-60 mx-3 ease-in duration-150 basis-1/1">
            <IconPalette className="w-16 h-16 md:w-20 md:h-16 lg:w-24 lg:h-24 text-primary"/>
            <p className="text-2xl text-center text-primary font-semibold">
              Personalización a tu gusto
            </p>
          </div>
          <div className="flex flex-col items-center hover:opacity-75 hover:bg-light rounded-3xl p-10 w-96 md:w-80 lg:w-60 mx-3 ease-in duration-150 basis-1/1">
            <IconEdit className="w-16 h-16 md:w-20 md:h-16 lg:w-24 lg:h-24 text-primary"/>
            <p className="text-2xl text-center text-primary font-semibold">
              Rápida actualización de contenido
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
