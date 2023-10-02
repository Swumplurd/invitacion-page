import { Beneficios, MainCard, MainSwiper } from "./components/homepage";
import { Navbar } from "./components/shared";

import "./page.css";

export default function Home() {
  return (
    <>
      <Navbar />
      <MainSwiper />
      <Beneficios />
      <MainCard />
    </>
  );
}
