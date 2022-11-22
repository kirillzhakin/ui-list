import React, { useRef } from "react";

import "./Checkbox.css";

function Checkbox({ id, checked, disabled, label }) {
  const checkboxRef = useRef();

  const handleChange = (e) => {
    const checkbox = checkboxRef.current;
    const rect = checkbox.getBoundingClientRect();
    console.log(checkboxRef.current.checked);
  };
  return (
    <label className={`checkbox ${disabled ? `disabled ` : ""} `}>
      <input
        ref={checkboxRef}
        id={id}
        type="checkbox"
        defaultChecked={checked}
        onChange={(e) => handleChange(e)}
      />
      <div
        className={`checkbox__checkmark ${disabled ? `disabled ` : ""}`}
      ></div>
      <div className="checkbox__body"></div>
      <span className="checkbox__label">{label}</span>
    </label>
  );
}

export default Checkbox;
