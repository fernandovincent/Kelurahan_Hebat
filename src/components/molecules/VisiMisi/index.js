import React from "react";
import "./index.css";
import KotakVisi from "../../../assets/icons/KotakVisi.svg";
import KotakMisi from "../../../assets/icons/KotakMisi.svg";
import Visi from "../../../assets/illustrations/Visi.svg";
import Misi from "../../../assets/illustrations/Misi.svg";

const Visimisi = ({ props }) => {
  return (
    <div className="container bungkus">
      <div className="row">
        <div className="col-4">
          <img className="visi" src={Visi} />
        </div>
        <div className="col">
          <img class="kotakvisi-svg" src={KotakVisi} />
          <h1 className="visi-title">VISI</h1>
          <p className="visi-main">
            Perencanaan pembangunan di Kota Bitung merupakan suatu alur kajian perencanaan berdasarkan prinsip perencanaan pembangunan daerah. Prinsip perencanaan pembangunan daerah pada dasarnya menekankan pada integrasi kondisi, potensi
            serta dinamika yang ada di daerah, nasional bahkan global. Dengan memperhatikan sepenuhnya visi Kepala Daerah terpilih, maka visi pemerintah Kota Bitung tahun 2016-2021 adalah:
            <b>“Bitung yang Maju, Berdaya Saing, Berbudaya, dan Sejahtera menjadi Titik Simpul dan Pintu Gerbang Indonesia di Kawasan Asia Pasifik”</b>
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <img class="kotakmisi-svg" src={KotakMisi} />
          <h1 className="misi-title">MISI</h1>
          <p className="misi-main">
            Untuk mewujudkan visi tersebut diatas, sesuai dengan harapan terwujudnya Bitung kota industri dan bahari yang sejahtera, berbudaya, berdaya saing serta sebagai pintu gerbang indonesia di kawasan Asia Pasifik, maka disusun misi
            pembangunan Kota Bitung tahun 2016-2021 sebagai berikut :
            <b>
              Mewujudkan masyarakat Kota Bitung yang religius, aman, damai, berbudaya dan sejahtera. Meningkatkan sumberdaya manusia dan pelayanan publik yang berkualitas. Mengembangkan dan mengoptimalkan ekonomi kerakyatan dan sumber daya
              pariwisata yang memiliki daya saing. Membangun dan menciptakan iklim investasi yang bertumpu pada agroindustri, agrobisnis, industri rumah tangga yang ramah lingkungan. Meningkatkan pembangunan infrastruktur, aksesibilitas dan
              mobilitas ekonomi daerah. Mewujudkan Bitung sebagai Pintu gerbang Indonesia di kawasan Asia Pasifik dengan kota yang bercirikan kota industri dan bahari.
            </b>
          </p>
        </div>
        <div className="col">
          <img className="misi" src={Misi} />
        </div>
      </div>
    </div>
  );
};

export default Visimisi;
