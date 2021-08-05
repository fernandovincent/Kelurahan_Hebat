import React from "react";
import "./index.css";
import Header from "../../../assets/images/Header.svg";
import Beritaa from "../../../assets/images/img.jpg";

const Kulinertop = ({ text }) => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col">
          <img src={Header} alt="" className="headerpic" />
          <p className="textheader">{text}</p>
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <p className="caption">
            Bitung merupakan nama sebuah kota yang berada di Provinsi Sulawesi Utara, Indonesia. Bitung menawarkan keindahan alam yang luar biasa untuk didatangi. Selain indahnya alam, berbagai kuliner lezat juga bisa Anda jumpai saat
            datang ke kota Pelabuhan di tepi Selat Lembeh ini. <br></br>
            <br></br>Selain berwisata, mencoba lezatnya kuliner dengan cita rasa khas Bitung juga menjadi hal seru yang bisa Anda coba,berbagai rempah khas yang digunakan di Kota ini sehingga membuat lidah bergetar, nikmatnya cita rasa
            lokal dari Kota Bitung.
          </p>
        </div>
        <div className="col-6">
          <div className="row tophead">
            <div className="col">
              <div className="card">
                <img className="card-img-top" src={Beritaa} alt="Pembunuhan" />
                <div className="card-bodyy">
                  <p className="card-text">Selasa, 30 Januari 2000</p>
                  <p className="card-text1">Pembunuhan Berantai</p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img className="card-img-top" src={Beritaa} alt="Pembunuhan" />
                <div className="card-bodyy">
                  <p className="card-text">Selasa, 30 Januari 2000</p>
                  <p className="card-text1">Penculikan Anak Kecil</p>
                </div>
              </div>
            </div>
            <div>
              <button type="button" class="btnnn">
                Lebih banyak
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col textfood">
          <b>1. Rumah Makan Kim-Kim</b>
          <br></br> Rumah Makan Kim Kim menjadi salah satu wisata kuliner di Bitung yang wajib Anda coba. Biasanya, wisatawan yang datang ke Bitung menyempatkan untuk berwisata kuliner di rumah makan yang satu ini. Karena buka di pagi hari,
          pastikan Anda tidak datang kesiangan jika ingin mencoba kuliner di Rumah Makan Kim Kim. <br></br>
          <br></br>Menu yang dihidangkan cukup sederhana dan disajikan dengan bumbu serta rempah tradisional yang lezat. Saat ingin mencoba makanan berat di pagi hari, Anda bisa memesan nasi kuning yang dihidangkan dengan lauk lengkap.
          Selain itu, menu mi cakalang juga menjadi menu favorit di Rumah Makan Kim Kim. <br></br>
          <br></br>
          <b>2. Riverside Resto N Café</b>
          <br></br> Wisata kuliner di Bitung yang bisa Anda datangi salah satunya adalah Riverside Resto N Café. Sesuai dengan namanya, resto yang satu ini berlokasi di pinggiran sungai. Selain itu, terdapat kolam ikan koi dan miniatur
          kapal. Suasana yang ditawarkan sangat alami dan sejuk. <br></br>
          <br></br>Presiden Indonesia Joko Widodo pernah datang dan menikmati hidangan di Riverside Resto N Café lho. Ada banyak menu yang ditawarkan disana diantaranya ikan tuna, sayur paku, dan masih banyak lagi. Tempatnya yang luas
          menjadikan Riverside Resto N Café cocok digunakan untuk makan bersama kaluarga, acara, dan lain-lain.<br></br>
          <br></br>
          <b>3. Rumah Makan Dapoer Sagerat</b>
          <br></br> Rumah Makan Dapoer Sagerat menjadi salah satu tempat wisata kuliner yang bisa Anda datangi di Bitung. Ada banyak menu yang ditawarkan untuk pengunjung. Cita rasa masakan yang lezat menjadi hal utama yang bisa Anda
          dapatkan. Selain itu, asrinya suasana di Rumah Makan Dapoer Sagerat sayang untuk dilewatkan.<br></br>
          <br></br> Karena tempatnya yang luas, Rumah Makan Dapoer Sagerat sering disewa sebagai tempat acara. Beberapa acara yang terselenggara disana seperti rapat, gathering, hingga pernikahan. Area parkir Rumah Makan Dapoer Sagerat juga
          sangat luas. Rumah Makan Dapoer Sagerat masuk ke dalam daftar wisata kuliner di Bitung yang bisa Anda datangi.<br></br>
          <br></br> <b>4. CR Café</b>
          <br></br> Saat ingin mencoba wisata kuliner dengan konsep santai, CR Café bisa menjadi tujuan Anda saat di Bitung. Tempatnya yang unik dan kekinian menjadikan café yang satu ini banyak diminati. Tersedia 2 pilihan tempat duduk
          yakni indoor dan outdoor. <br></br>
          <br></br>CR Café juga dikenal menawarkan pelayanan yang ramah. Tidak hanya itu, adanya live music juga menjadikan CR Café cocok dikunjungi bersama teman maupun pasangan. Indahnya pemandangan yang ditawarkan membuat pengunjung
          bertah berlama-lama di CR Café.<br></br>
          <br></br> <b>5. Rumah Makan Mutiara Minang</b>
          <br></br> Apa yang Anda pikirkan saat mendengar nama Rumah Makan Mutiara Minang? Mungkin beberapa orang akan membayangkan restoran Padang dengan lauk yang tertata rapi dan melimpah. Namun, Rumah Makan Mutiara Minang yang berada di
          Bitung tidak hanya dikenal dengan masakan padangnya, melainkan juga olahan seafoodnya. <br></br>
          <br></br>Rumah Makan Mutiara Minang menawarkan berbagai olahan seafood yang dimasak dengan bumbu dan aroma yang menggugah selera. Ruman Makan Mutiara Minang menjadi salah satu wisata kuliner di Bitung yang sayang untuk dilewatkan.
        </div>
      </div>
    </div>
  );
};

export default Kulinertop;
