import React from "react";
import "./index.css";
import Beritaa from "../../../assets/images/img.jpg";

const Berita = ({}) => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col">
          <div className="card">
            <img className="card-img-top" src={Beritaa} alt="Pembunuhan" />
            <div className="card-bodyy">
              <p className="card-text">Selasa, 30 Januari 2000</p>
              <p className="card-text1">Pembunuhan Berantai</p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card">
            <img className="card-img-top" src={Beritaa} alt="Pembunuhan" />
            <div className="card-bodyy">
              <p className="card-text">Selasa, 30 Januari 2000</p>
              <p className="card-text1">Penculikan Anak Kecil</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <button type="button" class="btnn justify-content-end">
          Lebih banyak
        </button>
      </div>
    </div>
  );
};

export default Berita;
