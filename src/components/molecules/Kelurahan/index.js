import React from "react";
import "./index.css";

const Kelurahan = ({ paceda }) => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-4 col-sm-4 mt-5 kelurahan">
          <div className="card">
            <img className="card-img-top" src={paceda} alt="Kelurahan Paceda" />
            <div className="card-body">
              <p className="card-text">Kelurahan Paceda</p>
              <p className="card-text1">Madidir</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 mt-5 kelurahan">
          <div className="card">
            <img className="card-img-top" src={paceda} alt="Kelurahan Paceda" />
            <div className="card-body">
              <p className="card-text">Kelurahan Girian Indah</p>
              <p className="card-text1">Girian</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 col-sm-4 mt-5 kelurahan">
          <div className="card">
            <img className="card-img-top" src={paceda} alt="Kelurahan Paceda" />
            <div className="card-body">
              <p className="card-text">Kelurahan Mawali</p>
              <p className="card-text1">Lembeh Selatan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Kelurahan;
