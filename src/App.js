import "./styles.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Naslovna from "./Components/Naslovna";
import Members from "./Components/Members";
import Enlist from "./Components/Enlist";
import Roditelj from "./Components/Roditelj";
import Treca from "./Components/treca";

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Naslovna />}></Route>
          <Route path="/Members" element={<Members />}></Route>
          <Route path="/Enlist" element={<Enlist />}></Route>
          <Route path="/Roditelj" element={<Roditelj />}></Route>
          <Route path="/treca" element={<Treca />}></Route>
        </Routes>
      </BrowserRouter>
      {/* <Roditelj /> */}
    </div>
  );
}
