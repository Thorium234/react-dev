# QuizMaster

A fully functional quiz application built with React 19 and Vite. Features user authentication, a timed quiz with 7 trivia questions, and detailed results.

## Tech Stack

- **React 19** — Functional components with Hooks
- **Vite 8** — Build tool and dev server
- **Plain CSS** — Single global stylesheet (`src/App.css`)
- **localStorage** — Persistent user data and session management

## Features

- **User Authentication** — Register and login with email/password; session persists across page refreshes
- **Dashboard** — Welcome message, quiz instructions, and a Start Quiz button
- **Timed Quiz** — 7 multiple-choice questions, 30 seconds per question, auto-advance on timeout
- **Answer Feedback** — Correct/incorrect highlighting with checkmark and cross icons
- **Results** — Final score, percentage, total time spent, and performance grade
- **Responsive** — Works on mobile and desktop

## Getting Started

```bash
npm install
npm run dev
```

Open the URL shown in the terminal (default `http://localhost:5173`).

## Build

```bash
npm run build
npm run preview
```
