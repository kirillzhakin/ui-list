import React, { useRef } from "react";
import "./IconButton.css";

function IconButton({ color, aria_label }) {
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
      <label htmlFor="upload" className={`${color ? color : ""}`}>
        <svg
          className="button__icon"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="PhotoCameraIcon"
        >
          <circle cx="12" cy="12" r="3.2"></circle>
          <path d="M9 2 7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"></path>
        </svg>
      </label>
    </>
  );
}

export default IconButton;
