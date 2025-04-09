import { useState, useEffect } from "react";
import { questionsJSON } from "../utils/quizJson";
import QuizProgess from "./QuizProgess";

const QuizBox = () => {
  const [name, setName] = useState("");
  const [started, setStarted] = useState(false);
  const [category, setCategory] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [current, setCurrent] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [timer, setTimer] = useState(10);
  const [unanswered, setUnanswered] = useState(0);
  const [completed, setCompleted] = useState(false);
  const [showRules, setShowRules] = useState(false);

  useEffect(() => {
    let interval;
    if (started && !completed && timer > 0) {
      interval = setInterval(() => setTimer((prev) => prev - 1), 1000);
    } else if (timer === 0 && !completed) {
      handleNext();
    }
    return () => clearInterval(interval);
  }, [timer, started, completed]);

  const handleStart = () => {
    if (!category || !name.trim()) return;
    const selected = questionsJSON.categories.find((c) => c.id === category);
    setQuestions(selected.questions);
    setStarted(true);
    setTimer(selected.questions[0]?.timeLimit || 10);
  };

  const handleNext = () => {
    if (selectedAnswer === null) {
      setUnanswered(unanswered + 1);
    } else {
      const correct = questions[current].correctAnswer;
      if (questions[current].options[selectedAnswer].startsWith(correct)) {
        setScore(score + 1);
      }
    }

    const next = current + 1;
    if (next < questions.length) {
      setCurrent(next);
      setSelectedAnswer(null);
      setTimer(questions[next].timeLimit || 10);
    } else {
      setCompleted(true);
    }
  };

  const getFeedback = () => {
    const percentage = (score / questions.length) * 100;
    if (percentage >= 80) return "Great job!";
    if (percentage >= 50) return "Good effort!";
    return "Keep practicing!";
  };

  const RulesModal = () => (
    <div className="modal-overlay">
      <div className="modal">
        <div className="modal-header">
          <h2>Quiz Rules</h2>
          <button className="modal-close" onClick={() => setShowRules(false)}>
            ✖
          </button>
        </div>
        <div className="modal-content">
          <div className="rule-section">
            <strong>10-Second Timer</strong>
            <ul>
              <li>Each question has a 10-second timer.</li>
              <li>If not answered in time, it moves automatically.</li>
            </ul>
          </div>
          <div className="rule-section">
            <strong>Navigation</strong>
            <ul>
              <li>Use "Next" or "Skip" to move forward manually.</li>
            </ul>
          </div>
          <div className="rule-section">
            <strong>Final Result</strong>
            <ul>
              <li>Your score and a message will be shown at the end.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );

  if (!started) {
    return (
      <div className="app-wrapper">
        {showRules && <RulesModal />}
        <header className="app-header">
          <h1>
            Welcome to <span className="highlight">QUIZ</span>
            <span className="bold">Mania</span>
          </h1>
          <div className="rules-box">
            <p>Please read all the rules about this quiz before you start.</p>
            <button className="rules-link" onClick={() => setShowRules(true)}>
              Quiz rules
            </button>
          </div>
        </header>
        <div className="form-section">
          <label>Full name</label>
          <input
            type="text"
            placeholder="Full name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label style={{ marginTop: "1rem" }}>
            Please select topic to continue
          </label>
          <div className="grid-2">
            {questionsJSON.categories.map((cat) => (
              <button
                key={cat.id}
                className={`btn-radio ${
                  category === cat.id ? "btn-selected" : ""
                }`}
                onClick={() => setCategory(cat.id)}
              >
                {cat.name}
              </button>
            ))}
          </div>
          <button
            className="btn-primary"
            onClick={handleStart}
            style={{ marginTop: "1.5rem" }}
          >
            Start Quiz
          </button>
        </div>
      </div>
    );
  }

  if (completed) {
    return (
      <div className="app-wrapper">
        <div className="result-box">
          <h2>Quiz Completed</h2>
          <p>
            Score: {score} / {questions.length}
          </p>
          <p>Unanswered: {unanswered}</p>
          <p className="feedback">{getFeedback()}</p>
          <button
            className="btn-primary"
            onClick={() => window.location.reload()}
          >
            Retake Quiz
          </button>
        </div>
      </div>
    );
  }
  return (
    <div className="app-wrapper">
      <QuizProgess current={current} questions={questions} timer={timer} />
      <div className="quiz-box">
        <div className="quiz-header">
          <div>{questions[current].question}</div>
        </div>
        <div className="quiz-options">
          {questions[current].options.map((opt, i) => {
            const selected = selectedAnswer === i;
            let className = "btn";
            if (selected) className += " btn-selected";
            return (
              <button
                key={i}
                className={className}
                onClick={() => setSelectedAnswer(i)}
              >
                {opt}
              </button>
            );
          })}
        </div>
        <div className="btn-actions">
          <button className="btn-secondary" onClick={handleNext}>
            Skip
          </button>
          <button className="btn-primary" onClick={handleNext}>
            {current === questions.length - 1 ? "Finish" : "Next"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default QuizBox;
