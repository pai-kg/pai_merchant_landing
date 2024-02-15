import Logo from "../assets/Logo business Pai.svg";
import FirstBlockImg from "../assets/Block 1 3.svg";
import { firstBlockCardsInfo } from "../utilities/constants";

const Main = () => {
  return (
    <div className="flex flex-col mb-[80px] sm:mb-[160px] w-full sm:items-center">
      <div className="max-w-[1032px]">
        <div className="flex items-center justify-between h-[64px] mt-[32px] mx-4 sm:mx-0">
          <img src={Logo} alt="Logo Pai" />
          <button className="text-[16px] sm:text-[20px] bg-[#E9E9E9] rounded-2xl">
            <a
              href="https://api.whatsapp.com/send/?phone=%2B996505205058&text&type=phone_number&app_absent=0"
              className="font-bold text-black"
            >
              Участвовать
            </a>
          </button>
        </div>
        <div className="flex items-center justify-between">
          <div className="w-full sm:w-[60%]">
            <div className="text-left mt-[64px] mb-[56px] mx-4 sm:mx-0">
              <h1 className="text-[32px] sm:text-[48px] font-bold">
                Сервис оплаты счета и начисления бонусов без потери времени
              </h1>
              <p className="mt-[32px] text-[18px] sm:text-[24px] text-[#8A898E]">
                Освободите время персонала и дайте гостям самостоятельно
                оплатить счет и получить бонусы
              </p>
            </div>
            <div className="flex flex-nowrap sm:flex-wrap gap-2 sm:gap-6 w-90 sm:w-auto overflow-x-auto">
              <div className="border-[2px] border-[#E9E9E9] rounded-3xl min-w-[260px] sm:w-[260px] h-[156px] flex flex-col p-4 text-left mx-4 sm:mx-0">
                <p className="text-[40px] text-[#FF4432] font-semibold">
                  0 сом
                </p>
                <p className="text-[18px] text-[#8A898E]">
                  Стоимость интеграции и пользования
                </p>
              </div>
              {firstBlockCardsInfo.map((card) => (
                <div
                  key={card.description}
                  className="border-[2px] border-[#E9E9E9] rounded-3xl min-w-[260px] sm:w-[260px] h-[156px] flex flex-col p-[24px] text-left"
                >
                  <img src={card.icon} alt="#" className="flex self-start" />
                  <p className="text-[18px] text-[#8A898E]">
                    {card.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
            <img src={FirstBlockImg} alt="Phone image" className="h-[684px] hidden sm:block  mt-[64px] absolute sm:right-[-190px] md:right-[-250px] lg:right-[-165px] xl:right-[0px] 2xl:right-[200px]"/>
        </div>
      </div>
    </div>
  );
};

export default Main;
