import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddPlayerForm.css';

export default function AddPlayerForm() {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('general');
  const [difficulty, setDifficulty] = useState('easy');
  const navigate = useNavigate();

  const handleSubmit = () => {
    const player = { name, category, difficulty };
    localStorage.setItem('player', JSON.stringify(player));
    navigate('/quiz/start');
  };

  return (
    <div className="form-container">
      <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
        <h2>Enter Your Details</h2>
        <input 
          value={name} 
          onChange={e => setName(e.target.value)} 
          placeholder="Enter your name" 
          required
        />
        <select value={category} onChange={e => setCategory(e.target.value)}>
          <option value="general">General Knowledge</option>
        </select>
        <select value={difficulty} onChange={e => setDifficulty(e.target.value)}>
          <option value="easy">Easy</option>
        </select>
        <button disabled={!name}>Start Quiz</button>
      </form>
    </div>
  );
} 