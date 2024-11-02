"use client";
import "../../ordercofe/order.css";
import "./CofePage.css";
import { useParams } from "next/navigation";
import { CofeList } from "../../(api)/CofeApi";
import Image from "next/image";
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from "next/link";
import { IoBasketOutline } from "react-icons/io5";
import { Box, Rating } from "@mui/material";
import { useState, useEffect } from "react";
import Diskount from "@/app/ordercofe/discount/Diskount";
import { Snackbar } from "@mui/material";
import { FaRaspberryPi } from "react-icons/fa6";
import { GiCherry } from "react-icons/gi";
import { BsFlower1 } from "react-icons/bs";
import { PiCoffeeBean } from "react-icons/pi";
import { SiCoffeescript } from "react-icons/si";
import { IoMdCheckmark } from "react-icons/io";
import Elcofe from "../../../app/layout/ElCofeBlock/ElcofeBlock";

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

  useEffect(() => {
    // Відновлення стану isAdded з localStorage
    const savedIsAdded = localStorage.getItem(`isAdded_${id}`);
    if (savedIsAdded) {
      SetisAdded(JSON.parse(savedIsAdded));
    }

    // Відновлення списку coffeeOrders з localStorage
    const savedCoffeeOrders = localStorage.getItem("CoffeeOrders");
    if (savedCoffeeOrders) {
      setCoffeeOrders(JSON.parse(savedCoffeeOrders));
    }
  }, [id]);

  const HandleKlickBtn = () => {
    if (coffee) {
      const coffeeOrder: CoffeeOrder = {
        id: coffee.id,
        name: coffee.name,
        price: coffee.price,
        img: typeof coffee.img === "string" ? coffee.img : coffee.img.src, // Перетворення img на рядок
        type: coffee.type,
        paste: coffee.paste,
      };

      if (isAdded) {
        // Видалення кави зі списку
        const updatedOrders = coffeeOrders.filter(
          (order) => order.id !== coffeeOrder.id
        );
        setCoffeeOrders(updatedOrders);
        localStorage.setItem("CoffeeOrders", JSON.stringify(updatedOrders));
      } else {
        // Додавання кави до списку
        const updatedOrders = [...coffeeOrders, coffeeOrder];
        setCoffeeOrders(updatedOrders);
        localStorage.setItem("CoffeeOrders", JSON.stringify(updatedOrders));
      }
      SetisAdded(!isAdded);
      localStorage.setItem(`isAdded_${id}`, JSON.stringify(!isAdded));
    }
  };

  if (!coffee) return <p>Кава не знайдена</p>;

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
                  {isAdded ? "Додано" : "Додати до списку"}
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
      <Elcofe />
      <Snackbar
        open={promoSnackbarOpen}
        autoHideDuration={6000}
        onClose={() => setPromoSnackbarOpen(false)}
        message={promoSnackbarMessage}
      />
    </>
  );
};

export default CoffeeDetail;
