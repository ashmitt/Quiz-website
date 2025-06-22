import { Link } from 'react-router-dom';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <div className="hero">
      <div className="left">
        <h1>Ultimate Quiz Challenge</h1>
        <p>Sharpen your brain with this interactive quiz.</p>
        <Link to="/quiz"><button>Start Quiz</button></Link>
      </div>
      <div className="right">
        <img src="https://static.vecteezy.com/system/resources/previews/012/552/383/non_2x/hand-drawn-doodle-style-cartoon-quiz-symbol-free-vector.jpg" alt="Quiz" />
      </div>
    </div>
  );
} 