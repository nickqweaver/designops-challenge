import React from "react";

export const Button = ({ size, title, onClick }) => {
  const buttonStyles = {
    padding:
      size === "small"
        ? "4px 8px"
        : size === "medium"
        ? "8px 16px"
        : "12px 24px",
    borderRadius: "8px",
    backgroundColor: "#87dfd6",
    border: "none",
    color: "white",
    outline: "none",
    cursor: "pointer",
  };
  return (
    <button onClick={onClick} style={buttonStyles}>
      {title}
    </button>
  );
};
