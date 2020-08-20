import React from "react";

export const Text = (props) => {
  const { tag, color, fontWeight, children } = props;
  const textStyle = {
    color: color || "#333",
    fontWeight: fontWeight || "normal",
  };
  return tag === "p" ? (
    <p style={textStyle}>{children}</p>
  ) : tag === "h1" ? (
    <h1 style={textStyle}>{children}</h1>
  ) : tag === "h2" ? (
    <h2 style={textStyle}>{children}</h2>
  ) : tag === "h3" ? (
    <h3 style={textStyle}>{children}</h3>
  ) : (
    <span style={textStyle}>{children}</span>
  );
};
