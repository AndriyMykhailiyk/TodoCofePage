"use client";

import styles from "./page.module.css";
import Main from "./MainComponent/Main";
import AboutUs from "./layout/AboutUs/AboutUs";
import Menu from "./layout/MenuComponnets/Menu";
import PhotoComponent from "./layout/PhotoComponents/PhotoComponent";
import Footer from "./MainComponent/footer/Footer";
import Elcofe from "./layout/ElCofeBlock/ElcofeBlock";
export default function Home() {
  return (
    <>
      <section className={styles.wrapper}>
        <Main />
        <AboutUs />
        <Menu />
        <PhotoComponent />
   
        <Elcofe />
        <Footer />
      </section>
    </>
  );
}
