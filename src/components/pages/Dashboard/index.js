import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Navbar from "../../molecules/NavBar";
import Leader from "../../molecules/Leader";
import Informasi from "../../molecules/Informasi";
import Kelurahan from "../../molecules/Kelurahan";
import Berita from "../../molecules/Berita";
import Covid from "../../molecules/Covid";
import Text from "../../atoms/Text";
import Smalltext from "../../atoms/SmallText";
import Search from "../../atoms/Search";
import Selengkapnya from "../../atoms/Selengkapnya";
import Logo from "../../../assets/icons/logo_kotabitung.svg";
import LogoSearch from "../../../assets/icons/SearchIcon.svg";
import Walikota from "../../../assets/images/Walikota.svg";
import Wakil from "../../../assets/images/Wakil.svg";
import VisiMisi from "../../../assets/images/VisiMisi.svg";
import Paceda from "../../../assets/images/Paceda.svg";
import TentangKami from "../../molecules/Footer";

const Dashboard = (props) => {
  return (
    <div>
      <Navbar pic={Logo} />
      <Text text="Portal Kelurahan Hebat" />
      <Smalltext smalltext="Bitung Digital City" />
      <Search search={LogoSearch} />
      <Text text="Pemimpin Kota" />
      <Leader pic1={Walikota} pic2={Wakil} pic3={VisiMisi} text1="Ir. Maurits Mantiri, MM" text2="Hengki Honandar, SE" text3="Walikota Bitung" text4="Wakil Walikota Bitung" />
      <Selengkapnya selengkapnya="Selengkapnya" />
      <Informasi />
      <Text text="Kelurahan di Kota Bitung" />
      <Smalltext smalltext="Daftar kelurahan yang ada di Kota Bitung" />
      <Kelurahan paceda={Paceda} />
      <a href="/daftarkelurahan">
        <Selengkapnya selengkapnya="Selengkapnya" />
      </a>
      <Text text="Berita Bitung" />
      <Berita />
      <Text text="Informasi Covid" />
      <Covid />
      <Text text="Tentang Kami" />
      <TentangKami />
    </div>
  );
};

export default Dashboard;
