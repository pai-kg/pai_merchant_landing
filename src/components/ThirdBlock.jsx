import { fourthBlockCardsInfo } from "../utilities/constants";

const ThirdBlock = () => {
  return (
    <div className="w-full  flex flex-col items-center my-[80px] sm:my-[160px]">
      <div className="max-w-[1280px]">
        <div className="mx-2 sm:mx-0">
          <h4 className="text-[32px] sm:text-[48px] font-bold px-[32px] leading-[38px]">
            В чем польза программ лояльности?
          </h4>
          <p className="text-[18px] sm:text-[24px] text-[#8A898E] mt-[32px] mb-[80px]">
            Мы все посчитали для вас
          </p>
        </div>
        <div className="flex justify-center flex-wrap gap-[24px] mx-3 sm:mx-0">
          {fourthBlockCardsInfo.map((card, index) => (
            <div
              key={card.title}
              className={` ${
                index === 3
                  ? "bg-[#ff4432] w-full sm:w-[680px] h-[440px] sm:h-[328px] rounded-3xl border-[2px] text-left p-[20px] sm:p-[40px]"
                  : "border-[2px] border-[#E9E9E9] rounded-3xl w-full sm:w-[328px] h-[240px] sm:h-[328px] text-left  p-[20px] sm:p-[40px]"
              }`}
            >
              <h5
                className={`${
                  index === 3
                    ? "bg-[#ff4432] text-white text-[32px] sm:text-[40px] font-bold sm:font-semibold"
                    : `text-[32px] sm:text-[40px] text-[#ff4432] font-bold sm:font-semibold`
                }`}
              >
                {card.title}
              </h5>
              <p
                className={`${
                  index === 3
                    ? "bg-[#ff4432] text-white text-[16px] sm:text-[18px]"
                    : `text-[16px] sm:text-[18px] text-[#8A898E]`
                }`}
              >
                {card.description}
              </p>
              {card.img && (
                <img
                  src={card.img}
                  alt={card.title}
                  className="h-[274px] sm:h-[229px] w-[278px] sm:w-[180px] ml-5 mt-[-15px] sm:mt-[-40px]"
                  style={{ marginLeft: "auto" }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ThirdBlock;
