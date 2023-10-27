"use client";

import { useCountdown } from "@/app/hooks/useCoutdown";

export const Countdown = () => {
  const [dias, horas, minutos, segundos] = useCountdown("Dec 16, 2023 15:00:00");

  return (
    <div className="flex justify-center gap-8 pb-32 md:gap-11 text-center font-great">
      <div>
        <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{dias}</h2>
        <h3 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Dias</h3>
      </div>
      <div>
        <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{horas}</h2>
        <h3 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Horas</h3>
      </div>
      <div>
        <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{minutos}</h2>
        <h3 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Minutos</h3>
      </div>
      <div>
        <h2 className="font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl">{segundos}</h2>
        <h3 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Segundos</h3>
      </div>
    </div>
  );
};
