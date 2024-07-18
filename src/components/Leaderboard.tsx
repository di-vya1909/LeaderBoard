import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import "./Leaderboard.css";

const Leaderboard: React.FC = () => {
  const scores = useSelector((state: RootState) => state.leaderboard.scores);

  // Sort scores in descending order (highest score first)
  const sortedScores = scores
    .slice()
    .sort((a: { score: number }, b: { score: number }) => b.score - a.score);

  return (
    <div className="leaderboard">
      <h1>Fastest of Today 🏆</h1>

      <ul className="list-container">
        {sortedScores.map((score, index) => (
          <li
            className="name-list"
            key={index}
            style={{ textDecoration: "none", listStyle: "none" }}
          >
            <div>
              <span className="rank">{index + 1}.</span>
              <span>{score.username} 👋</span>
            </div>
            <span>₹{score.score.toLocaleString()}</span>
            <span>
              {score.currentTime?.getHours()}:{score.currentTime?.getMinutes()}:
              {score.currentTime?.getSeconds()} ⏱️
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Leaderboard;
