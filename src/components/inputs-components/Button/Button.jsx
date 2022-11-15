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
    console.log(e);
    const button = buttonRef.current;
    // const dataValue = 2*Math.max(
    //   buttonRef.current.clientWidth,
    //   buttonRef.current.clientHeight
    // );
    let x = e.pageX;
    let y = e.pageY; 
    button.style.setProperty("--mouse-x", x + "px");
    button.style.setProperty("--mouse-y", y + "px");
    // button.style.setProperty("--data-Value", dataValue + "px");
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
    <>
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
    </>
  );
}

export default Button;
