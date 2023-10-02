"use client";

import { useCountdown } from "@/app/hooks/useCoutdown";

export const Countdown = () => {
  const [dias, horas, minutos, segundos] = useCountdown("Dec 16, 2023 15:00:00");

  return (
    <div className="flex justify-center gap-11 text-center">
      <p id="demo"></p>
      <div>
        <h3>{dias}</h3>
        <h3>Dias</h3>
      </div>
      <div>
        <h3>{horas}</h3>
        <h3>Horas</h3>
      </div>
      <div>
        <h3>{minutos}</h3>
        <h3>Minutos</h3>
      </div>
      <div>
        <h3>{segundos}</h3>
        <h3>Segundos</h3>
      </div>
    </div>
  );
};
