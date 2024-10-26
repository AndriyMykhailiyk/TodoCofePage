"use client";
import { SetStateAction, useEffect, useState } from "react";
import Footer from "../../MainComponent/footer/Footer";
import "../Cofe.css";
import "./flavors.css";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowRoundBack } from "react-icons/io";
import Cofe from "../page";
import { CiCoffeeCup } from "react-icons/ci";
import { GiOlive } from "react-icons/gi";
import { SiThymeleaf } from "react-icons/si";
import { GiCutLemon } from "react-icons/gi";
import { GiShinyApple } from "react-icons/gi";
import { GiSugarCane } from "react-icons/gi";
import { FaRaspberryPi } from "react-icons/fa6";
import { GiCherry } from "react-icons/gi";
import { BsFlower1 } from "react-icons/bs";
import { GiChocolateBar } from "react-icons/gi";
import { LuNut } from "react-icons/lu";
import { GiWrappedSweet } from "react-icons/gi";
import { SiFigshare } from "react-icons/si";
import { PiClover } from "react-icons/pi";
import { IoIosWine } from "react-icons/io";
import { IoTrash } from "react-icons/io5";
import CindCofe from "../cindcofe/CindCofe";
import Header from "../../MainComponent/HeaderComponents/header/header";

import { useTypeCofeTwo } from "../../store/store";
export default function Flavors() {
  const [Hints, SetHints] = useState(false);
  const [cofePafe, setCofePage] = useState(false);
  const typeCofeTwoFunckk = useTypeCofeTwo(
    (state) => state.useTypeCofeTwoFunckk
  );

  const loadSelectedTextFromLocalStorage = () => {
    const savedText = localStorage.getItem("selectedText");
    return savedText ? JSON.parse(savedText) : [];
  };
  const [selectedText, setSelectedText] = useState<string[]>(
    loadSelectedTextFromLocalStorage()
  );
  const [close] = useState(true);
  const [nextPage, setNextPage] = useState(false);

  const [BasilCofe, SetBasilCofe] = useState(
    localStorage.getItem("BasilCofein") === "true"
  );
  const [Oliveoil, SetOliveoil] = useState(
    localStorage.getItem("Oliveoilin") === "true"
  );
  const [Thyme, SetThyme] = useState(
    localStorage.getItem("Thymein") === "true"
  );
  const [Lemon_Lime, SetLemon_Lime] = useState(
    localStorage.getItem("Lemon_Limein") === "true"
  );
  const [Green_apple, SetGreen_apple] = useState(
    localStorage.getItem("Green_applein") === "true"
  );
  const [Brown_sugar, SetBrown_sugar] = useState(
    localStorage.getItem("Brown_sugarin") === "true"
  );
  const [Blueberry, SetBlueberry] = useState(
    localStorage.getItem("Blueberryin") === "true"
  );
  const [Cherrys, SetCherrys] = useState(
    localStorage.getItem("Cherrysin") === "true"
  );
  const [Orange_blossom, SetOrange_blossom] = useState(
    localStorage.getItem("Orange_blossomin") === "true"
  );
  const [Dark_chocolate, SetDark_chocolate] = useState(
    localStorage.getItem("Dark_chocolatein") === "true"
  );
  const [Hazelnut, SetHazelnut] = useState(
    localStorage.getItem("Hazelnutin") === "true"
  );
  const [Caramel, SetCaramel] = useState(
    localStorage.getItem("Caramelin") === "true"
  );
  const [Fig, SetFig] = useState(localStorage.getItem("Figin") === "true");
  const [Clove, SetClove] = useState(
    localStorage.getItem("Clovein") === "true"
  );
  const [Red_wine, SetRed_wine] = useState(
    localStorage.getItem("Red_winein") === "true"
  );

  const HandleNext = () => {
    setNextPage(true);
  };

  useEffect(() => {
    // Тут ви можете викликати функцію або обробляти selectedText
    typeCofeTwoFunckk(selectedText);
  }, [selectedText, typeCofeTwoFunckk]);

  const handleClick = (text: string) => {
    setSelectedText((prev: string[]) => {
      // Якщо текст вже є в масиві, видалити його
      if (prev.includes(text)) {
        const newSelected = prev.filter((t) => t !== text);
        // Оновити локальне сховище
        localStorage.setItem("selectedText", JSON.stringify(newSelected));
        return newSelected;
      } else {
        // В іншому випадку, додати його до масиву
        const newSelected = [...prev, text];
        // Оновити локальне сховище
        localStorage.setItem("selectedText", JSON.stringify(newSelected));
        return newSelected;
      }
    });

    // Викликати функцію з useTypeCofeTwo з вибраним смаком
  };

  const clearIndividualFlavor = (flavor: string) => {
    setSelectedText((prev: string[]) => prev.filter((t) => t !== flavor));

    switch (flavor) {
      case "Basil":
        SetBasilCofe(false);
        break;
      case "Olive Oil":
        SetOliveoil(false);
        break;
      case "Thyme":
        SetThyme(false);
        break;
      case "Lemon Lime":
        SetLemon_Lime(false);
        break;
      case "Green Apple":
        SetGreen_apple(false);
        break;
      case "Brown Sugar":
        SetBrown_sugar(false);
        break;
      case "Blueberry":
        SetBlueberry(false);
        break;
      case "Cherrys":
        SetCherrys(false);
        break;
      case "Orange Blossom":
        SetOrange_blossom(false);
        break;
      case "Dark Chocolate":
        SetDark_chocolate(false);
        break;
      case "Hazelnut":
        SetHazelnut(false);
        break;
      case "Caramel":
        SetCaramel(false);
        break;
      case "Fig":
        SetFig(false);
        break;
      case "Clove":
        SetClove(false);
        break;
      case "Red Wine":
        SetRed_wine(false);
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    localStorage.setItem("BasilCofein", JSON.stringify(BasilCofe));
    localStorage.setItem("Oliveoilin", JSON.stringify(Oliveoil));
    localStorage.setItem("Thymein", JSON.stringify(Thyme));
    localStorage.setItem("Lemon_Limein", JSON.stringify(Lemon_Lime));
    localStorage.setItem("Green_applein", JSON.stringify(Green_apple));
    localStorage.setItem("Brown_sugarin", JSON.stringify(Brown_sugar));
    localStorage.setItem("Blueberryin", JSON.stringify(Blueberry));
    localStorage.setItem("Cherrysin", JSON.stringify(Cherrys));
    localStorage.setItem("Orange_blossomin", JSON.stringify(Orange_blossom));
    localStorage.setItem("Dark_chocolatein", JSON.stringify(Dark_chocolate));
    localStorage.setItem("Hazelnutin", JSON.stringify(Hazelnut));
    localStorage.setItem("Caramelin", JSON.stringify(Caramel));
    localStorage.setItem("Figin", JSON.stringify(Fig));
    localStorage.setItem("Clovein", JSON.stringify(Clove));
    localStorage.setItem("Red_winein", JSON.stringify(Red_wine));
  }, [
    BasilCofe,
    Oliveoil,
    Thyme,
    Lemon_Lime,
    Green_apple,
    Brown_sugar,
    Blueberry,
    Cherrys,
    Orange_blossom,
    Dark_chocolate,
    Hazelnut,
    Caramel,
    Fig,
    Clove,
    Red_wine,
  ]);

  const HandleHints = () => {
    SetHints(!Hints);
  };

  const HandleNextMenu = () => {
    setCofePage(!false);
  };

  const toggleFlavor = (
    flavor: boolean,
    setFlavor: React.Dispatch<SetStateAction<boolean>>
  ) => {
    setFlavor((prev: boolean) => !prev);
  };

  return (
    <section className="wrapper">
      {cofePafe ? (
        <Cofe />
      ) : nextPage ? (
        <CindCofe />
      ) : (
        <section className="FullWrapper">
          <Header />
          <div className="line66"></div>
          <div className="wrapper-section">
            <div className="backgroundColorSectionfaves">
              <div className="BackBtn">
                <span className="wtapperBack" onClick={HandleNextMenu}>
                  <IoIosArrowRoundBack width={200} height={10} />
                  <p>Назад</p>
                </span>
              </div>
              <div className="wroteLine"></div>

              <div className="Onofone of three">
                <span className="el-one">2 / 3</span>
              </div>
              <div className="ROASTTYPE">
                <h2 className="ROASTTYPEHeader">
                  ЯКИЙ СМАК КАВИ ВАМ ПОДОБАЄТЬСЯ ?
                </h2>
              </div>
              <div className="Hint">
                <div className="wrapperHints" onClick={HandleHints}>
                  <p className="HintText">ОТРИМАТИ ПІДСКАЗКУ</p>
                  <FaPlus className="reactI" size={20} />
                </div>
              </div>
              {Hints ? (
                <p className="HintsTexts">
                  У каві міститься понад 850 ароматичних і смакових сполук.
                  Порівняйте це з вином, у якому близько 200. Круто, га?!
                </p>
              ) : null}
              <div className="wrapper">
                {close ? (
                  <div className="close">
                    {selectedText.map((text, index) => (
                      <ul className="Ul-TasteCofe" key={index}>
                        <li key={index} className="textTaste">
                          {text}

                          <IoTrash
                            onClick={() => clearIndividualFlavor(text)}
                            fill="#a3a3a3"
                            className="trashSvg"
                            size={20}
                          />
                        </li>
                      </ul>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>

            <section className="SelectCofe">
              <div className="SelectCofeDown2">
                <div className="selectWrapper">
                  <p className="selectWrapperText">
                    Який смак кави тобі подобається ?
                  </p>
                </div>
              </div>
              <div className="ColorWrapper">
                <span className="wrapperfirstColor">
                  <div
                    className={BasilCofe ? "setBasilCofe" : "firstColor1"}
                    onClick={() => toggleFlavor(BasilCofe, SetBasilCofe)}
                  >
                    <div
                      className="Elfaves"
                      onClick={() => handleClick("Basil Cofe")}
                    >
                      <CiCoffeeCup size={27} fill="#309c7a" />
                      <p>Basil Cofe</p>
                    </div>
                  </div>
                  <div
                    className={Oliveoil ? "setOliveoil" : "firstColor1"}
                    onClick={() => toggleFlavor(Oliveoil, SetOliveoil)}
                  >
                    <div
                      className="Elfaves"
                      onClick={() => handleClick("Olive oil")}
                    >
                      <GiOlive size={27} fill="#309c7a" />
                      <p>Olive oil</p>
                    </div>
                  </div>
                  <div
                    className={Thyme ? "setThyme" : "firstColor1"}
                    onClick={() => toggleFlavor(Thyme, SetThyme)}
                  >
                    <div
                      className="Elfaves"
                      onClick={() => handleClick("Thyme")}
                    >
                      <SiThymeleaf size={27} fill="#309c7a" />
                      <p>Thyme</p>
                    </div>
                  </div>
                </span>
                <span className="wrapperfirstColor">
                  <div
                    className={Lemon_Lime ? "setLemon_Lime" : "firstColor2"}
                    onClick={() => toggleFlavor(Lemon_Lime, SetLemon_Lime)}
                  >
                    <div
                      className="Elfaves"
                      onClick={() => handleClick("Lemon")}
                    >
                      <GiCutLemon size={27} fill="#ffab51" />
                      <p>Lemon/Lime</p>
                    </div>
                  </div>
                  <div
                    className={Green_apple ? "setGreen_apple" : "firstColor2"}
                    onClick={() => toggleFlavor(Green_apple, SetGreen_apple)}
                  >
                    <div
                      className="Elfaves"
                      onClick={() => handleClick("Green apple")}
                    >
                      <GiShinyApple size={27} fill="#ffab51" />
                      <p>Green apple</p>
                    </div>
                  </div>
                  <div
                    className={Brown_sugar ? "setBrown_sugar" : "firstColor2"}
                    onClick={() => toggleFlavor(Brown_sugar, SetBrown_sugar)}
                  >
                    <div
                      className="Elfaves"
                      onClick={() => handleClick("Brown sugar")}
                    >
                      <GiSugarCane size={27} fill="#ffab51" />
                      <p>Brown sugar</p>
                    </div>
                  </div>
                </span>
                <span className="wrapperfirstColor">
                  <div
                    className={Blueberry ? "setBlueberry" : "firstColor3"}
                    onClick={() => toggleFlavor(Blueberry, SetBlueberry)}
                  >
                    <div
                      className="Elfaves"
                      onClick={() => handleClick("Blueberry")}
                    >
                      <FaRaspberryPi size={27} fill="#fa6d30" />
                      <p>Blueberry</p>
                    </div>
                  </div>
                  <div
                    className={Cherrys ? "setCherrys" : "firstColor3"}
                    onClick={() => toggleFlavor(Cherrys, SetCherrys)}
                  >
                    <div
                      className="Elfaves"
                      onClick={() => handleClick("Cherrys")}
                    >
                      <GiCherry size={27} fill="#fa6d30" />
                      <p>Cherrys</p>
                    </div>
                  </div>
                  <div
                    className={
                      Orange_blossom ? "setOrange_blossom" : "firstColor3"
                    }
                    onClick={() =>
                      toggleFlavor(Orange_blossom, SetOrange_blossom)
                    }
                  >
                    <div
                      className="Elfaves"
                      onClick={() => handleClick("Orange blossom")}
                    >
                      <BsFlower1 size={27} fill="#fa6d30" />
                      <p>Orange blossom</p>
                    </div>
                  </div>
                </span>
                <span className="wrapperfirstColor">
                  <div
                    className={
                      Dark_chocolate ? "setDark_chocolate" : "firstColor4"
                    }
                    onClick={() =>
                      toggleFlavor(Dark_chocolate, SetDark_chocolate)
                    }
                  >
                    <div
                      className="Elfaves"
                      onClick={() => handleClick("Dark chocolate")}
                    >
                      <GiChocolateBar size={27} fill="#532016" />
                      <p>Dark chocolate</p>
                    </div>
                  </div>
                  <div
                    className={Hazelnut ? "setHazelnut" : "firstColor4"}
                    onClick={() => toggleFlavor(Hazelnut, SetHazelnut)}
                  >
                    <div
                      className="Elfaves"
                      onClick={() => handleClick("Hazelnut")}
                    >
                      <LuNut size={27} fill="#532016" />
                      <p>Hazelnut</p>
                    </div>
                  </div>
                  <div
                    className={Caramel ? "setCaramel" : "firstColor4"}
                    onClick={() => toggleFlavor(Caramel, SetCaramel)}
                  >
                    <div
                      className="Elfaves"
                      onClick={() => handleClick("Caramel")}
                    >
                      <GiWrappedSweet size={27} fill="#532016" />
                      <p>Caramel</p>
                    </div>
                  </div>
                </span>
                <span className="wrapperfirstColor">
                  <div
                    className={Fig ? "setFig" : "firstColor5"}
                    onClick={() => toggleFlavor(Fig, SetFig)}
                  >
                    <div className="Elfaves" onClick={() => handleClick("Fig")}>
                      <SiFigshare size={27} fill="#64172b" />
                      <p>Fig</p>
                    </div>
                  </div>
                  <div
                    className={Clove ? "setClove" : "firstColor5"}
                    onClick={() => toggleFlavor(Clove, SetClove)}
                  >
                    <div
                      className="Elfaves"
                      onClick={() => handleClick("Clove")}
                    >
                      <PiClover size={27} fill="#64172b" />
                      <p>Clove</p>
                    </div>
                  </div>
                  <div
                    className={Red_wine ? "setRed_wine" : "firstColor5"}
                    onClick={() => toggleFlavor(Red_wine, SetRed_wine)}
                  >
                    <div
                      className="Elfaves"
                      onClick={() => handleClick("Red wine")}
                    >
                      <IoIosWine size={27} fill="#64172b" />
                      <p>Red wine</p>
                    </div>
                  </div>
                </span>
              </div>
              <div className="BtnBext" onClick={HandleNext}>
                <button className="NexPageBtn">Дальше</button>
              </div>
            </section>
          </div>
          <Footer />
        </section>
      )}
    </section>
  );
}
