import { thirdBlockCardsInfo } from "../utilities/constants";

const SecondBlock = () => {
  return (
    <div className="bg-[#FF4432] w-full h-[712px] flex flex-col items-center hidden md:block" style={{ backgroundColor: '#FF4432' }}>
      <div className="pt-[80px] sm:pt-[160px]">
        <div>
          <h3 className="text-[48px] font-bold text-white">
            Насколько наш метод оплаты лучше?
          </h3>
          <p className="text-[24px] text-white mt-[32px]">
            Дайте гостям оплатить их заказ самостоятельно
          </p>
        </div>
        <div className="flex items-center justify-center gap-6 mt-[80px]">
          {thirdBlockCardsInfo.map((card) => (
            <div
              key={card.description}
              className="w-[328px] h-[193px] bg-white rounded-3xl p-8 text-left"
            >
              <img src={card.icon} alt="" />
              <p className="text-[18px]">
                {" "}
                {card.description.split(" ").map((word, index) => (
                  <span
                    key={index}
                    className={
                      word.includes("%")
                        ? "text-[#FF4432] text-[24px] font-bold"
                        : "text-[#8A898E]"
                    }
                  >
                    {word}{" "}
                  </span>
                ))}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SecondBlock;
