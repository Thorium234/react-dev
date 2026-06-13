import { useAuth } from '../hooks/useAuth';

export default function Dashboard({ onStart }) {
  const { user, logout } = useAuth();

  return (
    <div className="dashboard-container">
      <div className="dashboard-card">
        <div className="dashboard-header">
          <div>
            <h1>Welcome, {user.name}!</h1>
            <p className="dashboard-email">{user.email}</p>
          </div>
          <button onClick={logout} className="btn btn-outline">
            Log Out
          </button>
        </div>

        <div className="dashboard-body">
          <h2>Quiz Instructions</h2>
          <ul className="instructions">
            <li>You will be presented with <strong>7 questions</strong> covering various topics.</li>
            <li>Each question has <strong>4 options</strong>. Choose the correct one.</li>
            <li>You have <strong>30 seconds</strong> per question to select an answer.</li>
            <li>If you don&apos;t answer in time, the question will be marked as incorrect.</li>
            <li>Your score and total time will be shown at the end.</li>
            <li>Press start when you&apos;re ready to test your knowledge!</li>
          </ul>

          <button onClick={onStart} className="btn btn-primary btn-start">
            Start Quiz
          </button>
        </div>
      </div>
    </div>
  );
}
