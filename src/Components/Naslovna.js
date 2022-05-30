import "../styles.css";
import { Link } from "react-router-dom";
import natoSlika from "./nato.jpg";
export default function Naslovna() {
  return (
    <div className="App">
      <h1>NATO - fan page</h1>
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
            </tr>
          </table>
        </center>
      </div>
      <h2>opcenito o NATO-u</h2>
      <img className="slija" src={natoSlika} />
      <br />
      <p className="tekst">
        Organizacija Sjevernoatlantskog ugovora, naziva se još i
        Sjevernoatlantski savez, poznatiji po kratici NATO (od engleskog naziva
        North Atlantic Treaty Organisation, francuski Organisation du Traité de
        l'Atlantique Nord – OTAN), međunarodna je organizacija vojno-političke
        prirode, osnovana je 1949. godine potpisivanjem Sjevernoatlantskog
        ugovora (Washingtonski ugovor) između dvanaest država tadašnjeg zapadnog
        bloka. Danas se NATO sastoji od 30 država članica, od kojih 2
        angloameričke te 28 europskih.
      </p>
    </div>
  );
}
