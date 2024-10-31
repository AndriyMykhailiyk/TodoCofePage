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
const CoffeeDetail = () => {
  const params = useParams();
  const id = params.id;
  const coffee = CofeList.find((item) => item.id === Number(id));
  const [value, setValue] = useState<number | null>(1);

  if (!coffee) return <p>Кава не знайдена</p>;

  return (
    <>
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
                        sx={{ fontSize: "1.3rem" }} // або будь-який інший розмір
                      />
                    </Box>{" "}
                  </div>


<hr/>
<div className="TipeCofee">
  <h2 className="HeaderTipeCofee">Тип кави:</h2>
      <p>{coffee.type}</p>
      </div>
      <h3>Ціна: ${coffee.price}</h3>
      </div>
    </div>
    </section>
    </>
  );
};

export default CoffeeDetail;
