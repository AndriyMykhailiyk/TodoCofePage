import "./Photo.css";
import FirstPhoto from "../../PhotoPholder/PhotoFolder/IMAGE (3).png";
import SecondPhoto from "../../PhotoPholder/PhotoFolder/IMAGE (4).png";
import MainPhoto from "../../PhotoPholder/PhotoFolder/IMAGE (5).png";

import Image from "next/image";

const PhotoComponent = () => {
  return (
    <>
      <section className="wrapperPhoto">
        <div className="content-Photo">
          <main className="Main-wrapper-Photos">
            <div className="TwoPhoto">
              <Image
                className="FirstPhoto"
                alt="FirstPhoto"
                id="2"
                width={644}
                height={300}
                src={FirstPhoto.src}
              />
              <Image
                className="FirstPhoto"
                alt="FirstPhoto"
                id="2"
                width={644}
                height={300}
                src={SecondPhoto.src}
              />
            </div>

            <div className="1Photo">
              <Image
                className="FirstPhoto"
                alt="FirstPhoto"
                id="2"
                width={644}
                height={640}
                src={MainPhoto.src}
              />
            </div>
          </main>
        </div>
      </section>
    </>
  );
};

export default PhotoComponent;
