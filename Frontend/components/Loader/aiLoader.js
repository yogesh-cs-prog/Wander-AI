import React, { useState, useEffect } from "react";

const AILoader = () => {
  const [dots, setDots] = useState("");

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => {
        if (prev.length < 3) {
          return prev + ".";
        }
        return "";
      });
    }, 500);

    return () => clearInterval(interval); // Clean up on unmount
  }, []);

  return (
    <div className="loader">
      <p>AI is searching{dots}</p>
    </div>
  );
};

export default AILoader;
