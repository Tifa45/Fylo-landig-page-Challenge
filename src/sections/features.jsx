import { features } from "../constants/constant";

function Features() {
  return (
    <section id="features">
    <div className="w-full flex flex-col md:flex-row flex-wrap items-center justify-center py-8 ">
      {features.map((f) => (
        <div
          className="flex flex-col w-full md:w-[50%] justify-center items-center mb-24  "
          key={f.title}
        >
          <div className="mb-6  ">
            <img src={f.icon} alt={f.title} className="h-[100px] " />
          </div>
          <div>
            <h1 className="font-primeFont text-[17px] font-bold text-center text-white">
              {" "}
              {f.title}{" "}
            </h1>
          </div>
          <div className="w-[85%] md:w-[80%] lg:w-[50%] ">
            <p className="font-bodyFont text-[14px] text-center text-white">
              {f.description}
            </p>
          </div>
        </div>
      ))}
    </div>
    </section>
  );
}

export default Features;
