import "../../../page.module.css";
import styles from "../../../page.module.css";
import Mail from "../Vector.png";
import Instagram from "../../../Svg/IMAGE (1).png";
import Facebook from "../../../Svg/Vector (1).png";
import Image from "next/image";
import Link from "next/link";
import Tooltip from "@mui/material/Tooltip";
const Header = () => {
  return (
    <>
      <section className={styles.wrapperMain}>
        <section className={styles.Header}>
          <nav>
            <ul className={styles.Ul}>
              <li className={styles.ByCofe}>
                <Link href="/cofe" className={styles.ByCofe}>
                  <button className={styles.ByCofeLink}>Придбати каву</button>
                </Link>
              </li>
            </ul>
          </nav>
          <Link href="/">
            <div className={styles.HeaderTextWrapper}>
              <h1 className={styles.HeaderText}>LATTE CAFE</h1>
            </div>
          </Link>
          <div className={styles.SocBlock}>
            <nav>
              <ul className={styles.Ul}>
                <li className={styles.ulLi}>
                  <Tooltip title="Add" arrow>
                    <Image
                      src={Mail.src}
                      className={styles.menuelsvg}
                      alt=""
                      width={28}
                      height={26}
                    />
                  </Tooltip>
                </li>

                <li className={styles.ulLi}>
                  <Tooltip title="Instagram" arrow>
                    <Image
                      src={Instagram.src}
                      className={styles.menuelsvg}
                      alt=""
                      width={28}
                      height={26}
                    />
                  </Tooltip>
                </li>

                <li className={styles.ulLi}>
                  <Tooltip title="Facebook" arrow>
                    <Image
                      src={Facebook.src}
                      className={styles.menuelsvg}
                      alt=""
                      width={28}
                      height={26}
                    />
                  </Tooltip>
                </li>
              </ul>
            </nav>
            <div className={styles.wrapperTel}>
              <a href="tel:+6494461709">+380 (73) 524-11-06</a>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Header;
