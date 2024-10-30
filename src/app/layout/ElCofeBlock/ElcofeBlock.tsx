import "./ElMenuCofe.css";
import { CofeList } from "../../(api)/CofeApi";
import Link from "next/link";
const Elcofe = () => {
  return (
    <>
      <section className="wrapperAword3">
        <div className="content-isideAword2">
          <header className="headerTextAword">
            <h1 className="headerTextAword">Менюшки</h1>
          </header>
          <div className="wrapperSubheaderTextAword23">
            {CofeList.map((i) => (
              <ul key={i.id} className="LiElList">
                <li className="WrapperEl">
                  <Link href={`/cofeset/${i.id}`}>
                    <span>
                      <h2>{i.name}</h2>
                    </span>
                  </Link>
                  <span>
                    <p>{i.type}</p>
                  </span>
                  <span>
                    <h3>${i.price}</h3>
                  </span>
                </li>
              </ul>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Elcofe;
