import { useState } from 'react';
import { AuthProvider } from './context/AuthProvider';
import { useAuth } from './hooks/useAuth';
import Auth from './components/Auth';
import Dashboard from './components/Dashboard';
import Quiz from './components/Quiz';
import Results from './components/Results';
import './App.css';

function AppContent() {
  const { user } = useAuth();
  const [view, setView] = useState(null);
  const [quizResult, setQuizResult] = useState(null);

  if (!user) {
    return <Auth />;
  }

  const currentView = view || 'dashboard';

  const handleStartQuiz = () => {
    setView('quiz');
    setQuizResult(null);
  };

  const handleQuizComplete = (score, totalTime, totalQuestions) => {
    setQuizResult({ score, totalTime, totalQuestions });
    setView('results');
  };

  const handleRestart = () => {
    setView('dashboard');
    setQuizResult(null);
  };

  if (currentView === 'quiz') {
    return <Quiz onComplete={handleQuizComplete} />;
  }

  if (currentView === 'results' && quizResult) {
    return (
      <Results
        score={quizResult.score}
        totalQuestions={quizResult.totalQuestions}
        totalTime={quizResult.totalTime}
        onRestart={handleRestart}
      />
    );
  }

  return <Dashboard onStart={handleStartQuiz} />;
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
