import "./ElMenuCofe.css";
import Link from "next/link";
import Image from "next/image";
import { CofeList } from '../../(api)/CofeApi';

const Elcofe = () => {
  return (
    <section className="wrapperAword3">
      <div className="content-isideAword2">
        <header className="headerTextAword56">
          <h1 className="headerTextAword23">Краща кава:</h1>
        </header>
        <div className="wrapperSubheaderTextAword23">
          {CofeList.map((i) => (
            <ul key={i.id} className="LiElList">
              <li className="WrapperEl">
                  <div className="wrapperPhotoBack">
                    <div className="wrapperPhotoMeCofe">
                      <Image src={i.img} alt={i.name} width={280} height={360} className="PhotoMeCasomePhoto" />
                    </div>
                    <div className="hiddenText">Ваш текст тут</div>
                  </div>
                  <div className="TextBlockEl">
                  <Link href={`/cofe/${i.id}`} style={{fontStyle: "normal"}}>

                    <h2>{i.name}</h2>
                    </Link>
                    <p>{i.type}</p>
                    <h3 className="PriceBlock">${i.price}</h3>
                  </div>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Elcofe;
