import React from "react";
import "./index.css";

const Leader = ({ pic1, pic2, pic3, text1, text2, text3, text4, selengkapnya }) => {
  return (
    <div>
      <img className="Walikota-pic" src={pic1} />
      <img className="Wakil-pic" src={pic2} />
      <h1 className="Walikota-name">{text1}</h1>
      <h1 className="Wakil-name">{text2}</h1>
      <h2 className="Jabatan1">{text3}</h2>
      <h2 className="Jabatan2">{text4}</h2>
      <img className="visiMisi" src={pic3} />
    </div>
  );
};

export default Leader;
