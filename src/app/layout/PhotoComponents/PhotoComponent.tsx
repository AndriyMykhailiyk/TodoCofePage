import "./Photo.css";
import FirstPhoto from "../../PhotoPholder/PhotoFolder/IMAGE (3).png";
import SecondPhoto from "../../PhotoPholder/PhotoFolder/IMAGE (4).png";
import MainPhoto from "../../PhotoPholder/PhotoFolder/IMAGE (5).png";
import React, { useRef, useState, useEffect } from "react";

import Image from "next/image";

const PhotoComponent = () => {
  const textRef = useRef<HTMLDivElement>(null); // посилання на текст
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect(); // від'єднати, якщо не потрібно повторне відслідковування
          }
        });
      },
      { threshold: 0.5 } // процент видимості елемента для запуску
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);
  return (
    <>
      <section className="wrapperPhoto">
        <div className="content-Photo">
          <main className="Main-wrapper-Photos">
            <div className="TwoPhoto">
              <Image
                className="FirstPhoto"
                alt="FirstPhoto"
                id="2"
                width={644}
                height={300}
                src={FirstPhoto.src}
              />
              <div
                ref={textRef}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: "opacity 1s ease-in-out", // плавна поява
                  paddingBottom: "1em",
                }}
              >
                <p className="ThisText">Куточок смаків</p>
              </div>
              <Image
                className="FirstPhoto"
                alt="FirstPhoto"
                id="2"
                width={644}
                height={300}
                src={SecondPhoto.src}
              />
              <div
                ref={textRef}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: "opacity 1s ease-in-out", // плавна поява
                }}
              >
                <p className="ThisText2">Мистецтво на тарілці</p>
              </div>
            </div>

            <div className="1Photo">
              <Image
                className="FirstPhoto"
                alt="FirstPhoto"
                id="2"
                width={644}
                height={640}
                src={MainPhoto.src}
              />
              <div
                ref={textRef}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transition: "opacity 1s ease-in-out", // плавна поява
                }}
              >
                <p className="ThisText2">Інтер’єр із душевним теплом</p>
              </div>
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default PhotoComponent;
