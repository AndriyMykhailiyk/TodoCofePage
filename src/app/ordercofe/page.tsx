"use client";
import { useEffect, useState } from "react";
import { useTypeCofe, useTypeCofeTwo } from "../store/store";
import { useLiked, useSetName, useStore } from "../store/cindstore";
import "./order.css";
import Image from "next/image";
import MeCofePhoto from "./mecofephoto/Cofe.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import Footer from "../MainComponent/footer/Footer";
import { IoBasketOutline } from "react-icons/io5";
import Modal from "./meorder/Modal";
import { FaArrowRightLong } from "react-icons/fa6";
import Rating from "@mui/material/Rating";
import { Box } from "@mui/material";
export default function OrderCofe() {
  const DarkChoko = useTypeCofe((state) => state.DarkChoko);
  const Cofeinnn = useTypeCofe((state) => state.Cofeinnn);
  const TypeCofeTwo = useTypeCofeTwo((state) => state.TypeCofeTwo);
  const HowyouLikedCofe = useLiked((state) => state.HowyouLikedCofe);
  const [descruption, setDescription] = useState(false);
  const toggleSendData = useStore((state) => state.toggleSendData);
  const [showModal, setShowModal] = useState(false);
  const { MeCofeName, useSetCofePage } = useSetName();
  const [value, setValue] = useState<number | null>(1);

  const HandleDescription = () => {
    setDescription(!descruption);
  };

  // Збереження даних у localStorage
  useEffect(() => {
    const coffeeOrder = {
      DarkChoko,
      Cofeinnn,
      TypeCofeTwo,
      HowyouLikedCofe,
    };

    localStorage.setItem("CoffeeOrder", JSON.stringify(coffeeOrder));
  }, [DarkChoko, Cofeinnn, TypeCofeTwo, HowyouLikedCofe]);

  // Відновлення даних з localStorage
  useEffect(() => {
    const savedOrder = localStorage.getItem("CoffeeOrder");
    const savedName = localStorage.getItem("MeCofeName");
    if (savedName) {
      useSetCofePage(savedName);
    }
    if (savedOrder) {
      const { DarkChoko, Cofeinnn, TypeCofeTwo, HowyouLikedCofe } =
        JSON.parse(savedOrder);

      useTypeCofe.setState({ DarkChoko, Cofeinnn });
      useTypeCofeTwo.setState({ TypeCofeTwo });
      useLiked.setState({ HowyouLikedCofe });
    }

    if (!savedName) {
      setShowModal(true);
    }
  }, []);

  const handleModalSubmit = (name: string) => {
    useSetCofePage(name);
    localStorage.setItem("MeCofeName", name);
    setShowModal(false);
  };

  return (
    <>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          onSubmit={handleModalSubmit}
        />
      )}

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
                  <h1 className="headerTextMeCofe">{MeCofeName || " "}</h1>
                </span>
                <span className="wrapper-Prisereting">
                  <div className="prise">
                    <p className="priseTag">$19.95</p>
                  </div>

                  <div className="rating">
                    <Box sx={{ "& > legend": { mt: 1 }, display: "flex" }}>
                      <Rating
                        name="simple-controlled"
                        value={value}
                        onChange={(event, newValue) => {
                          setValue(newValue);
                        }}
                        sx={{ fontSize: "1.3rem" }} // або будь-який інший розмір
                      />
                    </Box>{" "}
                  </div>
                </span>
                <button
                  className="NexPageBtn2"
                  onClick={() => setShowModal(true)}
                >
                  Змінити назву кави
                </button>
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
                    <FaArrowRightLong className="IoIosArrowRoundForward" />
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

          <div className="wrapperdiscount">
            <h1 className="discountTextCofe">
              Отримай знижку в 15% з промокодом{" "}
              <span className="Diskount">CofeTop</span>
            </h1>
          </div>
        </section>
      </div>
      <div className="wrapperFootter">
        <Footer />
      </div>
    </>
  );
}
