import React from "react";
import "./index.css";
import Garis from "../../../assets/icons/Line.svg";
import GarisAkhir from "../../../assets/icons/Line(end).svg";
import Logo from "../../../assets/icons/logo_kotabitung.svg";
import Call from "../../../assets/icons/Call.svg";
import Location from "../../../assets/icons/Location.svg";
import Message from "../../../assets/icons/Message.svg";
import Facebook from "../../../assets/icons/Facebook.svg";
import Twitter from "../../../assets/icons/Twitter.svg";
import Instagram from "../../../assets/icons/Instagram.svg";
import Youtube from "../../../assets/icons/Youtube.svg";

const TentangKami = (props) => {
  return (
    <div className="container">
      <div className="row justify-content-between">
        <div className="col">
          <img src={Garis} className="lineleft" />
        </div>
        <div className="col">
          <img src={Garis} className="lineright" />
        </div>
      </div>
      <div className="main-footer">
        <div className="row">
          <div className="col-4">
            <img src={Logo} className="LogoKotaBitung" />
            <h4 className="title-footer">Kelurahan Hebat</h4>
            <p className="text-portal">Portal Resmi Kelurahan Hebat Kota Bitung</p>
            <ul className="list-unstyled text">
              <li>
                <img src={Location} /> Pemerintahan Kota Bitung, Sulawesi Utara Jl. Sam Ratulangi No.45
              </li>
              <li className="styling2">
                <img src={Call} /> +0123 xxx xxxx
              </li>
              <li className="styling3">
                <img src={Message} /> pemkotbitung@bitungkota.go.id
              </li>
            </ul>
          </div>
          {/* {Column1} */}
          <div className="col"></div>
          <div className="medsos">
            <p className="sosmed">Media Social</p>
            <img className="fb" src={Facebook} />
            <img className="twitt" src={Twitter} />
            <img className="ig" src={Instagram} />
            <img className="yt" src={Youtube} />
          </div>
          <div className="row justify-content-center">
            <img src={GarisAkhir} className="end" />
          </div>
        </div>
      </div>
      <div className="row justify-content-center text-center mt-3">
        <p className="col text-akhir">Copyright &copy;{new Date().getFullYear()} Pemerintah Kota Bitung. Kominfo. All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default TentangKami;
