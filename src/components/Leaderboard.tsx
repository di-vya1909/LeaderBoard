import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import "./Leaderboard.css";
import LinesComp from "./lines";

const Leaderboard: React.FC = () => {
  const scores = useSelector((state: RootState) => state.leaderboard.scores);

  // Sort scores in descending order (highest score first)
  const sortedScores = scores
    .slice()
    .sort((a: { score: number }, b: { score: number }) => b.score - a.score);

  return (
    <div className="leaderboard">
      <div className="heading">
        <LinesComp bgColor="orange" alignI="flex-start" flexD="column"/>
        <h1>Fastest of Today 🏆</h1>
        <LinesComp bgColor="blue" alignI="flex-end" flexD="column-reverse"/>
      </div>
      
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
