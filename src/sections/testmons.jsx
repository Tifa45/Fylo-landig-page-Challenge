import TestiCard from "../components/testi-card";
import { testimons } from "../constants/constant";

function Testimons() {
  return (
    <section id="team">
      <div className="w-full p-6 md:p-12 lg:p-18">
        <div className="flex-center-md w-full relative isolate">
            <div className="absolute -top-10 left-2  md:-top-8 md:-left-1 -z-10">
                <img src="bg-quotes.png" alt="bg-quotes.png" />
            </div>
          {
          
          testimons.map((tes, index) => (
            <div key={index} className="w-full md:w-[32.5%]  ">
              <TestiCard
                userName={tes.userName}
                userInfo={tes.userInfo}
                review={tes.review}
                avatar={tes?.userImage}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimons;
