"use client";
import { useEffect, useState } from "react";
import { useTypeCofe, useTypeCofeTwo } from "../store/store";
import { useLiked, useSetName } from "../store/cindstore";
import "./order.css";
import "../cofe/[id]/CofePage.css";

import Image from "next/image";
import MeCofePhoto from "./mecofephoto/Cofe.png";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import Footer from "../MainComponent/footer/Footer";
import { IoBasketOutline } from "react-icons/io5";
import Modal from "./meorder/Modal";
import { FaArrowRightLong } from "react-icons/fa6";
import Rating from "@mui/material/Rating";
import { Box, Snackbar, Alert } from "@mui/material";
import Diskount from "./discount/Diskount"; // Імпортуємо компонент Diskount
import { GiCherry } from "react-icons/gi";
import { BsFlower1 } from "react-icons/bs";
import { PiCoffeeBean } from "react-icons/pi";
import { SiCoffeescript } from "react-icons/si";
import { FaRaspberryPi } from "react-icons/fa6";
import Elcofe from "../layout/ElCofeBlock/ElcofeBlock";
import Insta from "../cofe/[id]/SvgIcon/pngwing.com (4).png";
import FaceBook from "../cofe/[id]/SvgIcon/pngwing.com (5).png";

export default function OrderCofe() {
  const DarkChoko = useTypeCofe((state) => state.DarkChoko);
  const Cofeinnn = useTypeCofe((state) => state.Cofeinnn);
  const TypeCofeTwo = useTypeCofeTwo((state) => state.TypeCofeTwo);
  const HowyouLikedCofe = useLiked((state) => state.HowyouLikedCofe);
  const [descruption, setDescription] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDiskount, setShowDiskount] = useState(false); // Додаємо стан для керування відображенням Diskount
  const { MeCofeName, useSetCofePage } = useSetName();
  const [value, setValue] = useState<number | null>(1);
  const [isAdded, setIsAdded] = useState(false); // Стан для відображення кнопки
  const [snackbarOpen, setSnackbarOpen] = useState(false); // Стан для відображення Snackbar
  const [snackbarMessage, setSnackbarMessage] = useState(""); // Повідомлення для Snackbar
  const [price, setPrice] = useState(19.95); // Стан для ціни
  const [badprice, SetBedPrice] = useState(false);
  const [promoSnackbarOpen, setPromoSnackbarOpen] = useState(false); // Стан для відображення Snackbar про промокод
  const [promoSnackbarMessage, setPromoSnackbarMessage] = useState(""); // Повідомлення для Snackbar про промокод
  const setCofePage = useSetCofePage;

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
    if (typeof window !== "undefined") {
      localStorage.setItem("CoffeeOrder", JSON.stringify(coffeeOrder));
    }
  }, [DarkChoko, Cofeinnn, TypeCofeTwo, HowyouLikedCofe]);

  useEffect(() => {
    const savedOrder = localStorage.getItem("CoffeeOrder");
    const savedName = localStorage.getItem("MeCofeName");

    if (!savedName) {
      setShowModal(true);
    } else {
      setCofePage(savedName); // Використовуємо збережену функцію
    }

    if (savedOrder) {
      try {
        const { DarkChoko, Cofeinnn, TypeCofeTwo, HowyouLikedCofe } =
          JSON.parse(savedOrder);

        useTypeCofe.setState({ DarkChoko, Cofeinnn });
        useTypeCofeTwo.setState({ TypeCofeTwo });
        useLiked.setState({ HowyouLikedCofe });
      } catch (error) {
        console.error("Помилка парсингу CoffeeOrder:", error);
      }
    }
  }, [setCofePage]);

  const handleModalSubmit = (name: string) => {
    setCofePage(name);
    if (typeof window !== "undefined") {
      localStorage.setItem("MeCofeName", name);
    }
    setShowModal(false);
  };

  const handleDiskountSubmit = (code: string) => {
    if (code === "Промокод") {
      setPrice(price * 0.85); // Знижка 15%
      SetBedPrice(false); // Скидаємо помилку
      setPromoSnackbarMessage("Промокод успішно застосовано!");
      setPromoSnackbarOpen(true);
      setShowDiskount(false); // Закриваємо меню після введення правильного промокоду
    } else {
      SetBedPrice(true); // Показуємо помилку
      setPromoSnackbarMessage("Неправильний промокод!");
      setPromoSnackbarOpen(true);
      return; // Зупиняємо виконання, якщо промокод невірний
    }
  };

  const handleAddToCart = () => {
    const coffeeOrder = {
      DarkChoko,
      Cofeinnn,
      TypeCofeTwo,
      HowyouLikedCofe,
    };

    const existingOrders = JSON.parse(
      localStorage.getItem("CoffeeOrders") || "[]"
    );

    if (
      existingOrders.some(
        (order: boolean) =>
          JSON.stringify(order) === JSON.stringify(coffeeOrder)
      )
    ) {
      // Видалити об'єкт з корзини
      const updatedOrders = existingOrders.filter(
        (order: boolean) =>
          JSON.stringify(order) !== JSON.stringify(coffeeOrder)
      );
      localStorage.setItem("CoffeeOrders", JSON.stringify(updatedOrders));
      setIsAdded(false);
      setSnackbarMessage("Товар прибрано");
    } else {
      // Додати об'єкт до корзини
      existingOrders.push(coffeeOrder);
      localStorage.setItem("CoffeeOrders", JSON.stringify(existingOrders));
      setIsAdded(true);
      setSnackbarMessage("Товар додано");
    }
    setSnackbarOpen(true);
  };

  useEffect(() => {
    const existingOrders = JSON.parse(
      localStorage.getItem("CoffeeOrders") || "[]"
    );
    const coffeeOrder = {
      DarkChoko,
      Cofeinnn,
      TypeCofeTwo,
      HowyouLikedCofe,
    };

    if (
      existingOrders.some(
        (order: boolean) =>
          JSON.stringify(order) === JSON.stringify(coffeeOrder)
      )
    ) {
      setIsAdded(true); // Об'єкт вже є в списку
    }
  }, [DarkChoko, Cofeinnn, TypeCofeTwo, HowyouLikedCofe]);

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  const handleClosePromoSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setPromoSnackbarOpen(false);
  };

  return (
    <>
      {showModal && (
        <Modal
          onClose={() => setShowModal(false)}
          onSubmit={handleModalSubmit}
        />
      )}

      {showDiskount && (
        <Diskount
          badprice={badprice}
          SetBedPrice={SetBedPrice}
          onClose={() => setShowDiskount(false)}
          onSubmit={handleDiskountSubmit}
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
                  <h1 className="headerTextMeCofe">
                    {MeCofeName || "Моя супер кава"}
                  </h1>
                </span>
                <span className="wrapper-Prisereting">
                  <div className="prise">
                    <p className="priseTag">${price.toFixed(2)}</p>
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
                    <button className="NexPageBtn" onClick={handleAddToCart}>
                      {isAdded ? "Додано" : "Додати до списку"}
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
              <span className="Diskount" onClick={() => setShowDiskount(true)}>
                CofeTop
              </span>
            </h1>
          </div>
        </section>

        <section className="WraperAboutSection">
          <section className="wrapperMain">
            <div className="TasteSection">
              <div className="HeaderText">
                <h3 className="HeaderTextTaske">Смакові ноти</h3>
              </div>
              <div className="wrapperIcons">
                <span className="wrapperBsFlower1">
                  <BsFlower1 size={26} />
                  <p className="Text90">Flower</p>
                </span>
                <span className="wrapperBsFlower1">
                  <GiCherry size={26} />
                  <p className="Text90">Cherry</p>
                </span>
                <span className="wrapperBsFlower1">
                  <FaRaspberryPi size={26} />
                  <p className="Text90">Raspberry</p>
                </span>
              </div>
            </div>
            <div className="TasteSection">
              <div className="HeaderText">
                <h3 className="HeaderTextTaske">Обсмаження</h3>
              </div>
              <div className="wrapperIcons">
                <span className="wrapperBsFlower12">
                  <PiCoffeeBean size={26} fill="#c7b299" />
                  <PiCoffeeBean size={26} fill="#9b8060" />
                  <PiCoffeeBean size={26} fill="#836849" />
                  <PiCoffeeBean size={26} fill="#77562f" />
                </span>
                <div className="TextDesckCofe">
                  <p className="PowerFullText">Потужна</p>
                </div>
              </div>
            </div>
            <div className="TasteSection">
              <div className="wrapperIcons">
                <div className="TextDesckCofe3">
                  <h1 className="OneHundret">100%</h1>
                  <p className="PowerFullText3">aрабіка</p>
                </div>
                <span className="wrapperBsFlower12">
                  <SiCoffeescript size={35} fill="#482809" />
                </span>
              </div>
            </div>
            <div className="TasteSection">
              <div className="wrapperIcons">
                <div className="TextDesckCofe">
                  <h4 className="OneHundret3">Походження</h4>
                  <p className="PowerFullText3">Латинська Америка</p>
                </div>
              </div>
            </div>
            <div className="TasteSection">
              <div className="wrapperIcons">
                <div className="TextDesckCofe">
                  <h4 className="OneHundret3">Виробника</h4>
                  <p className="PowerFullText3">Італія</p>
                </div>
              </div>
            </div>
          </section>
        </section>

        <section className="BuyBlock">
          <div className="PromoBuy">
            <p className="Order">
              Замовити можете через кнопку &quot;купити&quot; або за номером
              телефону 096 777 33 55 вайбер, телеграм.{" "}
            </p>
            <a className="AddToUs">
              Приєднуйтесь до нас у соціальних мережах: {" "}
            </a>
            <div className="IconSrapper">
              <span className="Span">
                <a href="https://www.instagram.com" target="_blank">
                  <Image
                    className="Instagram"
                    alt="Ins"
                    src={Insta}
                    width={50}
                    height={50}
                  />
                </a>
              </span>
              <span className="Span">
                <a href="https://www.facebook.com" target="_blank">
                  <Image
                    className="Instagram"
                    alt="Ins"
                    src={FaceBook}
                    width={47}
                    height={47}
                  />
                </a>
              </span>
            </div>
          </div>
        </section>
        <Elcofe />
      </div>

      <div className="wrapperFootter">
        <Footer />
      </div>

      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>

      <Snackbar
        open={promoSnackbarOpen}
        autoHideDuration={3000}
        onClose={handleClosePromoSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          onClose={handleClosePromoSnackbar}
          severity={badprice ? "error" : "success"}
          sx={{ width: "200%" }}
        >
          {promoSnackbarMessage}
        </Alert>
      </Snackbar>
    </>
  );
}
