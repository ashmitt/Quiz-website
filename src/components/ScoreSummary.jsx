import { useNavigate } from 'react-router-dom';
import './ScoreSummary.css';

export default function ScoreSummary() {
  const scoreData = JSON.parse(localStorage.getItem('latestScore')) || {};
  const navigate = useNavigate();

  return (
    <div className="summary-container">
      <h2>Quiz Finished!</h2>
      <div className="score-details">
        <p><strong>Name:</strong> {scoreData.name}</p>
        <p><strong>Score:</strong> {scoreData.score}</p>
        <p><strong>Total Time:</strong> {scoreData.time}s</p>
        <p className="result-message">
          {scoreData.score >= 2 ? "🎉 Quiz Champion! 🎉" : "☕ More caffeine maybe?"}
        </p>
      </div>
      <button onClick={() => navigate('/')} className="play-again-button">
        Play Again
      </button>
    </div>
  );
} 