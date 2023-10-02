"use client";

import { useEffect, useState } from "react";

export const useCountdown = (fechaObjetivo: string) => {
  const [countdown, setCountdown] = useState(
    new Date(fechaObjetivo).getTime() - new Date().getTime()
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(new Date(fechaObjetivo).getTime() - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [new Date(fechaObjetivo).getTime()]);

  return getReturnValues(countdown);
};

const getReturnValues = (countDown: any) => {
  // calculate time left
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};
