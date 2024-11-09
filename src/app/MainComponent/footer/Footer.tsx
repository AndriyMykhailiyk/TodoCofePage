import "./Footer.css";

const Footer = () => {
  return (
    <>
      <section className="wrapperFooter">
        <div className="content-iside">
          <section className="SocBlock">
            <div className="wrapperSocBlock">
              <ul className="wrapper-ul-fotter">
                <li>
                  <a className="a-el" href="#Home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="a-el" href="#About">
                    About
                  </a>
                </li>
                <li>
                  <a className="a-el" href="#Menu">
                    Menu
                  </a>
                </li>
                <li>
                  <a className="a-el" href="#Info">
                    Info
                  </a>
                </li>
                <li>
                  <a className="a-el" href="#Contact">
                    Contact
                  </a>
                </li>
                <li>
                  <a className="a-el" href="#Privacy">
                    Угода користувача
                  </a>
                </li>
              </ul>
              <ul className="wrapper-ul-fotter">
                <li>
                  <a className="a-el" href="#Guide">
                    Магазин
                  </a>
                </li>

                <li>
                  <a className="a-el" href="#Changelog">
                    Доставка і оплата замовлення
                  </a>
                </li>
                <li>
                  <a className="a-el" href="#Password">
                    Угода користувача
                  </a>
                </li>
                <li>
                  <a className="a-el" href="#404">
                    404
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section className="DownBlock">
            <div className="wrapperDownBlock">
              <ul className="wrapper-ul-fotter">
                <li className="noCopiratingEl">
                  <a className="a-el" href="#LatteCafe">
                    Latte Cafe 2024.
                  </a>
                </li>
                <li>
                  <a className="a-el" href="#Built">
                    Всі права захищено
                  </a>
                </li>
              </ul>
            </div>
          </section>
        </div>
      </section>
    </>
  );
};

export default Footer;
