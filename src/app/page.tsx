"use client";

import styles from "./page.module.css";
import Main from "./MainComponent/Main";
import AboutUs from "./layout/AboutUs/AboutUs";
import Menu from "./layout/MenuComponnets/Menu";
import Location from "./layout/Location/Location";
import PhotoComponent from "./layout/PhotoComponents/PhotoComponent";
import Aword from "./layout/Aword/Aword";
import Footer from "./MainComponent/footer/Footer";
export default function Home() {
  return (
    <>
      <section className={styles.wrapper}>
        <Main />
        <AboutUs />
        <Menu />
        <Location />
        <PhotoComponent />
        <Aword />
        <Footer />
      </section>
    </>
  );
}
