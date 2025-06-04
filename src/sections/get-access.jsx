import RegisterForm from "../components/form";

function GetAccess() {
  return (
    <section id="signin">
      <div className="flex-center p-4 bg-gradient-to-t from-footer from-50% to-main to-50% py-8">
        <div className="w-full md:w-[60%] rounded-md py-8 px-2 lg:p-6 shadow-lg shadow-black bg-main">
          <div className="px-4 lg:px-18 mb-4">
            <h3 className="text-white font-primeFont text-[20px] font-bold text-center">
              Get early access today
            </h3>
            <br />
            <p className="text-white font-bodyFont text-[14px]  text-center">
              It only takes a minute to sign up and our free starter tier is
              extremely generous. If you have any questions, our support team
              would be happy to help you.
            </p>
          </div>
          <div className="p-4">
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
}

export default GetAccess;
