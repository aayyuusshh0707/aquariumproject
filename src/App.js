import Nav from "./Nav";
import Buy from "./Buy";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Visit from "./Visit";
import Footer from "./Footer";
import Animals from "./Animals";
import Explore from "./Explore";
import Purchase from "./Purchase";

function App() {
  return (
    <>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Explore" element={<Explore />} />
        <Route path="/Visit" element={<Visit />} />
        <Route path="/Buy" element={<Buy />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/Purchase" element={<Purchase />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
