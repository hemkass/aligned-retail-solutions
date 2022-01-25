import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const HomeDiv1 = () => {
  return (
    <>
      <div className="home-slider-div">
        <div className="div1-Title">
          <h1>NEED HELP WITH YOUR SUPPLY CHAIN?</h1>
        </div>
        <div className="BackgroundImage">
          {/*  <img
        src="https://res.cloudinary.com/dyj84szrx/image/upload/v1642417376/ricky/fatigu%C3%A92_xx7mr4.jpg"
        alt=""
      /> */}
        </div>
      </div>{" "}
      <div className="div1-contact">
        <div className="div1-questions">
          <div className="left-question">
            <p>
              {" "}
              <FontAwesomeIcon className="chevron-right" icon="chevron-right" />
              Tired of retail chargebacks?
            </p>
            <p>
              {" "}
              <FontAwesomeIcon className="chevron-right" icon="chevron-right" />
              Too many late deliveries?
            </p>
            <p>
              {" "}
              <FontAwesomeIcon className="chevron-right" icon="chevron-right" />
              Lack of visibility?
            </p>
          </div>
          <div>
            <p>
              {" "}
              <FontAwesomeIcon className="chevron-right" icon="chevron-right" />
              Skyrocketing freight charges?
            </p>
            <p>
              {" "}
              <FontAwesomeIcon className="chevron-right" icon="chevron-right" />
              Problems with damaged freight?
            </p>
            <p>
              {" "}
              <FontAwesomeIcon className="chevron-right" icon="chevron-right" />
              Need to find a new carrier/3PL?
            </p>
            <p>
              {" "}
              <FontAwesomeIcon className="chevron-right" icon="chevron-right" />
              Frustrated with retail routing guide compliance?
            </p>
          </div>
        </div>
        <div className="div1-contact-text">
          <Link to="/contact" className="link">
            <div className="div1-contact-link">
              <h2>Speak to a supply chain expert</h2>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomeDiv1;
