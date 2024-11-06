"use client";
import "./Menu.css";
import { useState } from "react";
import { CiCoffeeCup } from "react-icons/ci";
import { MdPerson } from "react-icons/md";
import { IoLocation } from "react-icons/io5";
import { FaPhoneFlip } from "react-icons/fa6";
import { SiWebmoney } from "react-icons/si";
import { IoIosMail } from "react-icons/io";
import { SiTelegram } from "react-icons/si";
import { FaViber } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const Menu = () => {
  const [Acivemenu, setAcivemenu] = useState(true);
  const [DrinksMenu, setDrinksMenu] = useState(false);
  const [Takeaway, setTakeaway] = useState(false);
  const [Contacts, setContacts] = useState(false);

  const HandleActiveContacts = () => {
    setAcivemenu(false);
    setDrinksMenu(false);
    setTakeaway(false);
    setContacts(true);
  };

  const HandleActuveMenu = () => {
    setAcivemenu(true);
    setDrinksMenu(false);
    setTakeaway(false);
  };

  const HandleDrinksMenu = () => {
    setDrinksMenu(true);
    setAcivemenu(false);
    setTakeaway(false);
  };

  const HandleTakeaway = () => {
    setTakeaway(true);
    setDrinksMenu(false);
    setAcivemenu(false);
  };

  return (
    <>
      <section className="wrapperMenu">
        <section className="wrapper-BtnBlock">
          <main className="main-text-header">
            <div>
              <span className="hedear">
                <p className="headerTextMenu">Menu</p>
              </span>

              <div className="descriprion">
                <h2 className="descriprion-text2">
                  We change our menu every season. <br />
                  Here is what we are currently
                  <br /> dishing up.
                </h2>
              </div>
            </div>
          </main>

          <div className="wrapperBtn">
            <button
              className={Acivemenu ? "SubBtnActive" : "SubBtn"}
              id="BtnFoodId"
              onClick={HandleActuveMenu}
            >
              Food Menu
            </button>

            <button
              className={DrinksMenu ? "SubBtnActive" : "SubBtn"}
              id="BtnDrinksId"
              onClick={HandleDrinksMenu}
            >
              Drinks Menu
            </button>

            <button
              className={Takeaway ? "SubBtnActive" : "SubBtn"}
              id="BtnTakeawayId"
              onClick={HandleTakeaway}
            >
              Takeaway Menu
            </button>
            <button
              className={Contacts ? "SubBtnActive" : "SubBtn"}
              id="BtnTakeawayId"
              onClick={HandleActiveContacts}
            >
              Контакти
            </button>
            <button
              className="SubBtn"
              id="BtnTakeawayId"
              onClick={HandleTakeaway}
            >
              Про нас
            </button>
          </div>
        </section>
        {Acivemenu ? (
          <section className="LatteCafe">
            <main>
              <div className="listMenu">
                <h1 className="LateCaffe">LATTE CAFFE</h1>
              </div>

              <div className="Entred">
                <h1 className="EntresCaffe">Entres</h1>
                <ul className="Ul-Entred">
                  <li className="li-el-menu">
                    <h3>Avocado Pear Soup</h3>
                    <p>Avocado, Saratoga Chips, Szechuan Button</p>
                    <a>24$</a>
                  </li>
                  <li className="li-el-menu">
                    <h3>Rocket Raisin Salad</h3>
                    <p>Smoked Olive Oil, Fennel, Parmigiano di Reggiano</p>
                    <a>$18</a>
                  </li>{" "}
                  <li className="li-el-menu">
                    <h3>Chilli Lobster</h3>
                    <p>Served With Texas Toast</p>
                    <a>$42</a>
                  </li>{" "}
                  <li className="li-el-menu">
                    <h3>Pepe alla Chitarra</h3>
                    <p>Spaghetti, Pancetta, Pecorino Romano</p>
                    <a>$23</a>
                  </li>
                </ul>
              </div>
              <div className="Main">
                <h1 className="EntresCaffe">Mains</h1>
                <ul className="Ul-Entred">
                  <li className="li-el-menu">
                    <h3>New York Red Steak</h3>
                    <p>Fiddleheads, Day Lily, Arugula, Fingerling Potatoes</p>
                    <a>$63</a>
                  </li>
                  <li className="li-el-menu">
                    <h3>Fig and Rosemary Salad</h3>
                    <p>
                      Sauce Proposal, Cauliflower, Hazelnuts, Golden Raisins
                    </p>
                    <a>$46</a>
                  </li>{" "}
                  <li className="li-el-menu">
                    <h3>Everything From The Sea</h3>
                    <p>
                      White & Green Asparagus, Spring Onion, Sugar Snaps,
                      <br /> Meyer Lemon
                    </p>
                    <a>$48</a>
                  </li>{" "}
                  <li className="li-el-menu">
                    <h3>Roasted Chicken & Duck Claypot</h3>
                    <p>Yukon Gold Potatoes, Broccoli Rabe, Pan Drippings</p>
                    <a>$59</a>
                  </li>
                  <li className="li-el-menu">
                    <h3>2-Month Slow Beef in Wine</h3>
                    <p>Charred Green Beans, Romesco, Beef Fat Balsamic Onion</p>
                    <a>$43</a>
                  </li>
                </ul>
              </div>
            </main>
          </section>
        ) : Takeaway ? (
          <section className="DrinksMenu">
            <main>
              <div className="listMenu">
                <h1 className="LateCaffe">TAKEAWAY MENU</h1>
              </div>

              <div className="Takeout">
                <h1 className="EntresCaffe">Takeout Entrees</h1>
                <ul className="Ul-Takeout">
                  <li className="li-takeout-menu">
                    <h3>Avocado Pear Salad Box</h3>
                    <p>Avocado, Saratoga Chips, Szechuan Button</p>
                    <a>$18</a>
                  </li>
                  <li className="li-takeout-menu">
                    <h3>Rocket Raisin Wrap</h3>
                    <p>Smoked Olive Oil, Fennel, Parmigiano di Reggiano</p>
                    <a>$12</a>
                  </li>
                  <li className="li-takeout-menu">
                    <h3>Chilli Lobster Roll</h3>
                    <p>Served With Texas Toast</p>
                    <a>$25</a>
                  </li>
                  <li className="li-takeout-menu">
                    <h3>Pepe alla Chitarra Pasta Bowl</h3>
                    <p>Spaghetti, Pancetta, Pecorino Romano</p>
                    <a>$15</a>
                  </li>
                </ul>
              </div>

              <div className="Takeout">
                <h1 className="EntresCaffe">Takeout Mains</h1>
                <ul className="Ul-Takeout">
                  <li className="li-takeout-menu">
                    <h3>New York Steak Sandwich</h3>
                    <p>Fiddleheads, Arugula, Fingerling Potatoes</p>
                    <a>$35</a>
                  </li>
                  <li className="li-takeout-menu">
                    <h3>Fig and Rosemary Salad Box</h3>
                    <p>Cauliflower, Hazelnuts, Golden Raisins</p>
                    <a>$20</a>
                  </li>
                  <li className="li-takeout-menu">
                    <h3>Seafood Asparagus Bowl</h3>
                    <p>White & Green Asparagus, Spring Onion, Meyer Lemon</p>
                    <a>$30</a>
                  </li>
                  <li className="li-takeout-menu">
                    <h3>Chicken & Duck Wrap</h3>
                    <p>Broccoli Rabe, Yukon Gold Potatoes, Pan Drippings</p>
                    <a>$28</a>
                  </li>
                  <li className="li-takeout-menu">
                    <h3>Beef in Wine Salad Bowl</h3>
                    <p>Charred Green Beans, Romesco, Balsamic Onion</p>
                    <a>$24</a>
                  </li>
                </ul>
              </div>
            </main>
          </section>
        ) : Contacts ? (
          <section className="DrinksMenu">
            <main>
              <div className="listMenu">
                <h1 className="LateCaffe">CONTACTS MENU</h1>
              </div>

              <div className="Drinks">
                <h1 className="DrinksTitle">КОМПАНІЯ</h1>
                <ul className="Ul-Drinks">
                  <li className="li-drink-menu">
                    <CiCoffeeCup size={28} />
                    <span>Coffe Late for Top</span>
                  </li>
                </ul>
              </div>
              <div className="Drinks">
                <h1 className="DrinksTitle">КОНТАКТНА ІНФОРМАЦІЯ</h1>
                <ul className="Ul-Drinks">
                  <li className="li-drink-menu">
                    <MdPerson size={23} />
                    <span>Роман</span>
                  </li>
                </ul>
              </div>
              <div className="Drinks">
                <h1 className="DrinksTitle">АДРЕСА</h1>
                <ul className="Ul-Drinks">
                  <li className="li-drink-menu">
                    <IoLocation size={23} />
                    <span>вул. Володимира Стельмаха, 18е, Рівне, Україна</span>
                  </li>
                </ul>
              </div>
              <div className="Drinks">
                <h1 className="DrinksTitle">ТЕЛЕФОН</h1>
                <ul className="Ul-Drinks">
                  <li className="li-drink-menu">
                    <FaPhoneFlip size={17} />
                    <span>+380 (73) 524-11-06</span>
                  </li>
                </ul>
              </div>
              <div className="Drinks">
                <h1 className="DrinksTitle">ДОДАТКОВІ ВИДИ ЗВ'ЯЗКУ</h1>
                <ul className="Ul-Drinks">
                  <li className="li-drink-menu">
                    <span className="WrapperOnWwrapper">
                      <div className="WraperSocMedia">
                        <SiWebmoney size={14} />
                        <a className="Link12">equador-coffee.com.ua</a>
                      </div>
                    </span>
                    <span className="WrapperOnWwrapper">
                      <div className="WraperSocMedia">
                        <IoIosMail size={14} />
                        <a className="Link12">equadorcoffee@gmail.com</a>
                      </div>
                    </span>
                    <span className="WrapperOnWwrapper">
                      <div className="WraperSocMedia">
                        <SiTelegram size={14} fill="#2AABEE" />
                        <a className="Link123">+380 (96) 777 33 55</a>
                      </div>
                    </span>{" "}
                    <span className="WrapperOnWwrapper">
                      <div className="WraperSocMedia">
                        <FaViber size={14} fill="#7360F2" />
                        <a className="Link123">+380 (96) 777 33 55</a>
                      </div>
                    </span>{" "}
                    <span className="WrapperOnWwrapper">
                      <div className="WraperSocMedia">
                        <IoLogoWhatsapp size={14} fill="#25D366" />
                        <a className="Link123">+380 (96) 777 33 55</a>
                      </div>
                    </span>
                  </li>
                </ul>
              </div>
            </main>
          </section>
        ) : (
          <section className="DrinksMenu">
            <main>
              <div className="listMenu">
                <h1 className="LateCaffe">DRINKS MENU</h1>
              </div>

              <div className="Drinks">
                <h1 className="DrinksTitle">Drinks Menu</h1>
                <ul className="Ul-Drinks">
                  <li className="li-drink-menu">
                    <h3>Mango Passion Smoothie</h3>
                    <p>Mango, Passion Fruit, Coconut Water</p>
                    <a>$8</a>
                  </li>
                  <li className="li-drink-menu">
                    <h3>Classic Mojito</h3>
                    <p>White Rum, Lime Juice, Mint Leaves, Soda</p>
                    <a>$12</a>
                  </li>
                  <li className="li-drink-menu">
                    <h3>Iced Matcha Latte</h3>
                    <p>Matcha, Almond Milk, Honey</p>
                    <a>$10</a>
                  </li>
                  <li className="li-drink-menu">
                    <h3>Berry Bliss</h3>
                    <p>Blueberry, Raspberry, Banana, Greek Yogurt</p>
                    <a>$9</a>
                  </li>
                </ul>
              </div>
              <div className="Cocktails">
                <h1 className="DrinksTitle">Cocktails</h1>
                <ul className="Ul-Drinks">
                  <li className="li-drink-menu">
                    <h3>Whiskey Sour</h3>
                    <p>Bourbon, Lemon Juice, Simple Syrup, Egg White</p>
                    <a>$14</a>
                  </li>
                  <li className="li-drink-menu">
                    <h3>Pina Colada</h3>
                    <p>Rum, Pineapple Juice, Coconut Cream</p>
                    <a>$13</a>
                  </li>
                  <li className="li-drink-menu">
                    <h3>Aperol Spritz</h3>
                    <p>Aperol, Prosecco, Soda Water</p>
                    <a>$11</a>
                  </li>
                  <li className="li-drink-menu">
                    <h3>Espresso Martini</h3>
                    <p>Vodka, Espresso, Coffee Liqueur</p>
                    <a>$15</a>
                  </li>
                  <li className="li-drink-menu">
                    <h3>Negroni</h3>
                    <p>Gin, Campari, Sweet Vermouth</p>
                    <a>$16</a>
                  </li>
                </ul>
              </div>
              <div className="Main">
                <h1 className="DrinksTitle">Телефон</h1>
                <ul className="Ul-Drinks">
                  <li className="li-drink-menu">
                    <h3>New York Whiskey Sour</h3>
                    <p>Bourbon, Lemon Juice, Simple Syrup, Egg White</p>
                    <a>$16</a>
                  </li>
                  <li className="li-drink-menu">
                    <h3>Fig and Rosemary Spritz</h3>
                    <p>Fig Infusion, Rosemary Syrup, Prosecco, Soda</p>
                    <a>$14</a>
                  </li>
                  <li className="li-drink-menu">
                    <h3>Sea Breeze Cocktail</h3>
                    <p>
                      Vodka, Cranberry Juice, Grapefruit Juice,
                      <br /> Fresh Lime
                    </p>
                    <a>$13</a>
                  </li>
                  <li className="li-drink-menu">
                    <h3>Smoked Chicken Bourbon</h3>
                    <p>Bourbon, Smoked Tea, Lemon, Honey</p>
                    <a>$18</a>
                  </li>
                  <li className="li-drink-menu">
                    <h3>Beefy Bloody Mary</h3>
                    <p>Vodka, Tomato Juice, Spices, Beef Stock</p>
                    <a>$20</a>
                  </li>
                </ul>
              </div>
            </main>
          </section>
        )}
      </section>
    </>
  );
};

export default Menu;
