import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <h2>About This App</h2>
      <div className="about-content">
        <p>Built using ReactJS, React Router, and CSS.</p>
        <p>Learned about Routing, LocalStorage, and Component Design.</p>
        <div className="features">
          <h3>Features:</h3>
          <ul>
            <li>Interactive quiz with timer</li>
            <li>Player registration</li>
            <li>Score tracking</li>
            <li>Leaderboard</li>
            <li>Responsive design</li>
          </ul>
        </div>
        
        <div className="social-links">
          <h3>Connect with me</h3>
          <div className="links-container">
            <a href="https://github.com/ashmitt" target="_blank" rel="noopener noreferrer">
              <img src="/github-logo.svg" alt="GitHub" />
              GitHub
            </a>
            <a href="https://instagram.com/ashm1t5" target="_blank" rel="noopener noreferrer">
              <img src="/instagram-logo.svg" alt="Instagram" />
              Instagram
            </a>
          </div>
        </div>

        <img src="https://th.bing.com/th/id/OIP.AFXf0nhepTFE_gONVqcdpQHaGX?r=0&rs=1&pid=ImgDetMain&cb=idpwebpc2" alt="Funny meme" className="meme-image" />
        <p color='blue'>Created by: <a href="https://github.com/ashmitt">Ashmit</a></p>
      </div>
    </div>
  );
} 