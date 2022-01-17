import HomeDiv1 from "../components/Home-div1";
import Expertise from "../components/Expertise";
import YourResults from "../components/YourResults";
import Process from "../components/Process";

const Home = () => {
  return (
    <div>
      <div className="home-container">
        <div id="div-menu-1" className="div-intro">
          <HomeDiv1 />
          <h1></h1>
        </div>
        <div id="div-menu-2" className="div-expertise">
          <Expertise />
        </div>
        <div id="div-menu-3" className="div-results">
          <YourResults />
        </div>
        <div id="div-menu-4" className="div-process">
          <Process />
        </div>
        <div id="div-menu-5" className="div-about"></div>
      </div>
    </div>
  );
};

export default Home;
