const FourthBlock = () => {
  return (
    <div className="bg-[#FF4432] w-full flex flex-col items-center px-[16px]">
      <div className="max-w-[1000px]">
        <div className="h-[518px] flex flex-col items-center">
          <h5 className="text-[32px] sm:text-[48px] font-bold text-white mt-[80px] sm:mt-[120px] leading-[58px]">
            Увеличьте оборот на 25% c помощью программы лояльности и удобного
            метода оплаты{" "}
          </h5>
          <button className="text-black bg-white text-[20px] font-bold mt-[40px] mb-[120px]">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B996505205058"
              className="font-bold text-black"
              target="_blank"
            >
              Участвовать
            </a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default FourthBlock;
