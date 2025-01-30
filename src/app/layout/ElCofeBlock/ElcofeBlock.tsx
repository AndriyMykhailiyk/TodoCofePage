import { SetStateAction, useEffect, useState } from "react";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";
import { CofeList } from "../../(api)/CofeApi";
import "./ElMenuCofe.css";
import { BsSortDownAlt } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { Alert, Snackbar } from "@mui/material";

const ITEMS_PER_PAGE = 4;

export default function CoffeeList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [anchorEl, setAnchorEl] = useState(false);
  const [loPrice, setloPrice] = useState(false);
  const [topPrice, setTopPrice] = useState(false);
  const [Popular, setPopular] = useState(false);
  const [coffeeOrders, setCoffeeOrders] = useState<CoffeeOrder[]>([]);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [promoSnackbarOpen, setPromoSnackbarOpen] = useState(false);
  const [promoSnackbarMessage] = useState("");

  const totalItems = CofeList.length;
  const totalPages = Math.ceil(totalItems / ITEMS_PER_PAGE);

  // Обчислення індексів для поточного набору кави
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentItems = CofeList.slice(startIndex, endIndex);

  // Функції для переходу між сторінками
  const goToPage = (pageNumber: SetStateAction<number>) =>
    setCurrentPage(pageNumber);
  const goToNextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const goToPreviousPage = () =>
    setCurrentPage((prev) => Math.max(prev - 1, 1));

  const HandleSeeMenu = () => {
    setAnchorEl(!anchorEl);
  };

  interface CoffeeOrder {
    id: number;
    name: string;
    price: number;
    img: string | StaticImageData;
    type: string;
    paste: string;
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (anchorEl && !(event.target as HTMLElement).closest(".MenuFilter")) {
        setAnchorEl(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [anchorEl]);

  const filteredByLoPrice = loPrice
    ? CofeList.sort((a, b) => a.price - b.price)
    : CofeList;

  const filteredByTopPrice = topPrice
    ? CofeList.sort((a, b) => b.price - a.price)
    : CofeList;

  const shuffleArray = Popular
    ? CofeList.sort(() => Math.random() - 0.5)
    : CofeList;

  const HandleClickLoPrice = () => {
    setloPrice(true);
    setTopPrice(false);
    setPopular(false);
  };

  const HandlePopular = () => {
    setloPrice(false);
    setPopular(true);
    setTopPrice(false);
  };

  const HandleClickTopPrice = () => {
    setTopPrice(true);
    setloPrice(false);
    setPopular(false);
  };

  useEffect(() => {
    const storedOrders = localStorage.getItem("CoffeeOrders");
    if (storedOrders) {
      setCoffeeOrders(JSON.parse(storedOrders));
    }
  }, []);

  const HandleKlickBtn = (coffee: CoffeeOrder) => {
    if (typeof window !== "undefined") {
      const isAlreadyAdded = coffeeOrders.some(
        (order) => order.id === coffee.id
      );

      if (isAlreadyAdded) {
        const updatedOrders = coffeeOrders.filter(
          (order) => order.id !== coffee.id
        );
        setCoffeeOrders(updatedOrders);
        localStorage.setItem("CoffeeOrders", JSON.stringify(updatedOrders));
        setSnackbarMessage("Товар видалено з корзини");
      } else {
        const updatedOrders = [...coffeeOrders, coffee];
        setCoffeeOrders(updatedOrders);
        localStorage.setItem("CoffeeOrders", JSON.stringify(updatedOrders));
        setSnackbarMessage("Товар додано до корзини");
      }

      setSnackbarOpen(true);
    } else {
      console.error("Coffee is undefined");
    }
  };

  const handleCloseSnackbar = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setSnackbarOpen(false);
  };

  return (
    <div>
      <header className="headerTextAword56">
        <h1 className="headerTextAword23">Краща кава:</h1>
        <div className="WrapperMenuFilter" style={{ position: "relative" }}>
          <div className="SortBy">
            <BsSortDownAlt size={23} fill="white" onClick={HandleSeeMenu} />
          </div>
          {anchorEl ? (
            <span
              className="MenuFilter"
              style={{ position: "absolute", top: "100%", right: 0 }}
            >
              <div className="Wrapper12">
                <ul>
                  <li
                    className={topPrice ? "ForPriceLowActive" : "ForPriceLow"}
                  >
                    <p className="ForPrice" onClick={HandleClickTopPrice}>
                      За ціною (зростання)
                    </p>
                  </li>
                  <li className={loPrice ? "ForPriceLowActive" : "ForPriceLow"}>
                    <p className="ForPrice" onClick={HandleClickLoPrice}>
                      За ціною (спадання)
                    </p>
                  </li>
                  <li className={Popular ? "ForPriceLowActive" : "ForPriceLow"}>
                    <p className="ForPrice" onClick={HandlePopular}>
                      Популярні
                    </p>
                  </li>
                </ul>
              </div>
            </span>
          ) : null}
        </div>
      </header>

      {loPrice ? (
        <>
          <div className="wrapperSubheaderTextAword23">
            {filteredByLoPrice.map((i) => (
              <ul key={i.id} className="LiElList">
                <li className="WrapperEl">
                  <div className="wrapperPhotoBack">
                    <div className="wrapperPhotoMeCofe">
                      <Image
                        src={i.img}
                        alt={i.name}
                        width={280}
                        height={320}
                        className="PhotoMeCasomePhoto"
                      />
                    </div>
                    <div className="hiddenText">
                      {i.paste.split(", ").map((flavor, index) => (
                        <span key={index} className="ElCofeflavor">
                          {flavor}
                          <br />
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="TextBlockEl">
                    <Link
                      href={`/cofe/${i.id}`}
                      style={{ fontStyle: "normal" }}
                    >
                      <h2>{i.name}</h2>
                    </Link>
                    <p>{i.type}</p>
                    <h3 className="PriceBlock">${i.price}</h3>
                  </div>
                  <span className="wrapperBtn2">
                    <FaShoppingCart
                      size={28}
                      onClick={() => HandleKlickBtn(i)}
                      className="BuyCofe"
                      fill={
                        coffeeOrders.some((order) => order.id === i.id)
                          ? "red"
                          : "green"
                      }
                    />
                  </span>
                </li>
              </ul>
            ))}
          </div>
        </>
      ) : topPrice ? (
        <div className="wrapperSubheaderTextAword23">
          {filteredByTopPrice.map((i) => (
            <ul key={i.id} className="LiElList">
              <li className="WrapperEl">
                <div className="wrapperPhotoBack">
                  <div className="wrapperPhotoMeCofe">
                    <Image
                      src={i.img}
                      alt={i.name}
                      width={280}
                      height={320}
                      className="PhotoMeCasomePhoto"
                    />
                  </div>
                  <div className="hiddenText">
                    {i.paste.split(", ").map((flavor, index) => (
                      <span key={index} className="ElCofeflavor">
                        {flavor}
                        <br />
                      </span>
                    ))}
                  </div>
                </div>
                <div className="TextBlockEl">
                  <Link href={`/cofe/${i.id}`} style={{ fontStyle: "normal" }}>
                    <h2>{i.name}</h2>
                  </Link>
                  <p>{i.type}</p>
                  <h3 className="PriceBlock">${i.price}</h3>
                </div>
                <span className="wrapperBtn2">
                  <FaShoppingCart
                    size={28}
                    onClick={() => HandleKlickBtn(i)}
                    className="BuyCofe"
                    fill={
                      coffeeOrders.some((order) => order.id === i.id)
                        ? "red"
                        : "green"
                    }
                  />
                </span>
              </li>
            </ul>
          ))}
        </div>
      ) : Popular ? (
        <div className="wrapperSubheaderTextAword23">
          {shuffleArray.map((i) => (
            <ul key={i.id} className="LiElList">
              <li className="WrapperEl">
                <div className="wrapperPhotoBack">
                  <div className="wrapperPhotoMeCofe">
                    <Image
                      src={i.img}
                      alt={i.name}
                      width={280}
                      height={320}
                      className="PhotoMeCasomePhoto"
                    />
                  </div>
                  <div className="hiddenText">
                    {i.paste.split(", ").map((flavor, index) => (
                      <span key={index} className="ElCofeflavor">
                        {flavor}
                        <br />
                      </span>
                    ))}
                  </div>
                </div>
                <div className="TextBlockEl">
                  <Link href={`/cofe/${i.id}`} style={{ fontStyle: "normal" }}>
                    <h2>{i.name}</h2>
                  </Link>
                  <p>{i.type}</p>
                  <h3 className="PriceBlock">${i.price}</h3>
                </div>
                <span className="wrapperBtn2">
                  <FaShoppingCart
                    size={28}
                    onClick={() => HandleKlickBtn(i)}
                    className="BuyCofe"
                    fill={
                      coffeeOrders.some((order) => order.id === i.id)
                        ? "red"
                        : "green"
                    }
                  />
                </span>
              </li>
            </ul>
          ))}
        </div>
      ) : (
        <div className="wrapperSubheaderTextAword23">
          {currentItems.map((i) => (
            <ul key={i.id} className="LiElList">
              <li className="WrapperEl">
                <div className="wrapperPhotoBack">
                  <div className="wrapperPhotoMeCofe">
                    <Image
                      src={i.img}
                      alt={i.name}
                      width={280}
                      height={320}
                      className="PhotoMeCasomePhoto"
                    />
                  </div>
                  <div className="hiddenText">
                    {i.paste.split(", ").map((flavor, index) => (
                      <span key={index} className="ElCofeflavor">
                        {flavor}
                        <br />
                      </span>
                    ))}
                  </div>
                </div>
                <div className="TextBlockEl">
                  <div className="WrapperLayout">
                    <Link
                      href={`/cofe/${i.id}`}
                      style={{ fontStyle: "normal" }}
                    >
                      <h2>{i.name}</h2>
                    </Link>
                    <p>{i.type}</p>
                    <h3 className="PriceBlock">${i.price}</h3>
                  </div>
                  <span className="wrapperBtn2">
                    <FaShoppingCart
                      size={28}
                      onClick={() => HandleKlickBtn(i)}
                      className="BuyCofe"
                      fill={
                        coffeeOrders.some((order) => order.id === i.id)
                          ? "green"
                          : "red"
                      }
                    />
                  </span>
                </div>
              </li>
            </ul>
          ))}
        </div>
      )}

      {/* Пагінація */}
      <div className="pagination">
        <button
          onClick={goToPreviousPage}
          disabled={currentPage === 1}
          className="BtnGo"
        >
          Назад
        </button>
        {Array.from({ length: totalPages }, (_, index) => (
          <p
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={currentPage === index + 1 ? "active" : "noactive"}
          >
            {index + 1}
          </p>
        ))}
        <button
          onClick={goToNextPage}
          disabled={currentPage === totalPages}
          className="BtnGo"
        >
          Вперед
        </button>
      </div>
      <Snackbar
        open={promoSnackbarOpen}
        autoHideDuration={6000}
        onClose={() => setPromoSnackbarOpen(false)}
        message={promoSnackbarMessage}
      />
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity="success"
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
}
