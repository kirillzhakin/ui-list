import Checkbox from "../Checkbox/Checkbox";
import "../../element.css";

function Checkboxs() {
  return (
    <section className="element">
      <h2 className="element__title">Basic checkboxes</h2>

      <div className="element__container element__container_flex">
        <Checkbox id="1" checked="checked" />
        <Checkbox id="2" checked="" />
        <Checkbox id="3" checked="" disabled="disabled" />
        <Checkbox id="4" checked="checked" disabled="disabled" />
      </div>

      <h2 className="element__title">Label</h2>
      <p className="element__text">You can provide a label to the Checkbox</p>

      <div className="element__container element__container_label">
        <Checkbox id="label" checked="checked" label="Label"/>
        <Checkbox id="disabled" checked="" disabled="disabled" label="Disabled"/>
      </div>
    </section>
  );
}

export default Checkboxs;
