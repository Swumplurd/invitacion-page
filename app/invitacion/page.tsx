import { Great_Vibes } from "next/font/google";
import { Countdown } from "../components/shared/Countdown";

const styles = {
  backgroundImage: "url(/img/fondo-invitacion.jpg)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100vh",
};

const great = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export default function Invitacion() {
  return (
    <div style={styles}>
      <div className="absolute flex flex-col h-full justify-between py-12 w-full">
        <h1
          className={`${great.className} text-6xl md:text-7xl text-center font-extrabold mx-auto`}
        >
          Baby Shower de Ana Fernanda
        </h1>

        <Countdown />
      </div>
    </div>
  );
}
