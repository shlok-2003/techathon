import React, { useState } from 'react';
import { Bar, Line, Doughnut } from 'react-chartjs-2';
import { v4 as uuidv4 } from 'uuid';

const UserGoals = () => {
  const [goals, setGoals] = useState([]);
  const [currentGoal, setCurrentGoal] = useState('');
  const [goalProgress, setGoalProgress] = useState(0);

  const addGoal = () => {
    if (currentGoal.trim() !== '') {
      setGoals([...goals, { id: uuidv4(), goal: currentGoal, progress: goalProgress }]);
      setCurrentGoal('');
      setGoalProgress(0);
    }
  };

  const updateGoalProgress = (goalId, newProgress) => {
    setGoals((prevGoals) =>
      prevGoals.map((goal) =>
        goal.id === goalId ? { ...goal, progress: newProgress } : goal
      )
    );
  };

  const goalsBarChart = {
    labels: goals.map((goal) => goal.goal),
    datasets: [
      {
        label: 'Completed Milestones/Activities',
        data: goals.map((goal) => goal.progress),
      },
    ],
  };

  const goalsLineChart = {
    labels: goals.map((goal) => goal.goal),
    datasets: [
      {
        label: 'Progress Over Time',
        data: goals.map((goal) => goal.progress),
      },
    ],
  };

  const goalsDoughnutChart = {
    labels: goals.map((goal) => goal.goal),
    datasets: [
      {
        data: goals.map((goal) => goal.progress),
      },
    ],
  };

  return (
    <div>
      <h2>User-defined Social Impact Goals</h2>
      <div>
        <label>
          Goal:
          <input
            type="text"
            value={currentGoal}
            onChange={(e) => setCurrentGoal(e.target.value)}
          />
        </label>
        <label>
          Progress:
          <input
            type="number"
            value={goalProgress}
            onChange={(e) => setGoalProgress(parseInt(e.target.value, 10))}
          />
        </label>
        <button onClick={addGoal}>Add Goal</button>
      </div>
      <div>
        <Bar data={goalsBarChart} />
      </div>
      <div>
        <Line data={goalsLineChart} />
      </div>
      <div>
        <Doughnut data={goalsDoughnutChart} />
      </div>
    </div>
  );
};

export default UserGoals;
