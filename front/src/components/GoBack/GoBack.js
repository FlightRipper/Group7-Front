import React from "react";
import "./GoBack.css";

const GoBack = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div>
      <button className="gb_button" onClick={handleGoBack}>
        <span className="gb_text">Go Back</span>
      </button>
    </div>
  );
};

export default GoBack;
