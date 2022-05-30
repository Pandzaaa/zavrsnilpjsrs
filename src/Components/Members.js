import "../styles.css";
import { Link } from "react-router-dom";
import Roditelj from "./Roditelj";
import Slika1 from "./cro.jpg";
import Slika2 from "./usa.jpg";
import Slika3 from "./njem.jpg";
import Slika4 from "./fran.jpg";
import Slika5 from "./can.jpg";
import Slika6 from "./bel.jpg";
import Slika7 from "./uk.jpg";
import Slika8 from "./greek.jpg";
import Slika9 from "./alb.jpg";
import Slika10 from "./ital.jpg";

export default function Members({
  salji,
  naziv1,
  naziv2,
  naziv3,
  naziv4,
  naziv5,
  naziv6,
  naziv7,
  naziv8,
  naziv9,
  naziv10
}) {
  let obj = {
    jedan: naziv1,
    dva: naziv2,
    tri: naziv3,
    cetri: naziv4,
    pet: naziv5,
    sest: naziv6,
    sedan: naziv7,
    osam: naziv8,
    devet: naziv9,
    deset: naziv10
  };
  return (
    <div className="App">
      <h1>NATO - Članovi</h1>
      <div className="navBar">
        <center>
          <table>
            <tr>
              <th>
                <Link to="/">Main page</Link>
              </th>
              <th>
                <Link to="/Members">Članovi NATO-a</Link>
              </th>
              <th>
                <Link to="/Enlist">Pridruži se</Link>
              </th>
              {/* <th>
                <Link to="/treca">treka</Link>
              </th> */}
            </tr>
          </table>
        </center>
      </div>

      <img className="cro" src={Slika1} />
      <p>
        {salji}
        {obj.jedan}
        <h2>Hrvatska</h2>
      </p>
      <br />
      <img src={Slika2} />
      <p>
        {salji}
        <h2>Sjedinjene Američke Države</h2>
      </p>
      <br />
      <img src={Slika3} />
      <p>
        {salji}
        <h2>Njemačka</h2>
      </p>
      <br />
      <img src={Slika4} />
      <p>
        {salji}
        <h2>Francuska</h2>
      </p>
      <br />
      <img src={Slika5} />
      <p>
        {salji}
        <h2>Kanada</h2>
      </p>
      <br />
      <img src={Slika6} />
      <p>
        {salji}
        <h2>Belgija</h2>
      </p>
      <br />
      <img src={Slika7} />
      <p>
        {salji}
        <h2>Ujedinjeno Kraljevstvo</h2>
      </p>
      <br />
      <img src={Slika8} />
      <p>
        {salji}
        <h2>Grčka</h2>
      </p>
      <br />
      <img src={Slika9} />
      <p>
        {salji}
        <h2>Albanija</h2>
      </p>
      <br />
      <img src={Slika10} />
      <p>
        {salji}
        <h2>Italija</h2>
      </p>
      <br />
    </div>
  );
}
