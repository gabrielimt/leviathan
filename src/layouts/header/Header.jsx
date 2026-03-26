import "./Header.css"
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1 id="logo">Leviathan</h1>
      <nav>
        <Link className="nav_link" to="/">Home</Link>
        <Link className="nav_link" to="/movies">Movies</Link>
        <Link className="nav_link" to="/series">Series</Link>
      </nav>
      <div id="profiles">
        <Link to="/profiles">Profiles</Link>
      </div>
    </header>
  );
}