export default function Results({ score, totalQuestions, totalTime, onRestart }) {
  const percentage = Math.round((score / totalQuestions) * 100);
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  const timeDisplay = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;

  let grade;
  let gradeClass;
  if (percentage >= 90) {
    grade = 'Excellent!';
    gradeClass = 'grade-excellent';
  } else if (percentage >= 70) {
    grade = 'Great job!';
    gradeClass = 'grade-good';
  } else if (percentage >= 50) {
    grade = 'Not bad!';
    gradeClass = 'grade-average';
  } else {
    grade = 'Keep practicing!';
    gradeClass = 'grade-poor';
  }

  return (
    <div className="results-container">
      <div className="results-card">
        <h1 className="results-title">Quiz Complete!</h1>
        <p className={`results-grade ${gradeClass}`}>{grade}</p>

        <div className="results-stats">
          <div className="stat-item">
            <span className="stat-label">Score</span>
            <span className="stat-value">
              {score} / {totalQuestions}
            </span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Percentage</span>
            <span className="stat-value">{percentage}%</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Total Time</span>
            <span className="stat-value">{timeDisplay}</span>
          </div>
        </div>

        <button onClick={onRestart} className="btn btn-primary btn-restart">
          Try Again
        </button>
      </div>
    </div>
  );
}
