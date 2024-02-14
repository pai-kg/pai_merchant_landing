import Main from "../components/Main"
import FirstBlock from "../components/FirstBlock"
import SecondBlock from "../components/SecondBlock"
import ThirdBlock from "../components/ThirdBlock"
import FourthBlock from "../components/FourthBlock"
import Footer from "../components/Footer"

const MainPage = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center">
        <Main />
        <FirstBlock />
        <SecondBlock />
        <ThirdBlock />
        <FourthBlock />
        <Footer />
    </div>
  )
}

export default MainPage