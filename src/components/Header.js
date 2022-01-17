import { Link } from "react-router-dom";
import Menu from "./Menu";
import { useLocation, useNavigate } from "react-router-dom";

const Header = ({ handleScroll }) => {
  const navigate = useNavigate();

  const handleScrollUp = (elem) => {
    navigate("/");
    if (document.getElementById(`div-${elem}`)) {
      document
        .getElementById(`div-${elem}`)
        .scrollIntoView({ behavior: "smooth" });
    }
  };

  const location = useLocation();
  return (
    <>
      <div
        id="menu-1"
        onClick={(event) => {
          /*    console.log("hello", event); */
          handleScrollUp(event.target.id);
        }}
        className="logo-div"
      >
        Logo
      </div>

      {location.pathname === "/" && <Menu handleScroll={handleScroll} />}
    </>
  );
};

export default Header;
