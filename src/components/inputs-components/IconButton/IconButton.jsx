import React, { useRef } from "react";
import "./IconButton.css";

function IconButton({
  variant,
  text,
  href,
  disabled,
  disableElevation,
  color,
  size,
  component,
  aria_label,
}) {
  const buttonRef = useRef();

  return (
    <>
      <input
        ref={buttonRef}
        type="file"
        id="upload"
        aria-label={aria_label}
        hidden
      />
      <label htmlFor="upload" className={`${color ? color : ""}`}></label>
    </>
  );
}

export default IconButton;
