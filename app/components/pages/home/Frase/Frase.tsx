
const styles = {
  backgroundImage: "url(/img/amor.png)",
  backgroundSize: "cover",
  backgroundPosition: "center",
  width: "100%",
  height: "100vh",
};

export const Frase = () => {
  return (
    <div style={styles} className="flex justify-center items-center rounded-xl mt-5">
      <h2 className="text-center text-white text-8xl font-great my-6 text-shadow">
        Soy el resutado perfecto del amor entre mamá y papá
      </h2>
    </div>
  );
};
