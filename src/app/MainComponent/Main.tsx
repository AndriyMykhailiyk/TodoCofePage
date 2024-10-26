import "../page.module.css";
import styles from "../page.module.css";
import BackgroundPhoto from "../PhotoPholder/IMAGE.png";
import Header from "./HeaderComponents/header/header";
import Image from "next/image";
const Main = () => {
  return (
    <>
      <Header />
      <section className={styles.wrapperMain}>
        <div className={styles.photowrapper}>
          <img src={BackgroundPhoto.src} className={styles.photoback} alt="" />
        </div>
      </section>
    </>
  );
};

export default Main;
