function Productive() {
  return (
    <section >
      <div className="md:flex md:items-center py-10 md:gap-20">
        <div className="px-20">
          <img src="illustration-stay-productive.png" alt="stay-productive" />
        </div>
        <div className="md:flex md:flex-col md:justify-center md:w-[50%] p-4 ">
          <div className="w-[80%] pt-14">
            <h1 className="font-primeFont text-[16px] md:text-5xl font-bold  md:text-left  text-white">
              Stay productive, wherever you are
            </h1>
          </div>
          <div className="mt-6  ">
            <p className="mb-4 text-white font-bodyFont md:text-[19px] text-[14px]">
              Never let location be an issue when accessing your files. Fylo has
              you covered for all of your file storage needs.
            </p>
            <p className="mb-4 text-white font-bodyFont md:text-[19px] text-[14px]">
              Securely share files and folders with friends, family and
              colleagues for live collaboration. No email attachments required.
            </p>
          </div>
          <div className="md:w-full">
            <a href="#">
              <p className=" text-teal-200 font-bodyFont md:text-[19px] text-[14px] group hover:text-white w-fit">
                See how Fylo works
                <span className="ml-2">
                  <svg
                    className="inline "
                    fill="#000"
                    width="16px"
                    height="16px"
                    viewBox="-2.4 -2.4 28.80 28.80"
                    xmlns="http://www.w3.org/2000/svg"
                    stroke="#fff"
                    strokeWidth="0.00024000000000000003"
                  >
                    <g id="SVGRepo_bgCarrier" strokeWidth="0">
                      <rect
                        className="fill-teal-200 group-hover:fill-white"
                        x="-2.4"
                        y="-2.4"
                        width="28.80"
                        height="28.80"
                        rx="14.4"
                        strokeWidth="0"
                      />
                    </g>

                    <g
                      id="SVGRepo_tracerCarrier"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />

                    <g id="SVGRepo_iconCarrier">
                      <path d="M12 10.994H8v2h4V16l4.005-4.005L12 7.991z" />
                    </g>
                  </svg>
                </span>
                <span className="border-1 w-[calc(100%-2px)] block mt-1.5"></span>
              </p>
            </a>
          </div>
        </div>
      </div>
      
     
    </section>
  );
}

export default Productive;
