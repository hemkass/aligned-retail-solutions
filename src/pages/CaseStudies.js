import CaseData from "../JSON/CaseStudies.json";
const CaseStudies = () => {
  return (
    <div>
      <div className="div6">
        {/*   <div className="div-title">
          <h1>LOGISTICS SOLUTIONS THAT STAND THE TEST OF TIME</h1>
        </div> */}
        <div className="bloc">
          <div className="bloc1">
            <h3>Case studies:</h3>
          </div>
          <div className="bloc2">
            {CaseData.map((elem) => {
              return (
                <div key={elem.ID} className="case-study-box">
                  <div></div>
                  <div>
                    <h3>{elem.title}</h3>
                  </div>
                  <div>
                    <p>{elem.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
