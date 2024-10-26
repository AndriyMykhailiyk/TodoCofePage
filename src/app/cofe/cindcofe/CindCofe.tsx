"use client";
import { useState, useEffect } from "react";
import Flavors from "../flavors/flavors";
import Footer from "../../MainComponent/footer/Footer";
import "../Cofe.css";
import "./cofe.css";
import Link from "next/link";
import { FaPlus } from "react-icons/fa6";
import { IoIosArrowRoundBack } from "react-icons/io";
import Header from "../../MainComponent/HeaderComponents/header/header";

import { useLiked } from "../../store/cindstore";
export default function CindCofe() {
  const [cofePafe, setCofePage] = useState(false);
  const usePopularFn = useLiked((state) => state.usePopularFn);
  const setHowYouLikedCofe = useLiked((state) => state.setHowYouLikedCofe);
  const [Popular, SetPopular] = useState(
    localStorage.getItem("PopularItem") === "false"
  );
  const [New, SetNew] = useState(localStorage.getItem("NewItem") === "false");
  const [Trend, SetTrend] = useState(
    localStorage.getItem("TrendItem") === "false"
  );
  const [Liked, SetCofein] = useState(
    localStorage.getItem("LikedItem") === "false"
  );

  const [Hints, SetHints] = useState(false);

  useEffect(() => {
    const PopularItem = localStorage.getItem("PopularItem") === "true";
    const NewItem = localStorage.getItem("NewItem") === "true";
    const TrendItem = localStorage.getItem("TrendItem") === "true";
    const LikedItem = localStorage.getItem("LikedItem") === "true";

    SetPopular(PopularItem);
    SetNew(NewItem);
    SetTrend(TrendItem);
    SetCofein(LikedItem);
    if (PopularItem) {
      usePopularFn("Популярна кава");
    } else if (NewItem) {
      usePopularFn("Новинка");
    } else if (TrendItem) {
      usePopularFn("Втренді");
    } else if (LikedItem) {
      usePopularFn("Мені таке подобається");
    }
  }, [usePopularFn]);

  useEffect(() => {
    localStorage.setItem("PopularItem", JSON.stringify(Popular));
    localStorage.setItem("NewItem", JSON.stringify(New));
    localStorage.setItem("TrendItem", JSON.stringify(Trend));
    localStorage.setItem("LikedItem", JSON.stringify(Liked));
  }, [Popular, New, Trend, Liked]);

  const HandleHints = () => {
    SetHints(!Hints);
  };

  const PopularItem = () => {
    SetPopular(true);
    SetNew(false);
    SetTrend(false);
    SetCofein(false);
    usePopularFn("Популярна кава");
    setHowYouLikedCofe("Мені подобається те що популярне");
  };

  const SetNewItem = () => {
    SetPopular(false);
    SetNew(true);
    SetTrend(false);
    SetCofein(false);
    usePopularFn("Новинка");
    setHowYouLikedCofe("Мені подобається нова кава");
  };

  const HandleTrand = () => {
    SetPopular(false);
    SetNew(false);
    SetTrend(true);
    SetCofein(false);
    usePopularFn("Втренді");
    setHowYouLikedCofe("Мені подобається те що в тренді");
  };

  const HandleCofein = () => {
    SetPopular(false);
    SetNew(false);
    SetTrend(false);
    SetCofein(true);
    usePopularFn("Мені таке подобається");
    setHowYouLikedCofe("Мені привабливість");
  };

  const HandleNextMenu = () => {
    setCofePage(!false);
  };

  return (
    <>
      <section className="wrapper">
        {cofePafe ? (
          <Flavors />
        ) : (
          <section className="FullWrapper">
            <Header />
            <div className="line88"></div>
            <div className="wrapper-section">
              <div className="backgroundColorSection">
                <div className="BackBtn">
                  <span className="wtapperBack" onClick={HandleNextMenu}>
                    <IoIosArrowRoundBack width={200} height={10} />
                    <p>Назад</p>
                  </span>
                </div>
                <div className="wroteLine"></div>
                <div className="Onofone of three">
                  <span className="el-one">3 / 3</span>
                </div>
                <div className="ROASTTYPE">
                  <h2 className="ROASTTYPEHeader">
                    ЯКА ВИ ЛЮДИНА, ЩО ПОПИВАЄ КАВУ?
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
                    У нас є цілий світ кави (буквально), який ви можете
                    дослідити: від бестселерів до ароматизованої кави та чогось
                    іншого щомісяця чи сезону. Ніяких зобов’язань, просто чудова
                    чашка.{" "}
                  </p>
                ) : null}
              </div>
              <section className="SelectCofe">
                <div className="SelectCofeDown2">
                  <div className="selectWrapper">
                    <p className="selectWrapperText">Вибрати одне:</p>
                  </div>
                </div>
                <div className="menuSelCoffe2">
                  <div
                    className={Popular ? "ElMenuCofeSelect" : "ElMenuCofe"}
                    onClick={PopularItem}
                  >
                    <div className="wrapperElMenuCofe">
                      <div className="TextCofe">
                        Мені подобається те що популярне
                      </div>
                    </div>
                  </div>
                  <div
                    className={New ? "ElMenuCofeSelect" : "ElMenuCofe"}
                    onClick={SetNewItem}
                  >
                    <div className="wrapperElMenuCofe">
                      <div className="TextCofe">
                        <p>Мені подобається спробувати нові речі</p>
                      </div>
                    </div>
                  </div>{" "}
                  <div
                    className={Trend ? "ElMenuCofeSelect" : "ElMenuCofe"}
                    onClick={HandleTrand}
                  >
                    <div className="wrapperElMenuCofe">
                      <div className="TextCofe">
                        <p>Мені подобається те, що в тренді</p>
                      </div>
                    </div>
                  </div>
                  <div
                    className={Liked ? "ElMenuCofeSelect" : "ElMenuCofe"}
                    onClick={HandleCofein}
                  >
                    <div className="wrapperElMenuCofe">
                      <div className="TextCofe">
                        <p>Я люблю трохи приблажливості</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="BtnBext">
                  <Link href="/ordercofe" className="NexPageBtn">
                    Сформувати замовлення
                  </Link>
                </div>
              </section>
            </div>
            <Footer />
          </section>
        )}
      </section>
    </>
  );
}
