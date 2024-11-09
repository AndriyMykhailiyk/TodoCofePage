"use client";
import { useEffect, useMemo, useState } from "react";
import { useLiked, useSetName } from "../store/cindstore";
import { useTypeCofe, useTypeCofeTwo } from "../store/store";
import { GoTrash } from "react-icons/go";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Імпорт useRouter
import "./meaccount.css";
import PhotoMeCofe from "./cofephoto/kawa_BEANS.png";
import { MdOutlineArrowDropUp } from "react-icons/md";
import { MdOutlineArrowDropDown } from "react-icons/md";
import Footer from "../MainComponent/footer/Footer";
import "../MainComponent/footer/Footer.css";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { IoBasketOutline } from "react-icons/io5";
import Header from "../cofe/headercofe/header";
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
  const router = useRouter(); // Ініціалізація useRouter
  const [, setSnackbarMessage] = useState("");
  const [, setSnackbarOpen] = useState(false);

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

  const handleRemoveOrder = (orderId: number) => {
    const updatedOrders = coffeeOrders.filter((order) => order.id !== orderId);
    setCoffeeOrders(updatedOrders);
    localStorage.setItem("CoffeeOrders", JSON.stringify(updatedOrders));
    setSnackbarMessage("Товар видалено з корзини");
    setSnackbarOpen(true);
  };

  const combinedData = useMemo(
    () => ({
      DarkChoko,
      Cofeinnn,
      TypeCofeTwo,
      HowyouLikedCofe,
    }),
    [DarkChoko, Cofeinnn, TypeCofeTwo, HowyouLikedCofe]
  );

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

  const handleDeleteAll = () => {
    useTypeCofe.setState({ DarkChoko: "", Cofeinnn: "" });
    useTypeCofeTwo.setState({ TypeCofeTwo: [] });
    useLiked.setState({ HowyouLikedCofe: "" });

    localStorage.removeItem("DarkChoko");
    localStorage.removeItem("Cofeinnn");
    localStorage.removeItem("TypeCofeTwo");
    localStorage.removeItem("HowyouLikedCofe");
    localStorage.removeItem("CoffeeOrders");

    setButtonVisible(false);
    setBlockVisible(false);

    // Перенаправлення на головну сторінку
    router.push("/");
  };

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

  const totalPrice = coffeeOrders.reduce(
    (total, order) => total + (order.price || 0) * (order.quantity || 0),
    0
  );

  return (
    <div className="wrapperFullBlock">
      <Header />

      <div className="LeftSidePhotoCofe">
        <div className="wrapperLeftSidePhotoCofe"></div>
      </div>
      <div className="WrapperPage">
        <div className="wrapperElMeCofe">
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
        </div>
        <section className="MeCofeOrders">
          <div className="wrapperOrders">
            {coffeeOrders.map((order, index) => (
              <div key={index} className="WrapperSec">
                <div className="PhotoWrapper">
                  <Image
                    src={order.img}
                    alt="TextPhotoCoffe"
                    width={230}
                    height={260}
                    className="Image"
                  />
                </div>

                <div className="TextAboutCofePage">
                  <div className="wrapperText">
                    <a
                      className="valueName"
                      href={`/cofe/${order.id}`}
                      target="_blank"
                    >
                      {order.name}
                    </a>
                    <p className="valuetype">{order.type}</p>
                    <p className="value">{order.paste}</p>
                  </div>
                  <section className="counter_game">
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
                      <p className="value">₴{order.price}</p>
                    </div>
                    <div className="WrapperGoTrash">
                      <GoTrash
                        onClick={() => handleRemoveOrder(order.id)}
                        width={80}
                        size={20}
                        height={65}
                        className="Prash"
                      />
                    </div>
                  </section>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="BusKet">
        <header className="HeaderText">
          <p className="BusketHeader">Кошик</p>
        </header>
        <main>
          <p className="ContactsData">Контактні дані</p>
          <section className="InputSection">
            <div className="NameWrapper">
              <span className="Layoutblock">
                <div className="FormTitle">
                  <span>Iмя</span>
                  <span className="Star">*</span>
                </div>

                <input placeholder="Iмя" className="InputBlock" type="name" />
              </span>
            </div>
            <div className="NameWrapper">
              {" "}
              <span className="Layoutblock">
                <div className="FormTitle">
                  <span>Прізвище</span>
                  <span>*</span>
                </div>

                <input
                  placeholder="Прізвище"
                  className="InputBlock"
                  type="lastName"
                />
              </span>
            </div>
            <div className="NameWrapper">
              {" "}
              <span className="Layoutblock">
                <div className="FormTitle">
                  <span>Email</span>
                  <span>*</span>
                </div>

                <input
                  placeholder="Email"
                  className="InputBlock"
                  type="email"
                />
              </span>
            </div>
            <div className="NameWrapper">
              {" "}
              <span className="Layoutblock">
                <div className="FormTitle">
                  <span>Мобільний</span>
                  <span>*</span>
                </div>
                <input
                  placeholder="Мобільний"
                  className="InputBlock"
                  type="mobile"
                />
              </span>
            </div>
            <div className="NameWrapper">
              {" "}
              <span className="Layoutblock">
                <div className="FormTitle">
                  <span>Коментар</span>
                  <span>*</span>
                </div>

                <input
                  placeholder="Коментар"
                  className="InputBlock"
                  type="Comment"
                />
              </span>
            </div>
          </section>
        </main>
        <section className="BuySecOrder">
          <button className="BuyBtn">Купити</button>
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
          <p className="TotalPrice">Загальна ціна: ${totalPrice.toFixed(2)}</p>
        </section>
      </section>
      <Footer />
    </div>
  );
}
