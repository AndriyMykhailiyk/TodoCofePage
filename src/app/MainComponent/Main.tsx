import "../page.module.css";
import styles from "../page.module.css";
import BackgroundPhoto from "../PhotoPholder/IMAGE.png";
import Header from "./HeaderComponents/header/header";
import Image from "next/image"; // Import the Image component
import Link from "next/link";
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
          <div className={styles.textOverlay}>
            <h1 className={styles.textOverlayPhoto}>
              <strong>
                Найкраща кава, яку ви <br />
                ніколи не куштували, <br /> створіть її самі.
              </strong>
            </h1>

            <h4 className={styles.textOverlayPhotoDes}>
              Понад 450 сортів кави, відібраних найкращими <br /> незалежними
              обсмажувачами Америки. Ідеально <br /> підходить для вас.
            </h4>

            <div>
              <></>
              <Link href="/cofe">
                <button className={styles.textOverlayPhotoBtn}>
                  Знайти мій смак
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
