import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/" onClick={handleLinkClick}>QuizApp</Link>
      </div>
      <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
        &#9776; {/* Hamburger Icon */}
      </div>
      <ul className={menuOpen ? "nav-links open" : "nav-links"}>
        <li><Link to="/" onClick={handleLinkClick}>Home</Link></li>
        <li><Link to="/quiz" onClick={handleLinkClick}>Start Quiz</Link></li>
        <li><Link to="/leaderboard" onClick={handleLinkClick}>Scores</Link></li>
        <li><Link to="/about" onClick={handleLinkClick}>About</Link></li>
      </ul>
    </nav>
  );
} 