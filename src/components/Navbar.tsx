import "../css/Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <a href="#" className="logo-link">
          <img className="logo" src="/src/assets/logo.png" alt="Rising Sun Logo" />
        </a>
      </div>
      <div className="center-links">
        <a className="nav-link" href="#">
          New Songs
        </a>
        <a className="nav-link" href="#">
          New Albums
        </a>
        <a className="nav-link" href="#">
          Trending
        </a>
      </div>
      <div className="right-links">
        <a className="nav-link" href="#">
          Login
        </a>
      </div>
    </nav>
  );
}
