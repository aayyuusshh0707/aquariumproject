import React, { lazy, Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import Footer from "./Footer";
import Loader from "./Loader";
// Lazy loading components
const Buy = lazy(() => import("./Buy"));
const Home = lazy(() => import("./Home"));
const Visit = lazy(() => import("./Visit"));
const Animals = lazy(() => import("./Animals"));
const Explore = lazy(() => import("./Explore"));
const Purchase = lazy(() => import("./Purchase"));

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
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
      </Suspense>
    </>
  );
}

export default App;
