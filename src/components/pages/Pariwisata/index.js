import React from "react";
import "./index.css";
import Navbar from "../../molecules/NavBar";
import Logo from "../../../assets/icons/logo_kotabitung.svg";
import Header from "../../../assets/images/Header.svg";
import Headertop from "../../molecules/HeaderTop";
import Lembeh from "../../../assets/images/Lembeh.png";
import TentangKami from "../../molecules/Footer";
import Text from "../../atoms/Text";

const Pariwisata = ({ props }) => {
  return (
    <div>
      <Navbar pic={Logo} />
      <Headertop text="Pariwisata Lembeh Selatan Kota Bitung" pict={Lembeh} />
      <Text text="Tentang Kami" />
      <TentangKami />
    </div>
  );
};

export default Pariwisata;
