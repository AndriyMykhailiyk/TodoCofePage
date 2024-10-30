import "./ElMenuCofe.css";
import Link from "next/link";
import Image from "next/image";
import { CofeList } from '../../(api)/CofeApi';

const Elcofe = () => {
  return (
    <>
      <section className="wrapperAword3">
        <div className="content-isideAword2">
          <header className="headerTextAword56">
            <h1 className="headerTextAword23">Менюшки</h1>
          </header>
          <div className="wrapperSubheaderTextAword23">
            {CofeList.map((i) => (
              <ul key={i.id} className="LiElList">
                <li className="WrapperEl">
                <div className="wrapperPhotoBack">
  <div className="wrapperPhotoMeCofe">
    <Image src={i.img} alt="MePhoto" width={280} height={360} className="PhotoMeCasomePhoto" />
  </div>
  <div className="hiddenText">Ваш текст тут</div>
</div>

                  <Link href={`/${i.id}`} style={{ fontStyle: "normal" }}>
                    <div>
                      <h2>{i.name}</h2>
                    </div>
                  </Link>
                  <div>
                    <p>{i.type}</p>
                  </div>
                  <div>
                    <h3>${i.price}</h3>
                  </div>
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