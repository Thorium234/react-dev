import { useState, useEffect, useRef, useCallback } from 'react';

const QUESTIONS = [
  {
    question: 'What is the capital of France?',
    options: ['London', 'Berlin', 'Paris', 'Madrid'],
    correctAnswer: 'Paris',
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Venus', 'Mars', 'Jupiter', 'Saturn'],
    correctAnswer: 'Mars',
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    correctAnswer: 'Pacific Ocean',
  },
  {
    question: "Who wrote 'Romeo and Juliet'?",
    options: ['Charles Dickens', 'William Shakespeare', 'Jane Austen', 'Mark Twain'],
    correctAnswer: 'William Shakespeare',
  },
  {
    question: 'What is the chemical symbol for gold?',
    options: ['Go', 'Gd', 'Au', 'Ag'],
    correctAnswer: 'Au',
  },
  {
    question: 'Which year did World War II end?',
    options: ['1943', '1944', '1945', '1946'],
    correctAnswer: '1945',
  },
  {
    question: 'What is the speed of light approximately?',
    options: ['300,000 km/s', '150,000 km/s', '500,000 km/s', '100,000 km/s'],
    correctAnswer: '300,000 km/s',
  },
];

export default function Quiz({ onComplete }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [timeLeft, setTimeLeft] = useState(30);

  const scoreRef = useRef(0);
  const isAnsweredRef = useRef(false);
  const startTimeRef = useRef(0);

  useEffect(() => {
    startTimeRef.current = Date.now();
  }, []);

  const advanceToNext = useCallback(() => {
    if (currentIndex < QUESTIONS.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setSelectedAnswer(null);
      isAnsweredRef.current = false;
      setIsAnswered(false);
      setTimeLeft(30);
    } else {
      const totalTime = Math.floor((Date.now() - startTimeRef.current) / 1000);
      onComplete(scoreRef.current, totalTime, QUESTIONS.length);
    }
  }, [currentIndex, onComplete]);

  useEffect(() => {
    if (isAnsweredRef.current) return;

    setTimeLeft(30);

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [currentIndex]);

  useEffect(() => {
    if (timeLeft === 0 && !isAnsweredRef.current) {
      advanceToNext();
    }
  }, [timeLeft, advanceToNext]);

  const handleAnswerClick = (option) => {
    if (isAnsweredRef.current) return;

    setSelectedAnswer(option);
    isAnsweredRef.current = true;
    setIsAnswered(true);

    if (option === QUESTIONS[currentIndex].correctAnswer) {
      scoreRef.current += 1;
      setScore(scoreRef.current);
    }

    setTimeout(() => {
      advanceToNext();
    }, 800);
  };

  const currentQuestion = QUESTIONS[currentIndex];
  const progress = ((currentIndex + 1) / QUESTIONS.length) * 100;
  const isLowTime = timeLeft <= 10 && timeLeft > 0;

  return (
    <div className="quiz-container">
      <div className="quiz-card">
        <div className="quiz-header">
          <div className="quiz-progress-text">
            Question {currentIndex + 1} of {QUESTIONS.length}
          </div>
          <div className={`quiz-timer${isLowTime ? ' timer-warning' : ''}`}>
            {timeLeft}s
          </div>
        </div>

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>

        <h2 className="quiz-question">{currentQuestion.question}</h2>

        <div className="quiz-options">
          {currentQuestion.options.map((option, idx) => {
            let optionClass = 'quiz-option';
            if (isAnswered) {
              if (option === currentQuestion.correctAnswer) {
                optionClass += ' option-correct';
              } else if (option === selectedAnswer) {
                optionClass += ' option-incorrect';
              } else {
                optionClass += ' option-disabled';
              }
            }
            return (
              <button
                key={idx}
                className={optionClass}
                onClick={() => handleAnswerClick(option)}
                disabled={isAnswered}
              >
                <span className="option-letter">
                  {String.fromCharCode(65 + idx)}
                </span>
                <span className="option-text">{option}</span>
                {isAnswered && option === currentQuestion.correctAnswer && (
                  <span className="option-icon check-icon">{'\u2713'}</span>
                )}
                {isAnswered && option === selectedAnswer && option !== currentQuestion.correctAnswer && (
                  <span className="option-icon cross-icon">{'\u2717'}</span>
                )}
              </button>
            );
          })}
        </div>

        <div className="quiz-footer">
          <div className="quiz-score">
            Score: {score} / {currentIndex + (isAnswered ? 1 : 0)}
          </div>
        </div>
      </div>
    </div>
  );
}
