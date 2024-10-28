"use client";

import { useEffect, useMemo, useState } from "react";
import { useLiked, useSetName } from "../store/cindstore";
import { useTypeCofe, useTypeCofeTwo } from "../store/store";
import { GoTrash } from "react-icons/go";
import Image from "next/image";
import "./meaccount.css";
import PhotoMeCofe from "./cofephoto/kawa_BEANS.png";

export default function MeCofeAccount() {
  const DarkChoko = useTypeCofe((state) => state.DarkChoko);
  const Cofeinnn = useTypeCofe((state) => state.Cofeinnn);
  const TypeCofeTwo = useTypeCofeTwo((state) => state.TypeCofeTwo);
  const HowyouLikedCofe = useLiked((state) => state.HowyouLikedCofe);
  const MeCofeName = useSetName((state) => state.MeCofeName);
  const [isButtonVisible, setButtonVisible] = useState(true);

  useEffect(() => {
    const savedVisibility = localStorage.getItem("isButtonVisible");
    if (savedVisibility !== null) {
      setButtonVisible(JSON.parse(savedVisibility));
    }
  }, []);
  const combinedData = useMemo(
    () => ({
      DarkChoko,
      Cofeinnn,
      TypeCofeTwo,
      HowyouLikedCofe,
    }),
    [DarkChoko, Cofeinnn, TypeCofeTwo, HowyouLikedCofe]
  );

  // Відновлення даних з localStorage при ініціалізації
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
  }, []); // Запустити тільки один раз при монтуванні компонента

  // Збереження даних в localStorage при зміні значень
  useEffect(() => {
    localStorage.setItem("DarkChoko", DarkChoko);
    localStorage.setItem("Cofeinnn", Cofeinnn);
    localStorage.setItem("TypeCofeTwo", JSON.stringify(TypeCofeTwo));
    localStorage.setItem("HowyouLikedCofe", HowyouLikedCofe);
    localStorage.setItem("isButtonVisible", JSON.stringify(isButtonVisible)); // Збереження стану видимості кнопки
  }, [DarkChoko, Cofeinnn, TypeCofeTwo, HowyouLikedCofe, isButtonVisible]);

  const handleDeleteAll = () => {
    // Очищення всіх даних зі стану
    useTypeCofe.setState({ DarkChoko: "", Cofeinnn: "" });
    useTypeCofeTwo.setState({ TypeCofeTwo: [] });
    useLiked.setState({ HowyouLikedCofe: "" });

    // Очищення localStorage
    localStorage.removeItem("DarkChoko");
    localStorage.removeItem("Cofeinnn");
    localStorage.removeItem("TypeCofeTwo");
    localStorage.removeItem("HowyouLikedCofe");
    localStorage.removeItem("CoffeeOrders"); // Очищення замовлень

    // Сховати кнопку і зберегти стан
    setButtonVisible(false);
  };

  return (
    <div className="wrapperFullBlock">
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
              <div key={key}>
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
      </div>
    </div>
  );
}
