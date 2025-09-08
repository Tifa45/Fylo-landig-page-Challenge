function Hero() {
  return (
    <div className=" container-main isolate  overflow-hidden pb-[16%] relative">
      <div className="w-full ">
        <div className=" w-[80%] md:w-[50%] max-w-5xl mx-auto flex justify-center ">
          <img src="illustration-intro.png" alt="intro" className=" w-fit" />
        </div>
        <div className="w-full absolute bottom-[50%] xs:bottom-[30%] xl:bottom-[5%]  sm:bottom-[20%] -z-10 flex flex-col bg-intro h-[110%] ">
          <div className="@container w-full mt-auto">
            <img
              src="bg-curvy-desktop.svg"
              alt="bgWavy"
              className="hidden @xl:block w-full"
            />
            <img
              src="bg-curvy-mobile.svg"
              alt="bgWavy"
              className="@xl:hidden w-full"
            />
          </div>
        </div>
      </div>
      <div className=" flex flex-col  items-center md:mt-2 py-4  w-full ">
        <div className="flex flex-col items-center w-[95%] md:w-[80%] xl:w-[65%] p-6  ">
          <h1 className="hero-heading">
            All your files in one secure location, accessable anywhere.
          </h1>
        </div>
        <div className=" flex flex-col items-center w-[90%] md:w-[70%] xl:w-[50%]  px-6 ">
          <p className="text-white font-bodyFont text-center text-[14px] md:text-[20px]">
            Fylo stores all your most important files in one secure
            location.Access them wherever you need, share and collaborate with
            friends, family, and co-workers.
          </p>
        </div>
        <div className="flex justify-center items-center p-4 mt-6 w-[70%] lg:w-[25%]">
          <button className="cta-btn">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
