import React, { useRef } from "react";
import "./Button.css";

function Button({
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

  const onClick = (e) => {
    if (disableElevation) {
      e.stopPropagation();
    }
    handleAddElement(e);
  };

  const handleAddElement = (e) => {
    const button = buttonRef.current;
    const rect = button.getBoundingClientRect();
    const dataValue =
      2 *
      Math.max(buttonRef.current.clientWidth, buttonRef.current.clientHeight);
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    console.log(rect);
    console.log(` + ${e.clientX - rect.left}:${e.clientY - rect.top}`);

    console.log(x, y);
    button.style.setProperty("--mouse-x", x + "px");
    button.style.setProperty("--mouse-y", y + "px");
    button.style.setProperty("--data-Value", dataValue + "px");
  };

  if (component) {
    return (
      <>
        <input
          ref={buttonRef}
          type="file"
          id="upload"
          aria-label={aria_label}
          accept="image/*"
          multiple
          hidden
        />
        <label
          htmlFor="upload"
          className={`button ${variant} ${
            disabled ? `disabled disabled_type_${variant}` : ""
          } ${color ? color : ""} ${size ? size : ""}`}
        >
          {text}
        </label>
      </>
    );
  }

  return (
    <a
      ref={buttonRef}
      href={href}
      target="blank"
      disabled={disabled}
      className={`button ${variant} ${
        disabled ? `disabled disabled_type_${variant}` : ""
      } ${color ? color : ""} ${size ? size : ""}`}
      onClick={(e) => onClick(e)}
    >
      {text}
    </a>
  );
}

export default Button;
