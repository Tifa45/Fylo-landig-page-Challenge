import { footerFirstList, footerSecondList } from "../constants/constant";

function Footer() {
  return (
    <section>
      <div className="bg-footer py-12 px-6 md:px-12 lg:px-30 ">
        <div className="mb-8 pl-4 md:pl-0">
          <img src="./logo.svg" alt="logo" />
        </div>
        <div className="flex-center-md-footer md:flex-wrap lg:flex-nowrap gap-8 ">
          <div className=" flex gap-6 mb-6 md:max-w-[45%] xl:max-w-[30%]  ">
            <div className="w-[32px]  flex-shrink-0 mt-2 ">
              <img className="w-5 " src="icon-location.svg" alt="location" />
            </div>

            <p className=" text-[16px] text-white m-0 ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
          </div>
          <div className="w-fit md:w-[45%] lg:w-fit">
            <div className="flex gap-6 mb-4  ">
              <div className="w-[32px] flex-shrink-0  ">
                <img className=" h-5 " src="icon-phone.svg" alt="phone" />
              </div>

              <p className=" text-[16px] text-white m-0 ">+1-543-123-4567</p>
            </div>
            <div className="flex gap-6 items-center  ">
              <div className="w-[32px] flex-shrink-0">
                <img className=" h-5 " src="icon-email.svg" alt="email" />
              </div>
              <p className=" text-[16px] text-white m-0 ">example@fylo.com</p>
            </div>
          </div>
          <div className="mt-12 md:mt-0 w-fit md:w-[45%] lg:w-fit">
            <ul className="list-none flex flex-col justify-start gap-4 pt-0 ">
              {footerFirstList.map((item, index) => (
                <li key={`${index}-${item}`}>
                  <a href="#">
                    <p className="navlink hover-underline-animation ">{item}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 md:mt-0 md:w-[45%] lg:w-fit">
            <ul className="list-none flex flex-col justify-start gap-4 pt-0 ">
              {footerSecondList.map((item, index) => (
                <li key={`${index}-${item}`}>
                  <a href="#">
                    <p className="navlink hover-underline-animation ">{item}</p>
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex justify-center md:gap-4 w-full lg:w-auto lg:justify-start mt-22 lg:mt-0">
            <div>
              <svg
                className="group h-[50px] w-[50px] "
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox=" 0 0 50 50"
                enable-background="new  0 0 42.5 42.5"
              >
                <g id="XMLID_2080_">
                  <path
                    className=" footer-icon-p1"
                    id="XMLID_2082_"
                    fill="none"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    d="M20,38.6L20,38.6
		c-10.5,0-19-8.5-19-19v0C1,9,9.5,0.5,20,0.5h0c10.5,0,19,8.5,19,19v0C39,30,30.5,38.6,20,38.6z"
                  ></path>
                  <path
                    className="footer-icon-p2"
                    id="XMLID_2081_"
                    d="M17.1,31h4.6V19.4H25l0.3-3.9h-3.6c0,0,0-1.5,0-2.2c0-0.9,0.2-1.3,1.1-1.3
		c0.7,0,2.5,0,2.5,0V8c0,0-2.6,0-3.2,0c-3.4,0-5,1.5-5,4.4c0,2.5,0,3.1,0,3.1h-2.4v3.9h2.4V31z"
                  ></path>
                </g>
              </svg>
            </div>
            <div>
              <svg
                className="group h-[52px] w-[52px] -mt-1 mr-1"
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox=" 0 0 50 50"
              >
                <g id="XMLID_2111_">
                  <path
                    className="footer-icon-p1"
                    id="XMLID_2113_"
                    fill="none"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    d="M22.1,41.6L22.1,41.6
		c-10.5,0-19-8.5-19-19v0c0-10.5,8.5-19,19-19l0,0c10.5,0,19,8.5,19,19v0C41.2,33,32.7,41.6,22.1,41.6z"
                  ></path>
                  <path
                    className="footer-icon-p2"
                    id="XMLID_2112_"
                    d="M12,28.9c1.8,1.2,4,1.9,6.4,1.9c7.7,0,12.1-6.5,11.8-12.4c0.8-0.6,1.5-1.3,2.1-2.2
		c-0.7,0.3-1.5,0.6-2.4,0.7c0.9-0.5,1.5-1.3,1.8-2.3c-0.8,0.5-1.7,0.8-2.6,1c-0.8-0.8-1.8-1.3-3-1.3c-2.7,0-4.7,2.5-4.1,5.1
		c-3.5-0.2-6.5-1.8-8.6-4.3c-1.1,1.9-0.6,4.3,1.3,5.6c-0.7,0-1.3-0.2-1.9-0.5c0,1.9,1.3,3.7,3.3,4.1c-0.6,0.2-1.2,0.2-1.9,0.1
		c0.5,1.7,2.1,2.9,3.9,2.9C16.4,28.6,14.2,29.2,12,28.9z"
                  ></path>
                </g>
              </svg>
            </div>
            <div>
              <svg
                className="group h-[52px] w-[52px] -mt-0.5 "
                version="1.1"
                id="Layer_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlns:xlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 50 50"
              >
                <g id="XMLID_2023_">
                  <path
                    className="footer-icon-p1"
                    id="XMLID_2079_"
                    fill="none"
                    stroke-width="1.5"
                    stroke-miterlimit="10"
                    d="M20.8,40.2L20.8,40.2
		c-10.5,0-19-8.5-19-19v0c0-10.5,8.5-19,19-19l0,0c10.5,0,19,8.5,19,19v0C39.8,31.7,31.3,40.2,20.8,40.2z"
                  ></path>
                  <g id="XMLID_2024_">
                    <path
                      className="footer-icon-p2"
                      id="XMLID_2076_"
                      d="M20.8,12.6c2.8,0,3.1,0,4.2,0.1c1,0,1.6,0.2,1.9,0.4c0.5,0.2,0.8,0.4,1.2,0.8
			c0.4,0.4,0.6,0.7,0.8,1.2c0.1,0.4,0.3,0.9,0.4,1.9c0,1.1,0.1,1.4,0.1,4.2s0,3.1-0.1,4.2c0,1-0.2,1.6-0.4,1.9
			c-0.2,0.5-0.4,0.8-0.8,1.2c-0.4,0.4-0.7,0.6-1.2,0.8c-0.4,0.1-0.9,0.3-1.9,0.4c-1.1,0.1-1.4,0.1-4.2,0.1s-3.1,0-4.2-0.1
			c-1,0-1.6-0.2-1.9-0.4c-0.5-0.2-0.8-0.4-1.2-0.8c-0.4-0.4-0.6-0.7-0.8-1.2c-0.1-0.4-0.3-0.9-0.4-1.9c-0.1-1.1-0.1-1.4-0.1-4.2
			s0-3.1,0.1-4.2c0-1,0.2-1.6,0.4-1.9c0.2-0.5,0.4-0.8,0.8-1.2c0.4-0.4,0.7-0.6,1.2-0.8c0.4-0.1,0.9-0.3,1.9-0.4
			C17.7,12.6,18,12.6,20.8,12.6 M20.8,10.7c-2.8,0-3.2,0-4.3,0.1c-1.1,0.1-1.9,0.2-2.5,0.5c-0.7,0.3-1.3,0.6-1.8,1.2
			c-0.6,0.6-0.9,1.2-1.2,1.8c-0.3,0.7-0.4,1.4-0.5,2.5c-0.1,1.1-0.1,1.5-0.1,4.3c0,2.8,0,3.2,0.1,4.3c0.1,1.1,0.2,1.9,0.5,2.5
			c0.3,0.7,0.6,1.3,1.2,1.8c0.6,0.6,1.2,0.9,1.8,1.2c0.7,0.3,1.4,0.4,2.5,0.5c1.1,0.1,1.5,0.1,4.3,0.1c2.8,0,3.2,0,4.3-0.1
			c1.1-0.1,1.9-0.2,2.5-0.5c0.7-0.3,1.3-0.6,1.8-1.2c0.6-0.6,0.9-1.2,1.2-1.8c0.3-0.7,0.4-1.4,0.5-2.5c0.1-1.1,0.1-1.5,0.1-4.3
			c0-2.8,0-3.2-0.1-4.3c-0.1-1.1-0.2-1.9-0.5-2.5c-0.3-0.7-0.6-1.3-1.2-1.8c-0.6-0.6-1.2-0.9-1.8-1.2c-0.7-0.3-1.4-0.4-2.5-0.5
			C24,10.7,23.6,10.7,20.8,10.7"
                    ></path>
                    <path
                      className="footer-icon-p2"
                      id="XMLID_2073_"
                      d="M20.8,15.8c-3,0-5.4,2.4-5.4,5.4c0,3,2.4,5.4,5.4,5.4c3,0,5.4-2.4,5.4-5.4
			C26.1,18.2,23.7,15.8,20.8,15.8 M20.8,24.6c-1.9,0-3.5-1.6-3.5-3.5c0-1.9,1.6-3.5,3.5-3.5s3.5,1.6,3.5,3.5
			C24.3,23.1,22.7,24.6,20.8,24.6"
                    ></path>
                    <path
                      className="footer-icon-p2"
                      id="XMLID_2025_"
                      d="M27.6,15.6c0,0.7-0.6,1.3-1.3,1.3c-0.7,0-1.3-0.6-1.3-1.3c0-0.7,0.6-1.3,1.3-1.3
			C27,14.3,27.6,14.9,27.6,15.6"
                    ></path>
                  </g>
                </g>
              </svg>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
