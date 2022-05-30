import "../styles.css";
import { Link } from "react-router-dom";

import Members from "./Members";
// import Treca from "./treca";
export default function Roditelj() {
  const clan = {
    nazivjedan: "Hrvatska",
    nazivdva: "SAD",
    nazivtri: "Njemačka",
    nazivcetri: "Francuska",
    nazivpet: "Kanada",
    nazivsest: "Belgija",
    nazivsedam: "Velika Britanija",
    nazivosam: "Grčka",
    nazivdevet: "Albanija",
    nazivdeset: "Italija"
  };

  return (
    <div>
      <Members
        naziv1="Hrvatska"
        naziv2="SAD"
        naziv3="Njemačka"
        naziv4="Francuska"
        naziv5="Kanada"
        naziv6="Belgija"
        naziv7="Velika Britanija"
        naziv8="Grčka"
        naziv9="Albanija"
        naziv10="Italija"
      />
      <Members salji={clan} />;{/* <Treca saji={clan} /> */}
    </div>
  );
}
