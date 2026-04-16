export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>&copy; {new Date().getFullYear()} Intan Maharani. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/intan-maharani-81633128b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/intannz" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.instagram.com/in.tz_/" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://s.id/Portofolio_Intan" target="_blank" rel="noopener noreferrer">Microsite</a>
        </div>
      </div>
    </footer>
  );
}