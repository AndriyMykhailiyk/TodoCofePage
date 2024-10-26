import "./Location.css";

const Location = () => {
  return (
    <>
      <section className="wrapperLocation">
        <main className="MainWrapper">
          <div className="Location">
            <div className="wrapperLocatiob">
              <h3 className="HeaderTextLocation">Location</h3>
              <p className="SubHeaderTextLocation">
                101 Cuba St,Te Aro, Wellington
              </p>
            </div>
          </div>

          <div className="Hourd">
            <div className="wrapperHourd">
              <h3 className="HeaderTextLocation">Location</h3>
              <p className="SubHeaderTextLocation">
                Tuesday to Friday 7AM - 3PM
              </p>
            </div>
          </div>

          <div className="Mondays">
            <div className="wrapperMondays">
              <h3 className="HeaderTextLocation">Mondays?</h3>
              <p className="SubHeaderTextLocation">
                We are closed on Mondays <br />
                to reflect and refuel
              </p>
            </div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Location;
