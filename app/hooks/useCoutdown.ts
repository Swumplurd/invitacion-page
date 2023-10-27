"use client";

import { useEffect, useState } from "react";

export const useCountdown = (fechaObjetivo: string) => {
  const targetDate = new Date(fechaObjetivo).getTime();
  const [countdown, setCountdown] = useState(targetDate - new Date().getTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(targetDate - new Date().getTime());
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return getReturnValues(countdown);
};

const getReturnValues = (countDown: any) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);

  return [days, hours, minutes, seconds];
};
