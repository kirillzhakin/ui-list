import Checkbox from "../Checkbox/Checkbox";
import "../../index.css";

function Checkboxs() {
  return (
    <section className="element">
      <h2 className="element__title">Basic checkboxes</h2>

      <div className="element__container element__container_flex">
        <Checkbox checked="checked" />
        <Checkbox checked="" />
        <Checkbox checked="" disabled="disabled" />
        <Checkbox checked="checked" disabled="disabled" />
      </div>

      <h2 className="element__title">Label</h2>
      <p className="element__text">You can provide a label to the Checkbox</p>

      <div className="element__container element__container_label">
        <Checkbox checked="checked" label="Label"/>
        <Checkbox checked="" disabled="disabled" label="Disabled"/>
      </div>
    </section>
  );
}

export default Checkboxs;
