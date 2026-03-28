
import { FaLinkedin, FaGithub, FaDownload } from 'react-icons/fa';

function Navbar() {
  return (
    <header className="nav-bar">
      <div className="nav-logo">Illia Z.</div>
      <nav className="nav-links">
        <a href="/resume.pdf" download className="nav-link download-icon-btn">
          <FaDownload /> Resume
        </a>
        <a href="https://www.linkedin.com/in/illia-zolotko-809817354/" target="_blank" rel="noreferrer" className="nav-link">
          <FaLinkedin /> LinkedIn
        </a>
        <a href="https://github.com/brknn1" target="_blank" rel="noreferrer" className="nav-link">
          <FaGithub /> GitHub
        </a>
      </nav>
    </header>
  );
}

export default Navbar;