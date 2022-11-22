import "./Radio.css";

function Radio({ handleChange, id, name, checked, disabled, label }) {
  return (
    <label className={`radio ${disabled ? `disabled ` : ""} `}>
      <input
        id={id}
        name={name}
        type="radio"
        defaultChecked={checked}
        onChange={(e) => handleChange(e)}
      />
      <div className={`radio__checkmark ${disabled ? `disabled ` : ""}`}></div>
      <div className="radio__body"></div>
      <span className="radio__label">{label}</span>
    </label>
  );
}

export default Radio;
