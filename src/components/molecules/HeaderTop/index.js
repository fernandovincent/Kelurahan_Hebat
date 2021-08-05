import React from "react";
import "./index.css";
import Header from "../../../assets/images/Header.svg";
import Trikora from "../../../assets/images/Trikora.png";

const Headertop = ({ text, pict }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <img src={Header} alt="" className="headerpic" />
          <p className="textheader">{text}</p>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <img src={pict} alt="" className="pict" />
        </div>
      </div>
      <div className="row">
        <div className="col">
          <p className="mt-2 caption">
            Bitung merupakan salah satu kota yang berada di Sulawesi utara. Kota ini juga merupakan salah satu kota terbesar yang berada di Sulawesi Utara. Kota ini memang dikenal dengan keindahan alamnya yang masih terjaga dan alami. Tak
            heran saat ini setiap wisata yang berada di kota tersebut semakin dikembangkan untuk memajukan wisata di Bitung.<br></br>
            <br></br> Bitung juga memiliki mascot pariwisata yang cukup terkenal di kalangan wisatawan lokal maupun mancanegara. Selat lembeh ini yang memisahkan pulau lembeh dengan daratan Sulawesi. Pemandangan bawah lautnya lah yang
            menjadikannya dibuka menjadi destinasi wisata. <br></br> <br></br>Di tempat ini Anda bisa melihat berbagai satwa laut yang indah dan mempesona. Tak hanya itu saja, bahkan selat lembeh juga sudah diakui lokasi selam terbaik di
            dunia. Sehingga Anda tak perlu ragu lagi ketika ingin mengunjunginya untuk melihat lebih jelas kehidupan bawah laut dari selat lembeh ini. <br></br>Lokasi: Papusungan, Kec. Lembeh Selatan, Kota Bitung.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-7">
          <img src={Trikora} alt="" className="picture" />
        </div>
        <div className="col">
          <p className="mt-2 caption2">
            Di pulau Lembeh Anda akan menemukan tempat wisata berupa monumen Trikora Mandala Sakti yang sangat megah. Guna dibangunnya monumen ini untuk mengenang perjuangan dalam melawan penjajah Hindia belanda oleh rakyat pulau lembeh. Di
            monumen ini untuk pertama kalinya pasukan TNI mendarat sebelum bertolak ke Papua untuk penyerangan.<br></br>
            <br></br>Selain itu, tarif yang dikenakan untuk setiap wisatawan juga terjangkau. Tak heran wisata ini tak pernah sepi oleh wisatawan lokal maupun mancanegara. Anda bisa menambah wawasan dengan biaya yang murah. <br></br>
            <br></br>
            <br></br> Lokasi: Batulubang, Kec. Lembeh Selatan, Kota Bitung.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Headertop;
