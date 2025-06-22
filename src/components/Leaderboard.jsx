import { useState, useEffect } from 'react';
import './Leaderboard.css';

export default function Leaderboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const local = JSON.parse(localStorage.getItem('leaderboard')) || [];
    setData(local);
  }, []);

  return (
    <div className="leaderboard-container">
      <h2>Leaderboard</h2>
      {data.length === 0 ? (
        <p className="no-data">No scores yet. Be the first to play!</p>
      ) : (
        <div className="leaderboard-list">
          {data.map((entry, idx) => (
            <div key={idx} className="leaderboard-entry">
              <span className="rank">{idx + 1}</span>
              <span className="name">{entry.name}</span>
              <span className="score">{entry.score}</span>
              <span className="time">{entry.time}s</span>
              <span className="date">{entry.date}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
} 