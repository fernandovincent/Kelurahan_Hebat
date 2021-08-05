import React from "react";
import "./index.css";
import Icon1 from "../../../assets/icons/destination.svg";
import Icon2 from "../../../assets/icons/factory.svg";
import Icon3 from "../../../assets/icons/cookbook.svg";
import Icon4 from "../../../assets/icons/bullhorn.svg";

const PotensiBtn = () => {
  return (
    <div className="container">
      <div className="row btnPotensi">
        <div className="col">
          <a href="/pariwisata">
            <button type="button" class="btn btn-danger">
              <img className="btnIcon" src={Icon1} alt="" />
              <p>Wisata</p>
            </button>
          </a>
        </div>
        <div className="col">
          <a href="#">
            <button type="button" class="btn btn-danger">
              <img className="btnIcon" src={Icon2} alt="" />
              <p>Industri</p>
            </button>
          </a>
        </div>
        <div className="col">
          <a href="/kuliner">
            <button type="button" class="btn btn-danger">
              <img className="btnIcon" src={Icon3} alt="" />
              <p>Kuliner</p>
            </button>
          </a>
        </div>
        <div className="col">
          <a href="">
            <button type="button" class="btn btn-danger">
              <img className="btnIcon" src={Icon4} alt="" />
              <p>Sosial</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default PotensiBtn;
