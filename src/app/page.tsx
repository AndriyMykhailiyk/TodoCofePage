"use client";
import styles from "./page.module.css";
import dynamic from 'next/dynamic';
import { memo } from "react";
const Main = memo(dynamic(() => import('./MainComponent/Main')));
const AboutUs = memo(dynamic(() => import('./layout/AboutUs/AboutUs')));
const Menu = memo(dynamic(() => import('./layout/MenuComponnets/Menu')));
const PhotoComponent = memo(dynamic(() => import('./layout/PhotoComponents/PhotoComponent')));
const Footer = memo(dynamic(() => import('./MainComponent/footer/Footer')));
const Elcofe = memo(dynamic(() => import('./layout/ElCofeBlock/ElcofeBlock')));

export default function Home() {
  return (
    <section className={styles.wrapper}>
      <Main />
      <AboutUs />
      <Menu />
      <PhotoComponent />
      <Elcofe />
      <Footer />
    </section>
  );
}
