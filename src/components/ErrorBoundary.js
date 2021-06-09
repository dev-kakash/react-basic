import React from "react";

const ErrorBoundary = ({ heroName }) => {
  if (heroName == "Joker") {
    throw new Error("Not a hero");
  }
  return <div>{heroName}</div>;
};

export default ErrorBoundary;
