import Image from "next/image";

export const Fotos = () => {
  return (
    <>
      <h2 className="text-center text-white text-5xl font-great my-6">
        Album Fotografico de Ana Fernanda
      </h2>
      <div className="flex flex-col gap-4">
        <Image className="rounded-xl" alt="ana fernanda" src={"/corazon.gif"} width={1920} height={100} />
        <Image className="rounded-xl" alt="ana fernanda" src={"/bebe.gif"} width={1920} height={100} />
      </div>
    </>
  );
};
