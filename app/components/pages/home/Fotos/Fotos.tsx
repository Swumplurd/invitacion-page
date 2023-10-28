import Image from "next/image";

export const Fotos = () => {
  return (
    <>
      <h2 className="text-center text-white text-5xl font-great my-6">
        Album Fotografico de Ana Fernanda
      </h2>
      <div className="flex flex-col gap-4">
        <Image className="rounded-xl" alt="ana fernanda" src={"/img/bebe/corazon.gif"} width={1920} height={100} />
        <Image className="rounded-xl" alt="ana fernanda" src={"/img/bebe/bebe.gif"} width={1920} height={100} />
        <Image className="rounded-xl" alt="ana fernanda" src={"/img/bebe/bebe1.gif"} width={1920} height={100} />
        <Image className="rounded-xl" alt="ana fernanda" src={"/img/bebe/bebe2.gif"} width={1920} height={100} />
        <Image className="rounded-xl" alt="ana fernanda" src={"/img/bebe/bebe1.png"} width={1920} height={100} />
        <Image className="rounded-xl" alt="ana fernanda" src={"/img/bebe/bebe2.png"} width={1920} height={100} />
        <Image className="rounded-xl" alt="ana fernanda" src={"/img/bebe/bebe3.png"} width={1920} height={100} />
        <Image className="rounded-xl" alt="ana fernanda" src={"/img/bebe/bebe4.png"} width={1920} height={100} />
        <Image className="rounded-xl" alt="ana fernanda" src={"/img/bebe/bebe5.png"} width={1920} height={100} />
        <Image className="rounded-xl" alt="ana fernanda" src={"/img/bebe/bebe6.png"} width={1920} height={100} />
        <Image className="rounded-xl" alt="ana fernanda" src={"/img/bebe/bebe7.png"} width={1920} height={100} />
      </div>
    </>
  );
};
