import React from "react";

const QuizProgess = ({ current, questions, timer }) => {
  return (
    <div className="quiz-progress-wrapper">
      <div className="quiz-count">
        <span className="quiz-current">{current + 1}</span>
        <span className="quiz-total"> / {questions.length}</span>
      </div>
      <div className="quiz-timer">
        {timer < 10 ? `0:0${timer}` : `0:${timer}`}
      </div>
      <div className="quiz-progress-bar">
        <div
          className="quiz-progress-fill"
          style={{
            width: `${((current + 1) / questions.length) * 100}%`,
          }}
        ></div>
      </div>
    </div>
  );
};

export default QuizProgess;
