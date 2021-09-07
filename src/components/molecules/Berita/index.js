import React, { useState, useEffect } from "react";
import "./index.css";
import Beritaa from "../../../assets/images/1583912506113.jpg";

const url = "http://localhost:3001/tampilBerita";

const Berita = () => {
  const [beritas, setBeritas] = useState([]);

  const getBerita = async () => {
    const response = await fetch(url);
    const beritas = await response.json();
    setBeritas(beritas.values);
    // console.log(beritas);
  };
  useEffect(() => {
    getBerita();
  }, []);

  const Testing = () => {
    return (
      <>
        {beritas.map((berita) => {
          // console.log(berita.judul_berita);
          return (
            <div className="container">
              <div className="row mt-5">
                <div className="col">
                  <div className="card" key={berita.id_berita}>
                    <img className="card-img-top" src={"assets/images/" + berita.cover_berita} alt="Pembunuhan" />
                    <div className="card-bodyy">
                      <p className="card-text">{berita.tgl_berita}</p>
                      <p className="card-text1">{berita.judul_berita}</p>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="card">
                    <img className="card-img-top" src={"../../../assets/images/" + berita.cover_berita} alt="Pembunuhan" />
                    <div className="card-bodyy">
                      <p className="card-text">{berita.tgl_berita}</p>
                      <p className="card-text1">{berita.judul_berita}</p>
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
        })}
      </>
    );
  };

  return (
    <div>
      <Testing />
    </div>
  );
};

export default Berita;
