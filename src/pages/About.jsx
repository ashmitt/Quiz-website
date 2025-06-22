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
        <img src="/meme.jpg" alt="Funny meme" className="meme-image" />
      </div>
    </div>
  );
} 