import React from "react";
import "./index.css";

const Struktur = ({ struktur, gambarstruktur }) => {
  return (
    <div>
      <h1 className="struktur">{struktur}</h1>
      <img className="struktur-pic" src={gambarstruktur} />
    </div>
  );
};

export default Struktur;
