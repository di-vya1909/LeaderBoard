// src/redux/leaderboardSlice.ts
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Score {
  username: string;
  score: number;
  currentTime: Date | undefined;
}

interface LeaderboardState {
  scores: Score[];
}

const initialState: LeaderboardState = {
  scores: [],
};

const leaderboardSlice = createSlice({
  name: "leaderboard",
  initialState,
  reducers: {
    addScore: (state, action: PayloadAction<Score>) => {
      state.scores.push(action.payload);
      state.scores.sort((a, b) => b.score - a.score); // Sort scores in descending order
      state.scores = state.scores.slice(0, 10);
    },
  },
});

export const { addScore } = leaderboardSlice.actions;
export default leaderboardSlice.reducer;
