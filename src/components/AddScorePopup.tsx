// src/components/AddScorePopup.tsx
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addScore } from "../redux/leaderboardSlice";
import "./AddScorePopup.css";

const AddScorePopup: React.FC = () => {
  const [username, setUsername] = useState("");
  const [score, setScore] = useState("");
  const [currentTime, setCurrentTime] = useState<Date>();
  let d = new Date();
  let utc = d.getTime() + d.getTimezoneOffset() * 60000;
  let nd = new Date(utc + 3600000 * +5.5);

  useEffect(() => {
    setCurrentTime(nd);
  }, []);

  const dispatch = useDispatch();

  const handleSubmit = () => {
    dispatch(addScore({ username, score:parseInt(score,10), currentTime }));
    setUsername("");
    setScore("");
    setCurrentTime(nd);
  };

  return (
    <div className="popup">
      <h2>Add Score</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="text"
        placeholder="Score"
        value={score}
        onChange={(e) => setScore(e.target.value)}
      />
      <button onClick={handleSubmit}>Add</button>
    </div>
  );
};

export default AddScorePopup;
