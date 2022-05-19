import location from "../images_src/point_location.png";

export const Main = (props) => {
  return (
    <section className="main--section">
      <div className="group--1">
        <div className="main--img">
          <img src={props.info.imageUrl} alt=""></img>
        </div>
        <div className="main--text">
          <div className="main--location">
            <img src={location} alt="marker" className="main--marker"></img>
            <p>{props.info.location.toUpperCase()}</p>
            <a
              href={props.info.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Google Maps!
            </a>
          </div>
          <h1>{props.info.title}</h1>
          <div className="main--date">
            <p>
              {props.info.startDate} - {props.info.endDate}
            </p>
          </div>
          <p>{props.info.description}</p>
        </div>
      </div>
      {props.barrita && <div className="barrita"></div>}
    </section>
  );
};
