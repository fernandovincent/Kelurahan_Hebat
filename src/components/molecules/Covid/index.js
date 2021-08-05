import React from "react";
import "./index.css";
import Covid19 from "../../../assets/illustrations/Covid.svg";

const Covid = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col">
          <img src={Covid19} className="corona-svg" alt="Corona Virus" />
        </div>
        <div className="col">
          <p className="corona-text">
            Koronavirus atau coronavirus (istilah populernya: virus korona, virus corona, atau virus Corona) adalah sekumpulan virus dari subfamili Orthocoronavirinae dalam keluarga Coronaviridae dan ordo Nidovirales. Kelompok virus ini
            yang dapat menyebabkan penyakit pada burung dan mamalia (termasuk manusia).
          </p>
        </div>
      </div>
      <div>
        <button type="button" class="btnn btn3 justify-content-end">
          Lebih banyak
        </button>
      </div>
    </div>
  );
};

export default Covid;
