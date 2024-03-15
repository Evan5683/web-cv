import React, { useState } from "react";
import "../styles/Tab.css";

function Tab({ title }) {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`tab ${hover ? "hover" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {title}
    </div>
  );
}

export default Tab;
