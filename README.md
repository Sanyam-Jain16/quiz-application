# QuizMania

A modern and interactive quiz application built with **React**. Users can select a category, answer timed multiple-choice questions, and view their final score.

---

## 🚀 Getting Started

Follow these steps to run the project locally:

```bash
# Clone the repository
git clone https://github.com/Sanyam-Jain16/quiz-application

# Navigate into the project directory
cd quiz-application

# Install dependencies
npm install

# Start the development server
npm run dev
```

## Problem Statement

This is a Quiz Application where:

- Users enter their name and select one of the four categories:

1. JavaScript Basics

2. React Advanced

3. Angular Basic

4. Flutter

- Each category contains 10 multiple-choice questions.

- A 10-second timer is set for each question.

- Users can select one option per question, but cannot change the answer once selected.

- A "Skip this question" button allows users to skip without answering.

- No answers are shown during the quiz to avoid bias.

- A progress bar with the question count (e.g., 9/10) and remaining time is displayed above each question.

- A header with the app logo and Exit Quiz button appears consistently on all pages.

- A final score screen displays the result and provides a Retake Quiz option.

## Completed Features

- User input for full name

- Category selection with four quiz options

- 10 questions per category from a JSON file

- Timer per question (10 seconds)

- Skip Question functionality

- Progress bar with:

- Time countdown

- Current question count out of total (e.g., 9 / 10)

- Final result screen with:

- Score summary

- "Retake Quiz" button

- Header with "Exit Quiz" and app name on every screen

- Cannot change selected answer once chosen

- Correct answers hidden during quiz

- Follows a clean, modern UI inspired by the provided design

- Uses plain CSS and JavaScript, no Tailwind or UI frameworks
