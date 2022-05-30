import "../styles.css";
import { Link } from "react-router-dom";
export default function Naslovna({ saji }) {
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
              <th>
                <Link to="/treca">Pridruži se</Link>
              </th>
            </tr>
          </table>
        </center>
      </div>
      <p>ide opcenito o NATO-u</p>
      <p>{}</p>
    </div>
  );
}
