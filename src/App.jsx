import { Routes, Route } from "react-router-dom";

import Header from './layouts/header/Header.jsx';
import Footer from './layouts/footer/Footer.jsx'
import Home from './layouts/main/home/Home.jsx';
import Movies from './layouts/main/movies/Movies.jsx'
import Series from './layouts/main/series/Series.jsx'
import Profiles from './layouts/main/profiles/Profiles.jsx'

export default function App() {
  return (
    <>
      <div className="container">
      <Header />

      <main>
        <Routes>
          <Route path="/" index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="series" element={<Series />} />

          <Route path="profiles" element={<Profiles />} />
        </Routes>
      </main>

      <Footer />
      </div>
    </>
  )
}