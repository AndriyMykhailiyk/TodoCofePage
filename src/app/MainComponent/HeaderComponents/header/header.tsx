import "../../../page.module.css";
import styles from "../../../page.module.css";
import Link from "next/link";
import { IoBasketOutline } from "react-icons/io5";
import useCountCofe from "@/app/store/countCofe";
import { useEffect, useState } from "react";
import { CofeList } from "../../../(api)/CofeApi";
import { StaticImageData } from "next/image";
import { MdOutlineSearch } from "react-icons/md";
import Image from "next/image";

const Header = () => {
  const countCofe = useCountCofe((state) => state.CountCofe);

  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("countCofe", countCofe.toString());
    }
  }, [countCofe]);
  interface Coffee {
    price: number;
    type: string;
    slug: string;
    id: number;
    name: string;
    img: StaticImageData;
    paste: string;
  }

  const [searchTerm, setSearchTerm] = useState(""); // Для зберігання введеного значення
  const [filteredCoffees, setFilteredCoffees] = useState<Coffee[]>([]); // Для зберігання відфільтрованих назв

  // Фільтруємо каву за введеним значенням
  useEffect(() => {
    if (searchTerm === "") {
      setFilteredCoffees([]);
    } else {
      const filtered = CofeList.filter((coffee) =>
        coffee.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredCoffees(filtered);
    }
  }, [searchTerm]);

  return (
    <>
      <section className={styles.wrapperMain}>
        <section className={styles.Header}>
          <nav>
            <ul className={styles.Ul}>
              <li className={styles.ByCofe}>
                <Link href="/cofe" className={styles.ByCofe}>
                  <span className={styles.CofeaLink}>Придбати каву</span>
                </Link>
              </li>
              <li className={styles.ByCofe}>
                <Link href="/cofe" className={styles.ByCofe}>
                  <span className={styles.CofeaLink}>Кава</span>
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
            <div className={styles.wrapperInput}>
              <input
                type="text"
                placeholder="Введіть назву кави..."
                className={styles.InputTextValue}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)} // Оновлюємо значення при введенні
              />
              <MdOutlineSearch size={27} fill="black" />
            </div>
            {searchTerm && filteredCoffees.length > 0 ? (
              <ul className={styles.UlElCofe}>
                {filteredCoffees.map((coffee, index) => (
                  <li key={index} className={styles.ElLiCofeSearch}>
                    <Image
                      width={80}
                      height={80}
                      src={coffee.img}
                      alt={""}
                      className={styles.CofePhotoinInput}
                    />
                    <Link
                      href={`/cofe/${coffee.id}`}
                      style={{ fontStyle: "normal" }}
                    >
                      <p className={styles.ElLiCofeSearchSet}>{coffee.name}</p>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : null}

            <nav>
              <ul className={styles.Ul}>
                <Link href="/meaccount">
                  <IoBasketOutline color="white" size={35} />
                </Link>
              </ul>
            </nav>
            <div className={styles.wrapperTel}>
              <p className={styles.Tel}>097 064 96 76</p>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default Header;
