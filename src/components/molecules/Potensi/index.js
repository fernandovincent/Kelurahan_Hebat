import React from "react";
import "./index.css";
import Gambar1 from "../../../assets/images/1.jpg";
import Gambar2 from "../../../assets/images/2.jpg";
import Gambar3 from "../../../assets/images/3.jpg";
import Gambar4 from "../../../assets/images/4.jpg";

const Potensi = ({}) => {
  return (
    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
      <ol class="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={Gambar1} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5 className="texttop">Potensi Kelurahan</h5>
            <p className="textbottom">Wisata</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={Gambar2} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5 className="texttop">Potensi Kelurahan</h5>
            <p className="textbottom">Industri</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={Gambar3} class="d-block w-100" alt="..." />
          <div class="carousel-caption d-none d-md-block">
            <h5 className="texttop">Potensi Kelurahan</h5>
            <p className="textbottom">Kuliner</p>
          </div>
        </div>
      </div>
      <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="sr-only">Previous</span>
      </a>
      <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="sr-only">Next</span>
      </a>
    </div>
  );
};

export default Potensi;
