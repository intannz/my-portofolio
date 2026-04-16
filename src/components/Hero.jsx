import profilePic from '../assets/img/me.png'; 

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <p style={{ color: 'var(--primary)', fontWeight: 'bold' }}>Hello, I'm Intan Maharani</p>
          <h1>A passionate <br/> Designer & Developer</h1>
          <p>I craft beautiful, responsive, and user-centric digital experiences from frontend to backend architecture.</p>
          <a href="#projects" className="btn-primary">View My Work</a>
        </div>
        <div className="hero-image">
          <img src={profilePic} alt="Profile" />
        </div>
      </div>
    </section>
  );
}