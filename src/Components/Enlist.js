import "../styles.css";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import uncle from "./uncleSam.jpg";

export default class Enlist extends Component {
  state = {
    ime: "",
    prezima: "",
    godine: ""
  };
  onSubmit = (e) => {
    e.preventDefault();
    console.log("forma je prosljedena", this.state);
  };
  render() {
    return (
      <div>
        <h1>UČLANI SE</h1>
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
        <br /> <br /> <br /> <br />
        <form>
          <input
            placeholder="ime"
            value={this.state.ime}
            onChange={(e) => this.setState({ ime: e.target.value })}
          />

          <input
            placeholder="prezime"
            value={this.state.prezime}
            onChange={(e) => this.setState({ prezime: e.target.value })}
          />

          <input
            placeholder="godine"
            value={this.state.lozinka}
            onChange={(e) => this.setState({ godine: e.target.value })}
          />
          <br />
          <br />
          <button onClick={() => this.onSubmit()}>Submit</button>
          <br />
          <br />
        </form>
        <img className="sam" src={uncle} />
      </div>
    );
  }
}
