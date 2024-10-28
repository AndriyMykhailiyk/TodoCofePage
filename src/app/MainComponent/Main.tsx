import "../page.module.css";
import styles from "../page.module.css";
import BackgroundPhoto from "../PhotoPholder/IMAGE.png";
import Header from "./HeaderComponents/header/header";
import Image from "next/image"; // Import the Image component

const Main = () => {
  return (
    <>
      <Header />
      <section className={styles.wrapperMain}>
        <div className={styles.photowrapper}>
          <Image
            src={BackgroundPhoto.src}
            className={styles.photoback}
            alt=""
            width={BackgroundPhoto.width}
            height={BackgroundPhoto.height}
          />
        </div>
      </section>
    </>
  );
};

export default Main;
