import React from "react";
import "./../public/header.css";

const Header = () => {
  const handleExit = () => {
    if (window.confirm("Are you sure you want to exit the quiz?")) {
      window.location.replace("/");
    }
  };

  return (
    <header className="app-header">
      <div className="logo">
        <span className="quiz">QUIZ</span>
        <span className="mania">Mania</span>
      </div>
      <button className="exit-btn" onClick={handleExit}>
        Exit Quiz
      </button>
    </header>
  );
};

export default Header;
