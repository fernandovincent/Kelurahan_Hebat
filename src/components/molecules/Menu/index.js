import React from "react";
import "./index.css";
import Vektor from "../../../assets/icons/Vektor.svg";
import ProfilKelurahan from "../../../assets/icons/ProfilKelurahan.svg";
import Tentang from "../../../assets/icons/Tentang.svg";
import Laporan from "../../../assets/icons/Laporan.svg";
import Sarana from "../../../assets/icons/Sarana.svg";
import Informasi from "../../../assets/icons/Informasi.svg";
import Kegiatan from "../../../assets/icons/Kegiatan.svg";
import BUMN from "../../../assets/icons/BUMN.svg";
import IKM from "../../../assets/icons/IKM.svg";
import Pendidikan from "../../../assets/icons/Pendidikan.svg";

const Menu = () => {
  return (
    <div>
      <div className="menu-div mt-5">
        <div className="dropdown"></div>
        <button className="tombol">
          <p className="text-profil1">Profil Kelurahan</p>
          <img src={Vektor} className="vektor-img" />
          <img src={ProfilKelurahan} className="gambarprofil" />
        </button>
        <button className="tombol">
          <p className="text-profil2 tentangg">Tentang</p>
          <img src={Vektor} className="vektor-img" />
          <img src={Tentang} className="gambarprofil" />
        </button>
        <button className="tombol">
          <p className="text-profil3">Laporan Keuangan</p>
          <img src={Vektor} className="vektor-img" />
          <img src={Laporan} className="gambarprofil" />
        </button>
        <button className="tombol">
          <p className="text-profil4">Potensi & Prasana</p>
          <img src={Vektor} className="vektor-img" />
          <img src={Sarana} className="gambarprofil" />
        </button>
        <button className="tombol">
          <p className="text-profil5">Informasi</p>
          <img src={Vektor} className="vektor-img" />
          <img src={Informasi} className="gambarprofil" />
        </button>
      </div>
      <div className="menu-div2">
        <button className="tombol">
          <p className="text-profil6">Kegiatan</p>
          <img src={Vektor} className="vektor-img" />
          <img src={Kegiatan} className="gambarprofil" />
        </button>
        <button className="tombol">
          <p className="text-profil7">BUMNAS</p>
          <img src={Vektor} className="vektor-img" />
          <img src={BUMN} className="gambarprofil" />
        </button>
        <button className="tombol">
          <p className="text-profil8">Indeks Kepuasan Masyarakat</p>
          <img src={Vektor} className="vektor-img" />
          <img src={IKM} className="gambarprofil" />
        </button>
        <button className="tombol">
          <p className="text-profil9">Data Pendidikan</p>
          <img src={Vektor} className="vektor-img" />
          <img src={Pendidikan} className="gambarprofil" />
        </button>
      </div>
    </div>
  );
};

export default Menu;

// <div className="dropright">
//   <button className="tombol btn-menu dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
//     <img src={ProfilKelurahan} className="gambarprofil" />
//     <p className="text-profil">Profil Kelurahan</p>
//   </button>
//   <div class="dropdown-menu">
//     <a class="dropdown-item" href="#">
//       Action
//     </a>
//     <a class="dropdown-item" href="#">
//       Another action
//     </a>
//     <a class="dropdown-item" href="#">
//       Something else here
//     </a>
//     <div class="dropdown-divider"></div>
//     <a class="dropdown-item" href="#">
//       Separated link
//     </a>
//   </div>
// </div>
