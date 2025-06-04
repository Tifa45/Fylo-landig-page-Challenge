function TestiCard({
  review = "default review",
  avatar,
  userName = "Anynomous",
  userInfo = "some Info",
}) {
  const userInitial = userName.charAt(0);

  return (
    <div className="w-full bg-testi rounded-md py-8 px-4 md:px-8 mb-4 shadow-[10px_8px_8px] shadow-gray-600/10">
      <div className="py-4 mb-4">
        <h3 className="font-bodyFont md:text-[17px] text-[12px] text-white ">
          {review}
        </h3>
      </div>
      <div className="flex justify-start ">
        <div className="min-w-[35px] w-[35px] h-[35px] md:min-w-[50px] md:w-[50px] md:h-[50px] rounded-full overflow-hidden bg-white/8">
          {avatar ? (
            <img src={avatar} alt={userName} />
          ) : (
            <p className="font-bold text-[25px] md:text-5xl text-center  font-primeFont">
              {userInitial}
            </p>
          )}
        </div>
        <div className="ml-4">
          <h3 className="font-bodyFont text-white font-bold md:text-[14px] text-[14px] text-nowrap">
            {userName}
          </h3>
          <p className="font-bodyFont text-gray-400 text-[14px]">{userInfo}</p>
        </div>
      </div>
    </div>
  );
}

export default TestiCard;
