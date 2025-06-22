import { useState, useEffect } from 'react';
import questions from '../data/questions';
import { useNavigate } from 'react-router-dom';
import './QuizEngine.css';

export default function QuizEngine() {
  const [index, setIndex] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(15);
  const [timeStats, setTimeStats] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (timer === 0) handleNext();
    const interval = setInterval(() => setTimer(t => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timer]);

  const handleOptionClick = (option) => {
    if (!selected) {
      setSelected(option);
      const isCorrect = questions[index].answer === option;
      if (isCorrect) setScore(s => s + 1);
    }
  };

  const handleNext = () => {
    setTimeStats([...timeStats, 15 - timer]);
    if (index + 1 < questions.length) {
      setIndex(index + 1);
      setSelected(null);
      setTimer(15);
    } else {
      const player = JSON.parse(localStorage.getItem('player'));
      const entry = {
        name: player.name,
        score,
        time: timeStats.reduce((a, b) => a + b, 0),
        date: new Date().toLocaleString()
      };
      const board = JSON.parse(localStorage.getItem('leaderboard')) || [];
      localStorage.setItem('leaderboard', JSON.stringify([...board, entry]));
      localStorage.setItem('latestScore', JSON.stringify(entry));
      navigate('/summary');
    }
  };

  return (
    <div className="quiz-container">
      <h2>Q{index + 1}: {questions[index].question}</h2>
      <ul className="options-list">
        {questions[index].options.map((opt, i) => (
          <li
            key={i}
            className={`option ${selected ? (opt === questions[index].answer ? 'correct' : opt === selected ? 'incorrect' : 'neutral') : ''}`}
            onClick={() => handleOptionClick(opt)}
          >
            {opt}
          </li>
        ))}
      </ul>
      <p className="timer">Time left: {timer}s</p>
      {selected && <button onClick={handleNext} className="next-button">Next</button>}
    </div>
  );
} 