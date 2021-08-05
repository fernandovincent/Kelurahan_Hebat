import React from "react";
import "./index.css";
import Navbar from "../../molecules/NavBar";
import Logo from "../../../assets/icons/logo_kotabitung.svg";
import Header from "../../../assets/images/Header.svg";
import Headertop from "../../molecules/HeaderTop";
import Lembeh from "../../../assets/images/Lembeh.png";
import TentangKami from "../../molecules/Footer";
import Text from "../../atoms/Text";
import Kulinertop from "../../molecules/KulinerTop";

const Kuliner = ({ props }) => {
  return (
    <div>
      <Navbar pic={Logo} />
      <Kulinertop text="Kuliner Kota Bitung" />
      <Text text="Tentang Kami" />
      <TentangKami />
    </div>
  );
};

export default Kuliner;
