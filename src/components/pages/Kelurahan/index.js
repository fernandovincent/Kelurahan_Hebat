import React from "react";
import "./index.css";
import Navbar from "../../molecules/NavBar";
import Leader from "../../molecules/Leader";
import Menu from "../../molecules/Menu";
import Berita from "../../molecules/Berita";
import Covid from "../../molecules/Covid";
import TentangKami from "../../molecules/Footer";
import Text from "../../atoms/Text";
import Smalltext from "../../atoms/SmallText";
import Search from "../../atoms/Search";
import Logo from "../../../assets/icons/logo_kotabitung.svg";
import LogoSearch from "../../../assets/icons/SearchIcon.svg";
import Walikota from "../../../assets/images/Walikota.svg";
import Wakil from "../../../assets/images/Wakil.svg";
import VisiMisi from "../../../assets/images/VisiMisi.svg";
import Struktur from "../../molecules/Struktur";
import GambarStruktur from "../../../assets/images/Struktur.svg";
import Visimisi from "../../molecules/VisiMisi";
import Potensi from "../../molecules/Potensi";
import PotensiBtn from "../../atoms/PotensiBtn";

const Kelurahan = ({ props }) => {
  return (
    <div>
      <Navbar pic={Logo} />
      <Text text="Kelurahan Paceda" />
      <Smalltext smalltext="Madidir" />
      <Search search={LogoSearch} />
      <Text text="Pemimpin Kelurahan" />
      <Leader pic1={Walikota} pic2={Wakil} text1="Ir. Maurits Mantiri, MM" text2="Hengki Honandar, SE" text3="Walikota Bitung" text4="Wakil Walikota Bitung" />
      <Text text="Menu" />
      <Menu />
      <Struktur struktur="STRUKTUR ORGANISASI KELURAHAN PACEDA KECAMATAN MADIDIR KOTA BITUNG" gambarstruktur={GambarStruktur} />
      <Visimisi />
      <Text text="Potensi Kelurahan" />
      <Potensi />
      <PotensiBtn />
      <Text text="Berita Bitung" />
      <Berita />
      <Text text="Informasi Covid" />
      <Covid />
      <Text text="Tentang Kami" />
      <TentangKami />
    </div>
  );
};

export default Kelurahan;
