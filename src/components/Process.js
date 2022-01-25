import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Process = () => {
  const [state, setstate] = useState("");
  const items = document.getElementsByClassName("Process");

  let count = 3;

  console.log("count", count);

  const handleNext = (event) => {
    if (count < items.length) {
      items[Number(count)].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
      count++;
    } else {
      count = 3;
      items[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  const handlePrev = (event) => {
    if (count > 3) {
      count--;

      items[count - 3].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    } else {
      count = 3;
      items[0].scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  return (
    <div className="div4">
      <div className="bloc">
        <div className="prev-icon-div" onClick={handlePrev}>
          <FontAwesomeIcon className="prev-icon" icon="arrow-alt-circle-left" />
        </div>
        <div className="next-icon-div" onClick={handleNext}>
          <FontAwesomeIcon
            className="next-icon"
            icon="arrow-alt-circle-right"
          />
        </div>
        <div className="bloc1">
          <h3>Our Process :</h3>
        </div>
        <div className="bloc2">
          <div className="gallery">
            <div className="Process">
              <div className="title-box">
                <h3>Initial consultation</h3>
              </div>
              <div className="process-image-div">
                <img
                  className="slider"
                  src="https://res.cloudinary.com/dyj84szrx/image/upload/v1643018265/ricky/medium/Initial_consultation_umkxad.jpg"
                  alt="First meeting "
                />
              </div>
              <div>
                <p>STEP 1</p>
                <p>
                  Meeting with key decision-makers and stakeholders to
                  understand “what’s not working” and how this is negatively
                  affecting your business.
                </p>
              </div>
            </div>
            <div className="Process">
              {" "}
              <div className="title-box">
                <h3>Investigation of current supply chain process </h3>
              </div>
              <div className="process-image-div">
                <img
                  className="slider"
                  src="https://res.cloudinary.com/dyj84szrx/image/upload/v1643018265/ricky/medium/analyse_wkrdk4.jpg"
                  alt="Investigation  "
                />
              </div>
              <div>
                <p>STEP 2</p>
                <p>
                  Investigation of current supply chain process with different
                  departments (logistics/distribution, purchasing,
                  sales,IT,leadership, finance/accounting, etc.)
                </p>

                <p>
                  We learn about your current process and how it’s being
                  executed.
                </p>
              </div>
            </div>
            <div className="Process">
              <div className="title-box">
                <h3>Identification and communication of solutions</h3>
              </div>
              <div className="process-image-div">
                <img
                  className="slider"
                  src="https://res.cloudinary.com/dyj84szrx/image/upload/v1643018265/ricky/medium/collaborate_zgbsfn.jpg"
                  alt="communicate solutions meeting "
                />
              </div>{" "}
              <div>
                <p>STEP 3</p>
                <p>
                  Create solutions improving the supply chain to present to key
                  decision-makers for approval to implement.
                </p>
              </div>
            </div>
            <div className="Process">
              {" "}
              <div className="title-box">
                <h3>Implementation of new solutions</h3>
              </div>
              <div className="process-image-div">
                <img
                  className="slider"
                  src="https://res.cloudinary.com/dyj84szrx/image/upload/v1643018265/ricky/medium/implement_uu3dtu.jpg"
                  alt="Implementation solutions "
                />
              </div>{" "}
              <div>
                <p>STEP 4</p>
                <p>
                  Generate a plan to implement new business solutions into daily
                  operations with minimal disruption.
                </p>
              </div>
            </div>
            <div className="Process">
              <div className="title-box">
                <h3>Measure success of change</h3>
              </div>
              <div className="process-image-div">
                <img
                  className="slider"
                  src="https://res.cloudinary.com/dyj84szrx/image/upload/v1643018265/ricky/medium/sucess_tqzixs.jpg"
                  alt="First meeting "
                />
              </div>{" "}
              <div>
                <p>STEP 5</p>
                <p>Measure success of change against established benchmarks</p>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Process;
