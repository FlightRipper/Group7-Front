import React from "react";
import "./GoBack.css";

const GoBack = () => {
  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div>
      <button className="koussa" onClick={handleGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default GoBack;
