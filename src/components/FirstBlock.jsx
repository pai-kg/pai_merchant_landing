import firstBlockImg from "../assets/NFC block4 2.svg";
import secondBlockImg from "../assets/Check POS2 1.svg";
import thirdBlockImg from "../assets/last block 3.svg";
import { secondBlockCardsInfo } from "../utilities/constants";

const FirstBlock = () => {
  return (
    <div className="bg-black text-white py-[80px] sm:py-[160px] w-full  flex flex-col items-center">
      <div className="max-w-[1032px]">
        <div>
          <h2 className="text-[32px] sm:text-[48px] font-bold">Как работает оплата с нами?</h2>
          <p className="pt-[32px] text-[18px] sm:text-[24px] text-[#8A898E] mb-[80px]">
            Ускорьте время обслуживание гостей на 30%
          </p>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-around sm:justify-between text-left border-[1px] border-[#191919] rounded-3xl bg-[#191919] h-[400px] sm:h-[328px] pt-[24px] sm:pt-[0px] px-[20px] sm:px-[80px] mx-4 sm:mx-0">
          <div className="sm:w-1/2 flex items-center justify-center order-2 sm:order-1">
            <img src={firstBlockImg} alt="" className="max-h-full w-[300px] sm:w-[369px] sm:max-w-full" />
          </div>
          <div className="sm:w-1/2 order-1 sm:order-2">
            <h5 className="text-[28px] sm:text-[40px] font-semibold">Оплата заказа</h5>
            <p className="text-[16px] sm:text-[18px] text-[#8A898E]"> 
              Гостем через NFC метку с деталями и суммой заказа
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center justify-around sm:justify-between text-left border-[1px] border-[#191919] rounded-3xl bg-[#191919] h-[328px] my-[24px] pt-[24px] sm:pt-[0px] px-[20px] sm:px-[80px] mx-4 sm:mx-0">
          <div className="sm:w-1/2">
            <h5 className="text-[28px] sm:text-[40px] font-semibold">Закрытие заказа</h5>
            <p className="text-[16px] sm:text-[18px] text-[#8A898E]">
              Aвтоматически в POS-системе после успешной оплаты
            </p>
          </div>
          <div className="sm:w-1/2 flex items-center justify-center">
            <img
              src={secondBlockImg}
              alt=""
              className="max-h-full w-[300px] sm:w-[480px] sm:max-w-full" 
            />
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-center sm:justify-between text-left border-[1px] border-[#191919] rounded-3xl bg-[#191919] h-[328px] pt-[24px] sm:pt-[0px] px-[20px] sm:px-[80px] mx-4 sm:mx-0">
          <div className="sm:w-1/2 flex items-center justify-center order-2 sm:order-1">
            <img src={thirdBlockImg} alt="" className="max-h-full w-[251px] sm:w-[369px] sm:max-w-full object-contain" />
          </div>
          <div className="sm:w-1/2 order-1 sm:order-2">
            <h5 className="text-[28px] sm:text-[40px] font-semibold">Кэшбэк бонусами</h5>
            <p className="text-[16px] sm:text-[18px] text-[#8A898E]">
              Автоматически начисляются в профиле гостя
            </p>
          </div>
        </div>
        <div className="flex justify-center flex-col sm:flex-row gap-[24px] mt-[24px] mx-4 sm:mx-0">
          {secondBlockCardsInfo.map((card) => (
            <div
              key={card.title}
              className="bg-[#ff4432] text-left p-[20px] sm:p-[40px] h-[136px] sm:h-[175px] border-[1px] border-[#ff4432] rounded-3xl text-white"
            >
              <h5 className="text-[28px] sm:text-[32px] font-bold">{card.title}</h5>
              <p className="text-[16px] sm:text-[18px]">{card.description}</p>
            </div>
          ))}
        </div>
      </div>  
    </div>
  );
};

export default FirstBlock;
