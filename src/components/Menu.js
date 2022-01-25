import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Menu = ({ handleScroll }) => {
  const location = useLocation();
  return (
    <>
      {" "}
      {location.pathname === "/" ? (
        <div className="Menu-div">
          <div
            id="menu-2"
            onClick={(event) => {
              /*    console.log("hello", event); */
              handleScroll(event.target.id);
            }}
          >
            Our Expertise
          </div>
          <div
            id="menu-3"
            onClick={(event) => {
              handleScroll(event.target.id);
            }}
          >
            Your Results
          </div>
          <div
            id="menu-4"
            onClick={(event) => {
              handleScroll(event.target.id);
            }}
          >
            The Process
          </div>{" "}
          <div>
            <Link to="/case-studies" className="link">
              <div> Case Studies</div>
            </Link>
          </div>
          <div
            id="menu-5"
            onClick={(event) => {
              handleScroll(event.target.id);
            }}
          >
            About us
          </div>
          <Link to="/contact" className="link">
            <div className="menu-contact-div">
              Speak to a supply chain expert{" "}
            </div>
          </Link>
        </div>
      ) : (
        location.pathname !== "/contact" && (
          <div className="Menu-div">
            <Link to="/contact" className="link">
              <div className="menu-contact-div">
                Speak to a supply chain expert{" "}
              </div>
            </Link>
          </div>
        )
      )}
    </>
  );
};

export default Menu;
