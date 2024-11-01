import React, { useEffect } from "react";
import "./About.css";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutUs = () => {
  useEffect(() => {
    gsap.utils.toArray(".revealUp").forEach((elem) => {
      const element = elem as HTMLElement; // Явно вказуємо тип
      ScrollTrigger.create({
        trigger: element,
        start: "top 80%",
        end: "bottom 20%",
        markers: false,
        onEnter: () => {
          gsap.fromTo(
            element,
            { y: 100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto",
            }
          );
        },
        onLeave: () => {
          gsap.fromTo(
            element,
            { autoAlpha: 1 },
            { autoAlpha: 0, overwrite: "auto" }
          );
        },
        onEnterBack: () => {
          gsap.fromTo(
            element,
            { y: -100, autoAlpha: 0 },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: "back",
              overwrite: "auto",
            }
          );
        },
        onLeaveBack: () => {
          gsap.fromTo(
            element,
            { autoAlpha: 1 },
            { autoAlpha: 0, overwrite: "auto" }
          );
        },
      });
    });
  }, []);
  

  return (
    <>
      <section className="wrapperAbout">
        <div className="content-iside">
          <header className="headerTextAbout">
            <p className="revealUp">Кава свіжого обсмаження від виробника в зерні та мелена
</p>
          </header>
          <main>
            <span className="revealUp">
            <p className="SubheaderTextAbout">
  Latte Cafe – це місцеве кафе та бар, сховане в кутку Веллінгтона. Latte — це те, що ми любимо, у місті, яке ми любимо. Ми постійно запасаємося місцевими продуктами та випічкою. Візьміть із собою сім&rsquo;ю, щоб перекусити, або зустріньтеся з друзями, щоб випити кави чи гарячого напою.
</p>

            </span>
          </main>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
