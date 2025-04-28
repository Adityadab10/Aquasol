import React from "react";
import { useNavigate } from "react-router-dom";
import "./HoverButton.css"; // Import the CSS file

function HoverButton({ text, to }) {
  const navigate = useNavigate(); // Initialize the navigate function

  const handleClick = () => {
    navigate(to); // Navigate to the specified route
  };

  return (
    <button className="hover-button" onClick={handleClick}>
      {text}
    </button>
  );
}

export default HoverButton;