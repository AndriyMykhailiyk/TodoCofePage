import "../../../page.module.css";
import styles from "../../../page.module.css";
import Mail from "../Vector.png";
import Instagram from "../../../Svg/IMAGE (1).png";
import Facebook from "../../../Svg/Vector (1).png";
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <>
      <section className={styles.wrapperMain}>
        <section className={styles.Header}>
          <nav>
            <ul className={styles.Ul}>
              <li className={styles.ByCofe}>
                <Link href="/cofe" className={styles.ByCofe}>
                  Придбати каву
                </Link>
              </li>
            </ul>
          </nav>
          <div className={styles.HeaderTextWrapper}>
            <h1 className={styles.HeaderText}>LATTE CAFE</h1>
          </div>
          <div className={styles.SocBlock}>
            <nav>
              <ul className={styles.Ul}>
                <li className={styles.ulLi}>
                  <Image
                    src={Mail.src}
                    className={styles.menuelsvg}
                    alt=""
                    width={28}
                    height={26}
                  />
                </li>

                <li className={styles.ulLi}>
                  <Image
                    src={Instagram.src}
                    className={styles.menuelsvg}
                    alt=""
                    width={28}
                    height={26}
                  />
                </li>

                <li className={styles.ulLi}>
                  <Image
                    src={Facebook.src}
                    className={styles.menuelsvg}
                    alt=""
                    width={28}
                    height={26}
                  />
                </li>
              </ul>
            </nav>
          </div>
        </section>
      </section>
    </>
  );
};

export default Header;
