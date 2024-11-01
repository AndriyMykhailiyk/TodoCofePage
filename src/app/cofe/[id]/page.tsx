"use client";
import "../../ordercofe/order.css";
import './CofePage.css'
import { useParams } from 'next/navigation';
import { CofeList } from '../../(api)/CofeApi';
import Image from 'next/image';
import { IoIosArrowRoundBack } from "react-icons/io";
import Link from 'next/link';
import { IoBasketOutline } from 'react-icons/io5';
import { Box, Rating } from "@mui/material";
import { useState } from "react";
import Diskount from "@/app/ordercofe/discount/Diskount";
import { Snackbar } from "@mui/material";

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
            <Image src={coffee.img} alt={coffee.name} width={560} height={720} />
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