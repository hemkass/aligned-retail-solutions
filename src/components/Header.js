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
        <img
          src="https://res.cloudinary.com/dyj84szrx/image/upload/v1643124748/ricky/logoblanc_mbltp3.png"
          alt="logo de Aligned retail solutions"
        />
      </div>
      {/*  {location.pathname === "/" && */}{" "}
      <Menu handleScroll={handleScroll} />
    </>
  );
};

export default Header;
