"use client";
import { useEffect, useState } from "react";
import { useLiked, useSetName } from "../store/cindstore";
import { useTypeCofe, useTypeCofeTwo } from "../store/store";
import { GoTrash } from "react-icons/go";
import Image from "next/image";
import "./meaccount.css";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Footer from "../MainComponent/footer/Footer";
import "../MainComponent/footer/Footer.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { IoBasketOutline } from "react-icons/io5";
import "../ordercofe/order.css";
import React, { useRef } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import useCountCofe from "../store/countCofe";
interface CoffeeOrder {
  id: number;
  name: string;
  price: number;
  img: string;
  type: string;
  paste: string;
  quantity: number;
}

export default function MeCofeAccount() {
  const DarkChoko = useTypeCofe((state) => state.DarkChoko);
  const Cofeinnn = useTypeCofe((state) => state.Cofeinnn);
  const TypeCofeTwo = useTypeCofeTwo((state) => state.TypeCofeTwo);
  const HowyouLikedCofe = useLiked((state) => state.HowyouLikedCofe);
  const MeCofeName = useSetName((state) => state.MeCofeName);
  const [isButtonVisible, setButtonVisible] = useState(true);
  const [isBlockVisible, setBlockVisible] = useState(true);
  const [coffeeOrders, setCoffeeOrders] = useState<CoffeeOrder[]>([]);
  const [, setSnackbarMessage] = useState("");
  const [, setSnackbarOpen] = useState(false);
  const countCofe = useCountCofe((state) => state.CountCofe);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Встановлюємо фокус на інпуті після рендерингу
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const savedVisibility = localStorage.getItem("isButtonVisible");
    if (savedVisibility !== null) {
      setButtonVisible(JSON.parse(savedVisibility));
    }

    const savedCoffeeOrders = localStorage.getItem("CoffeeOrders");
    if (savedCoffeeOrders) {
      const parsedOrders = JSON.parse(savedCoffeeOrders).map(
        (order: { quantity: number }) => ({
          ...order,
          quantity: order.quantity || 1, // встановлюємо quantity за замовчуванням, якщо його немає
        })
      );
      setCoffeeOrders(parsedOrders);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("countCofe", countCofe.toString());
  }, [countCofe]);

  useEffect(() => {
    const savedCountCofe = localStorage.getItem("countCofe");
    if (savedCountCofe) {
      useCountCofe.setState({ CountCofe: parseInt(savedCountCofe, 10) });
    }
  }, []);

  const handleRemoveOrder = (orderId: number) => {
    const orderToRemove = coffeeOrders.find((order) => order.id === orderId);
    if (orderToRemove) {
      useCountCofe.setState({
        CountCofe: countCofe - (orderToRemove.quantity || 0),
      });
    }
    const updatedOrders = coffeeOrders.filter((order) => order.id !== orderId);
    setCoffeeOrders(updatedOrders);
    localStorage.setItem("CoffeeOrders", JSON.stringify(updatedOrders));
    setSnackbarMessage("Товар видалено з корзини");
    setSnackbarOpen(true);
  };

  useEffect(() => {
    const SavedDarkChoko = localStorage.getItem("DarkChoko");
    const SavedCofeinnn = localStorage.getItem("Cofeinnn");
    const SavedTypeCofeTwo = localStorage.getItem("TypeCofeTwo");
    const SavedHowyouLikedCofe = localStorage.getItem("HowyouLikedCofe");

    if (SavedDarkChoko) useTypeCofe.setState({ DarkChoko: SavedDarkChoko });
    if (SavedCofeinnn) useTypeCofe.setState({ Cofeinnn: SavedCofeinnn });
    if (SavedTypeCofeTwo) {
      const parsedTypeCofeTwo = JSON.parse(SavedTypeCofeTwo);
      useTypeCofeTwo.setState({ TypeCofeTwo: parsedTypeCofeTwo });
    }
    if (SavedHowyouLikedCofe) {
      useLiked.setState({ HowyouLikedCofe: SavedHowyouLikedCofe });
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("DarkChoko", DarkChoko);
    localStorage.setItem("Cofeinnn", Cofeinnn);
    localStorage.setItem("TypeCofeTwo", JSON.stringify(TypeCofeTwo));
    localStorage.setItem("HowyouLikedCofe", HowyouLikedCofe);
    localStorage.setItem("isButtonVisible", JSON.stringify(isButtonVisible));
  }, [DarkChoko, Cofeinnn, TypeCofeTwo, HowyouLikedCofe, isButtonVisible]);

  if (!isBlockVisible) return null;

  const handleIncrement = (orderId: number) => {
    setCoffeeOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId
          ? { ...order, quantity: (order.quantity || 0) + 1 }
          : order
      )
    );
  };

  const handleDecrement = (orderId: number) => {
    setCoffeeOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId && (order.quantity || 0) > 1
          ? { ...order, quantity: (order.quantity || 0) - 1 }
          : order
      )
    );
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("countCofe", countCofe.toString());
    }
  }, [countCofe]);

  const totalPrice = coffeeOrders.reduce(
    (total, order) => total + (order.price || 0) * (order.quantity || 0),
    0
  );

  return (
    <div className="wrapperFullBlock">
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

      <div className="LeftSidePhotoCofe">
        <div className="wrapperLeftSidePhotoCofe"></div>
      </div>
      <div className="WrapperPage">
        {/* <div className="wrapperElMeCofe">
          <Image
            src={PhotoMeCofe.src}
            alt="TextPhotoCoffe"
            width={305}
            height={410}
            className="Image"
          />
          <div className="About">
            <div className="wrapperHeader34">
              <h1 className="HeaderAged">{MeCofeName}</h1>
            </div>
            <div className="wrapperPrice">
              <p className="Price">$ 19.95 </p>
              <span className="LB"> / LB</span>
            </div>
            {Object.entries(combinedData).map(([key, value]) => (
              <div key={key} className="WrapperSec">
                <h6 className="HeaderTxt">
                  {key === "DarkChoko"
                    ? "Темний шоколад"
                    : key === "Cofeinnn"
                    ? "Кофеїн"
                    : key === "TypeCofeTwo"
                    ? "Типи кави"
                    : "Смак кави"}
                </h6>
                <p className="value">
                  {Array.isArray(value) ? value.join(", ") : value}
                </p>
              </div>
            ))}
          </div>
          {isButtonVisible && (
            <GoTrash
              onClick={handleDeleteAll}
              width={80}
              size={50}
              height={65}
            />
          )}
        </div> */}

        <section className="WrapperOrderSection">
          <div className="Placing-an-order">
            <h1 className="HeaderPlacing">Оформлення замовлення</h1>
            <div className="InputBlock56">
              <span className="NumberOrderBlock">1</span>
              <h3 className="SubHeader">Особисті дані</h3>
            </div>
            <div className="Regularcustomer?">
              <p className="Regularcustomer2">Постійний клієнт?</p>
            </div>
            <div className="Input">
              <input
                placeholder="E-mail"
                className="InputTextValid"
                name="E-mail"
              />
              <input placeholder="Імя" className="InputTextValid" name="Імя" />
              <input
                placeholder="Прізвище"
                className="InputTextValid"
                name="Прізвище"
              />
              <input
                placeholder="Країна"
                className="InputTextValid"
                name="Країна"
              />
              <input
                placeholder="+380 __ ___ ____"
                className="InputTextValid"
                name="number"
              />
            </div>
            <hr />
          </div>
          <div className="Placing-an-order">
            <div className="InputBlock56">
              <span className="NumberOrderBlock">2</span>
              <h3 className="SubHeader">Доставка</h3>
            </div>

            <div className="Input">
              <input
                ref={inputRef}
                className="InputTextValidCountry"
                name="E-mail"
                defaultValue={"Україна"}
              />
            </div>
            <p className="Change">
              Для вибору способу доставки спочатку виберіть місто доставки
            </p>
            <hr />
          </div>
          <div className="Placing-an-order">
            <div className="InputBlock56">
              <span className="NumberOrderBlock">3</span>
              <h3 className="SubHeader">Спосіб оплати</h3>
            </div>

            <div className="InputCard">
              <FormControl>
                <RadioGroup
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="female"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Картою (MonoBank)"
                  />
                </RadioGroup>
              </FormControl>
            </div>

            <hr />
          </div>
          <section className="BusKet">
            <section className="BuySecOrder">
              <button className="BuyBtn">Оформити замовлення</button>
            </section>
          </section>
        </section>

        <div className="PayBlock">
          <h1 className="BusketHeader">Кошик</h1>

          <div className="WrapperElCofe">
            {coffeeOrders.map((order, index) => (
              <div className="AnotherWrap">
                <div className="FunderWrapper">
                  <div key={index} className="WrapperSec">
                    <div className="PhotoWrapper">
                      <Image
                        src={order.img}
                        alt="TextPhotoCoffe"
                        width={150}
                        height={170}
                        className="Image"
                      />
                    </div>

                    <div className="TextAboutCofePage">
                      <a
                        className="valueName"
                        href={`/cofe/${order.id}`}
                        target="_blank"
                      >
                        {order.name}
                      </a>
                    </div>
                    <div className="WrapperGoTrash">
                      <GoTrash
                        onClick={() => handleRemoveOrder(order.id)}
                        width={80}
                        size={20}
                        height={65}
                        fill="red"
                        className="Prash"
                      />
                    </div>
                  </div>
                  <div className="Pomel">
                    <p className="HeaderPomel">ТИП ПОМЕЛУ</p>
                    <p className="valuetype2">{order.type}</p>
                  </div>
                  <div className="CountCofeNumber">
                    <div className="WrapperBlockCounter">
                      <p className="quantityCofe">{order.quantity || 0}</p>
                      <div className="WrapperControlBtn">
                        <MdOutlineArrowDropUp
                          onClick={() => handleIncrement(order.id)}
                          className="add"
                        />

                        <MdOutlineArrowDropDown
                          onClick={() => handleDecrement(order.id)}
                          className="minus"
                        />
                      </div>
                    </div>
                    <div className="PriceElCofe">
                      <p className="value3">₴{order.price}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="Hello">
            <div className="PriceBlock">
              <p className="Almostgenerally">
                <span className="SpanAlmostgenerally">
                  Майже загально: ${totalPrice.toFixed(2)}
                </span>
              </p>
              <p className="Almostgenerally">
                <span className="SpanAlmostgenerally">
                  Вартість доставки: $0.00
                </span>
              </p>
            </div>
            <p className="TotalPrice">
              Загальна ціна: ${totalPrice.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
