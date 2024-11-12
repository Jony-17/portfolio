import "../styles/style.scss";
import NavLinks from "./NavLinks";
import LanguageToggle from "./LanguageToggle";
import DarkModeToggle from "./DarkModeToggle";

export default function Header() {
  return (
    <header>
      <nav>
        <div className="logo">Portfolio.</div>
        <div className="links">
          <ul className="nav-bar">
            <input type="checkbox" id="check" />
            <span className="menu">
              <NavLinks />

              <label htmlFor="check" className="close-menu">
                <i className="fas fa-times"></i>
              </label>

              <div className="icons">
                <LanguageToggle />
                <DarkModeToggle />
              </div>
            </span>
            <label htmlFor="check" className="open-menu">
              <i className="fas fa-bars"></i>
            </label>
          </ul>
        </div>
      </nav>
    </header>
  );
}
