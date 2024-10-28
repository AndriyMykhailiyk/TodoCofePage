"use client";
import { useState, useEffect } from "react";
import { Loading } from "../layout/loading/loading";
import "./Cofe.css";
import { FaPlus } from "react-icons/fa6";
import { PiCoffeeBean } from "react-icons/pi";
import { TbCoffeeOff } from "react-icons/tb";
import { BsFillLightningChargeFill } from "react-icons/bs";

import { useTypeCofe } from "../store/store";
import Flavors from "./flavors/flavors"; // Імпорт без lazy
import Footer from "../MainComponent/footer/Footer"; // Імпорт без lazy
import Header from "../MainComponent/HeaderComponents/header/header"; // Імпорт без lazy

export default function Cofe() {
  const [flavors, SetFlavors] = useState(false);
  const [oneOfThree] = useState(1);
  const increaseCount = useTypeCofe((state) => state.increaseCount); // отримання функції
  const AddCofein = useTypeCofe((state) => state.AddCofein);
  const [Dark, SetsDark] = useState(
    localStorage.getItem("darkRoast") === "true"
  );
  const [Medium, SetMedium] = useState(
    localStorage.getItem("mediumRoast") === "true"
  );
  const [Light, SetLight] = useState(
    localStorage.getItem("lightRoast") === "true"
  );
  const [Cofein, SetCofein] = useState(
    localStorage.getItem("cofein") === "true"
  );
  const [NoCofein, SetNoCofein] = useState(
    localStorage.getItem("noCofein") === "true"
  );
  const [Hints, SetHints] = useState(false);

  useEffect(() => {
    const darkRoast = localStorage.getItem("darkRoast") === "true";
    const mediumRoast = localStorage.getItem("mediumRoast") === "true";
    const lightRoast = localStorage.getItem("lightRoast") === "true";
    const cofein = localStorage.getItem("cofein") === "true";
    const noCofein = localStorage.getItem("noCofein") === "true";

    SetsDark(darkRoast);
    SetMedium(mediumRoast);
    SetLight(lightRoast);
    SetCofein(cofein);
    SetNoCofein(noCofein);
    if (darkRoast) {
      increaseCount("Dark");
    } else if (mediumRoast) {
      increaseCount("Medium");
    } else if (lightRoast) {
      increaseCount("Light");
    }
    if (cofein) {
      AddCofein("З кофеїном");
    } else if (noCofein) {
      AddCofein("Без кофеїном");
    }
  }, [increaseCount, AddCofein]);

  useEffect(() => {
    // Зберігаємо дані у локал стридж при зміні стану
    localStorage.setItem("darkRoast", JSON.stringify(Dark));
    localStorage.setItem("mediumRoast", JSON.stringify(Medium));
    localStorage.setItem("lightRoast", JSON.stringify(Light));
    localStorage.setItem("cofein", JSON.stringify(Cofein));
    localStorage.setItem("noCofein", JSON.stringify(NoCofein));
  }, [Dark, Medium, Light, Cofein, NoCofein]);

  const HandleNextMenu = () => {
    SetFlavors(true);
  };

  const HandleHints = () => {
    SetHints(!Hints);
  };

  const NoCofeinfHandle = () => {
    SetNoCofein(true);
    SetCofein(false);
    AddCofein("Без кофеїном");
  };

  const HandleCofein = () => {
    SetCofein(true);
    SetNoCofein(false);
    AddCofein("З кофеїном");
  };

  const HandleDark = () => {
    SetsDark(true);
    SetMedium(false);
    SetLight(false);
    increaseCount("Dark"); // Передаємо значення 'Dark'
  };

  const HandleMedium = () => {
    SetsDark(false);
    SetMedium(true);
    SetLight(false);
    increaseCount("Medium"); // Передаємо значення 'Medium'
  };

  const HandleLight = () => {
    SetsDark(false);
    SetMedium(false);
    SetLight(true);
    increaseCount("Light"); // Передаємо значення 'Light'
  };

  return (
    <section className="wrapper">
      {flavors ? (
        <Flavors />
      ) : (
        <section className="FullWrapper">
          <Header />
          <div className="line"></div>
          <div className="wrapper-section">
            <div className="backgroundColorSection">
              <div className="wroteLine"></div>
              <div className="Onofone of three">
                <span className="el-one">{oneOfThree} / 3</span>
              </div>
              <div className="ROASTTYPE">
                <h2 className="ROASTTYPEHeader">ЯКИЙ ВАШ ТИП СМАЖЕННЯ?</h2>
              </div>
              <div className="Hint">
                <div className="wrapperHints" onClick={HandleHints}>
                  <p className="HintText">ОТРИМАТИ ПІДСКАЗКУ</p>
                  <FaPlus className="reactI" size={20} />
                </div>
              </div>
              {Hints ? (
                <p className="HintsTexts">
                  Наше темне смажене має яскраві підсмажені нотки. Середній
                  стиль плавний і збалансований. Легке обсмаження виходить
                  яскравим і ароматним. Це точне смаження, яке виявляє найкращі
                  якості будь-яких бобів.
                </p>
              ) : null}
            </div>
            <section className="SelectCofe">
              <div className="SelectCofeDown2">
                <div className="selectWrapper">
                  <p className="selectWrapperText">Вибрати тип кави:</p>
                </div>
                <div className="menuSelCoffe">
                  <div
                    className={Dark ? "ElMenuCofeSelect" : "ElMenuCofe"}
                    onClick={HandleDark}
                  >
                    <div className="wrapperElMenuCofe">
                      <div className="svgPhotoCofe">
                        <PiCoffeeBean
                          size={30}
                          className="PiCoffeeBean"
                          fill="#78542e"
                        />
                      </div>
                      <div className="TextCofe">Dark</div>
                    </div>
                  </div>
                  <div
                    className={Medium ? "ElMenuCofeSelect" : "ElMenuCofe"}
                    onClick={HandleMedium}
                  >
                    <div className="wrapperElMenuCofe">
                      <div className="svgPhotoCofe">
                        <PiCoffeeBean
                          size={30}
                          className="PiCoffeeBean"
                          fill="#ba9863"
                        />
                      </div>
                      <div className="TextCofe">
                        <p>Medium</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={Light ? "ElMenuCofeSelect" : "ElMenuCofe"}
                    onClick={HandleLight}
                  >
                    <div className="wrapperElMenuCofe">
                      <div className="svgPhotoCofe">
                        <PiCoffeeBean
                          size={30}
                          className="PiCoffeeBean"
                          fill="#eed794"
                        />
                      </div>
                      <div className="TextCofe">
                        <p>Light</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="SelectCofeDown">
                <div className="selectWrapper">
                  <p className="selectWrapperText">Бажаєте каву з кофеїном ?</p>
                </div>
                <div className="menuSelCoffe">
                  <div
                    className={Cofein ? "ElMenuCofeSelect" : "ElMenuCofe"}
                    onClick={HandleCofein}
                  >
                    <div className="wrapperElMenuCofe">
                      <div className="svgPhotoCofe">
                        <BsFillLightningChargeFill
                          size={30}
                          className="PiCoffeeBean"
                        />
                      </div>
                      <div className="TextCofe">Так</div>
                    </div>
                  </div>
                  <div
                    className={NoCofein ? "ElMenuCofeSelect" : "ElMenuCofe"}
                    onClick={NoCofeinfHandle}
                  >
                    <div className="wrapperElMenuCofe">
                      <div className="svgPhotoCofe">
                        <TbCoffeeOff size={30} className="PiCoffeeBean" />
                      </div>
                      <div className="TextCofe">Ні</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="BtnBext" onClick={HandleNextMenu}>
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
