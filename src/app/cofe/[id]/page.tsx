"use client";

import React, { useState, useEffect } from "react";
import "../../ordercofe/order.css";
import "./CofePage.css";
import { useParams } from "next/navigation";
import { CofeList } from "../../(api)/CofeApi";
import Image from "next/image";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { IoBasketOutline } from "react-icons/io5";
import Diskount from "@/app/ordercofe/discount/Diskount";
import { FaRaspberryPi } from "react-icons/fa6";
import { GiCherry } from "react-icons/gi";
import { BsFlower1 } from "react-icons/bs";
import { PiCoffeeBean } from "react-icons/pi";
import { SiCoffeescript } from "react-icons/si";
import { IoMdCheckmark } from "react-icons/io";
import Elcofe from "../../../app/layout/ElCofeBlock/ElcofeBlock";
import { Box, Snackbar, Alert, Rating } from "@mui/material";
import useCountCofe from "@/app/store/countCofe";
import Insta from "./SvgIcon/pngwing.com (4).png";
import FaceBook from "./SvgIcon/pngwing.com (5).png";
interface CoffeeOrder {
  id: number;
  name: string;
  price: number;
  img: string;
  type: string;
  paste: string;
}

const CoffeeDetail = () => {
  const params = useParams();
  const id = params.id;
  const coffee = CofeList.find((item) => item.id === Number(id));
  const [value, setValue] = useState<number | null>(1);
  const [showDiskount, setShowDiskount] = useState(false);
  const [price, setPrice] = useState(coffee?.price || 0);
  const [badprice, SetBedPrice] = useState(false);
  const [promoSnackbarMessage, setPromoSnackbarMessage] = useState("");
  const [promoSnackbarOpen, setPromoSnackbarOpen] = useState(false);
  const [isAdded, SetisAdded] = useState(false);
  const [coffeeOrders, setCoffeeOrders] = useState<CoffeeOrder[]>([]);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const setAddOrderOrder = useCountCofe((state) => state.setAddOrderOrder);
  const countCofe = useCountCofe((state) => state.CountCofe);

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  useEffect(() => {
    const savedCountCofe = localStorage.getItem("countCofe");
    if (savedCountCofe) {
      setAddOrderOrder(parseInt(savedCountCofe, 10));
    }
  }, [setAddOrderOrder]);

  useEffect(() => {
    localStorage.setItem("countCofe", countCofe.toString());
  }, [countCofe]);

  useEffect(() => {
    const savedCoffeeOrders = localStorage.getItem("CoffeeOrders");
    if (savedCoffeeOrders) {
      setCoffeeOrders(JSON.parse(savedCoffeeOrders));
    }
  }, []);

  useEffect(() => {
    const isCoffeeAdded = coffeeOrders.some((order) => order.id === Number(id));
    SetisAdded(isCoffeeAdded);
  }, [coffeeOrders, id]);

  useEffect(() => {
    setAddOrderOrder(coffeeOrders.length);
  }, [coffeeOrders, setAddOrderOrder]);

  if (!coffee) {
    return <div>Немає</div>;
  }

  const HandleKlickBtn = () => {
    if (!coffee) return;

    const coffeeOrder: CoffeeOrder = {
      id: coffee.id,
      name: coffee.name,
      price: coffee.price,
      img: typeof coffee.img === "string" ? coffee.img : coffee.img.src,
      type: coffee.type,
      paste: coffee.paste,
    };

    if (isAdded) {
      const updatedOrders = coffeeOrders.filter(
        (order) => order.id !== coffeeOrder.id
      );
      setCoffeeOrders(updatedOrders);
      localStorage.setItem("CoffeeOrders", JSON.stringify(updatedOrders));
      SetisAdded(false);
      setSnackbarMessage("Товар видалено з корзини");
    } else {
      const updatedOrders = [...coffeeOrders, coffeeOrder];
      setCoffeeOrders(updatedOrders);
      localStorage.setItem("CoffeeOrders", JSON.stringify(updatedOrders));
      SetisAdded(true);
      setSnackbarMessage("Товар додано до корзини");
    }

    setSnackbarOpen(true);
  };

  const handleDiskountSubmit = (code: string) => {
    if (code === "Промокод") {
      setPrice(price * 0.85);
      SetBedPrice(false);
      setPromoSnackbarMessage("Промокод успішно застосовано!");
      setPromoSnackbarOpen(true);
      setShowDiskount(false);
    } else {
      SetBedPrice(true);
      setPromoSnackbarMessage("Неправильний промокод!");
      setPromoSnackbarOpen(true);
      return;
    }
  };

  return (
    <>
      {showDiskount && (
        <Diskount
          badprice={badprice}
          SetBedPrice={SetBedPrice}
          onClose={() => setShowDiskount(false)}
          onSubmit={handleDiskountSubmit}
        />
      )}
      <header className="HeaderComponent2">
        <div className="wrapperHeaderCoffeOreder">
          <div className="BackBtn2">
            <span className="wtapperBack">
              <IoIosArrowRoundBack size={25} />
              <Link href="/">Назад</Link>
            </span>
          </div>
          <div className="wrapperHeaderText">
            <Link href="/" className="HeaderText23">
              LATTE CAFE
            </Link>
          </div>
          <Link href="/meaccount">
            <IoBasketOutline color="#d27487" size={35} />
            <span className="basketCount">{countCofe}</span>
          </Link>
        </div>
      </header>
      <section className="SectionCofe">
        <div className="coffee-detail">
          <div className="WrapperPhoto">
            <Image
              src={coffee.img}
              alt={coffee.name}
              width={560}
              height={720}
            />
          </div>
          <div className="WrapperTextAboutCofe">
            <h1 className="coffee_name">{coffee.name}</h1>
            <div className="rating2">
              <Box sx={{ "& > legend": { mt: 1 }, display: "flex" }}>
                <Rating
                  name="simple-controlled"
                  value={value}
                  onChange={(event, newValue) => {
                    setValue(newValue);
                  }}
                  sx={{ fontSize: "1.3rem" }}
                />
              </Box>
            </div>
            <hr />
            <div className="WrapperTaste">
              <h3 className="PriceText2">Тип: </h3>
              <p className="PriceValue">{coffee.type}</p>
            </div>
            <div className="WrapperPrice">
              <h3 className="PriceText">Ціна: </h3>
              <p className="PriceValue">${price.toFixed(2)}</p>
            </div>
            <hr />
            <div className="WrapperTaste">
              <h3 className="PriceText2">Смаки: </h3>
              <p className="PriceValue">{coffee.paste}</p>
            </div>

            <hr />
            <div className="wrapperGet">
              <IoMdCheckmark size={26} fill="#0bc040" />
              <p className="wrapperGetText">В наявності </p>
              <div className="CofeText">
                <p className="wrapperGetText3">Код товару: 2442055 </p>
              </div>
            </div>

            <section className="BtnSec9090">
              <div className="wrapperBtn">
                <button className="NexPageBtn" onClick={HandleKlickBtn}>
                  {isAdded ? "Прибрати з корзини" : "Додати до списку"}
                </button>
              </div>
            </section>
          </div>
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
      <hr />

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
            Замовити можете через кнопку "купити" або за номером телефону 096
            777 33 55 вайбер, телеграм.{" "}
          </p>
          <a className="AddToUs">Приєднуйтесь до нас у соціальних мережах:  </a>
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
      <Snackbar
        open={promoSnackbarOpen}
        autoHideDuration={6000}
        onClose={() => setPromoSnackbarOpen(false)}
        message={promoSnackbarMessage}
      />
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
    </>
  );
};

export default CoffeeDetail;
