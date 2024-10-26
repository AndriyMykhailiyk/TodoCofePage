"use client";

import { useEffect, useState } from "react";
import { useTypeCofe, useTypeCofeTwo } from "../store/store";
import { useLiked, useStore } from "../store/cindstore";
import "./order.css";
import Image from "next/image";
import MeCofePhoto from "./mecofephoto/Cofe.png";
import { IoIosArrowRoundForward, IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import Footer from "../MainComponent/footer/Footer";
import { IoIosStarOutline, IoIosStarHalf } from "react-icons/io";
import { IoBasketOutline } from "react-icons/io5";

export default function OrderCofe() {
  const DarkChoko = useTypeCofe((state) => state.DarkChoko);
  const Cofeinnn = useTypeCofe((state) => state.Cofeinnn);
  const TypeCofeTwo = useTypeCofeTwo((state) => state.TypeCofeTwo);
  const HowyouLikedCofe = useLiked((state) => state.HowyouLikedCofe);
  const [descruption, setDescription] = useState(false);
  const toggleSendData = useStore((state) => state.toggleSendData);

  const HandleDescription = () => {
    setDescription(!descruption);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      const newCoffeeOrder = {
        DarkChoko,
        Cofeinnn,
        TypeCofeTwo,
        HowyouLikedCofe,
      };

      const updatedOrders = [newCoffeeOrder];
      localStorage.setItem("CoffeeOrders", JSON.stringify(updatedOrders));
    }
  }, [DarkChoko, Cofeinnn, TypeCofeTwo, HowyouLikedCofe]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const SavedDarkChoko = localStorage.getItem("DarkChoko");
      const SavedCofeinnn = localStorage.getItem("Cofeinnn");
      const SavedTypeCofeTwo = localStorage.getItem("TypeCofeTwo");
      const SavedHowyouLikedCofe = localStorage.getItem("HowyouLikedCofe");

      if (SavedDarkChoko) useTypeCofe.setState({ DarkChoko: SavedDarkChoko });
      if (SavedCofeinnn) useTypeCofe.setState({ Cofeinnn: SavedCofeinnn });
      if (SavedTypeCofeTwo)
        useTypeCofeTwo.setState({ TypeCofeTwo: JSON.parse(SavedTypeCofeTwo) });
      if (SavedHowyouLikedCofe)
        useLiked.setState({ HowyouLikedCofe: SavedHowyouLikedCofe });
    }
  }, []);

  return (
    <>
      <header className="HeaderComponent">
        <div className="wrapperHeaderCoffeOreder">
          <div className="BackBtn2">
            <span className="wtapperBack">
              <IoIosArrowRoundBack size={25} />
              <Link href="/cofe">Назад</Link>
            </span>
          </div>
          <div className="wrapperHeaderText">
            <Link href="/" className="HeaderText23">
              LATTE CAFE
            </Link>
          </div>
          <Link href="/meaccount">
            <IoBasketOutline color="#d27487" size={35} />
          </Link>
        </div>
      </header>
      <div className="wrapperMeOrder">
        <div className="line99"></div>
        <section className="wrapperOrderCofe">
          <header className="Header">
            <div className="wrapperheader">
              <h1 className="HeaderTextCofe">ВАША КАВА №1 ЦЕ:</h1>
            </div>
          </header>
          <section className="sectionmeCoffe">
            <div className="wrapperMeSection">
              <section className="PhotoSection">
                <div className="wrapperPhotoSection">
                  <Image
                    src={MeCofePhoto.src}
                    width={350}
                    height={400}
                    alt="Picture of the author"
                  />
                </div>
              </section>

              <section className="AboutMeCoffe">
                <span className="WrapperheaderTextMeCofe">
                  <h1 className="headerTextMeCofe">Aged Sumatra</h1>
                </span>
                <span className="wrapper-Prisereting">
                  <div className="prise">
                    <p className="priseTag">$19.95</p>
                  </div>
                  <div className="rating">
                    <IoIosStarOutline fill="#78542e" size={18} />
                    <IoIosStarOutline fill="#78542e" size={18} />
                    <IoIosStarOutline fill="#78542e" size={18} />
                    <IoIosStarOutline fill="#78542e" size={18} />
                    <IoIosStarHalf fill="#78542e" size={18} />
                    <p className="ratingTag">(4.5)</p>
                  </div>
                </span>
                <p className="gradText">{TypeCofeTwo.join(", ")}</p>
                <section className="BtnSec9090">
                  <div className="wrapperBtn">
                    <button
                      className="NexPageBtn"
                      onClick={() => toggleSendData(true)}
                    >
                      Додати в кошик
                    </button>
                  </div>
                </section>
                <div className="descriptionPage">
                  <span className="wtapperBack" onClick={HandleDescription}>
                    <a>Деталі продукту</a>
                    <IoIosArrowRoundForward
                      width={500}
                      height={30}
                      className="IoIosArrowRoundForward"
                    />
                  </span>
                </div>
              </section>
            </div>
            <div className="DetailsSection">
              {descruption ? (
                <section className="WrapperDetailsSection">
                  <h1 className="TextDesk">Моя кава:</h1>
                  <hr />

                  <div className="aboutCofeText">
                    <main className="MainText">
                      <p className="CofeType2">Вид кави:</p>
                      <p className="CofeType">{DarkChoko}</p>
                    </main>
                    <main className="MainText">
                      <p className="CofeType2">Наявність кофеїну:</p>
                      <p className="CofeType">{Cofeinnn}</p>
                    </main>

                    <main className="MainText">
                      <p className="CofeType2">Профільм смаку:</p>
                      <p className="CofeType">{HowyouLikedCofe}</p>
                    </main>

                    <main className="MainText">
                      <p className="CofeType2">Смакові вподобання:</p>
                      <p className="CofeType3">{TypeCofeTwo.join(", ")}</p>
                    </main>
                  </div>
                </section>
              ) : null}
            </div>
          </section>
        </section>
      </div>
      <div className="wrapperFootter">
        <Footer />
      </div>
    </>
  );
}
