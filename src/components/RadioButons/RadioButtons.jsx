import Radio from "../Radio/Radio";
import "../../element.css";

function RadioButtons() {
  const handleChange = (e) => {
    console.log(e);
  };

  return (
    <section className="element">
      <h2 className="element__title">Radio Button</h2>

      <div className="element__container element__container_flex">
        <Radio
          id="radio-1"
          name="radio-buttons"
          checked="checked"
          label=""
          handleChange={handleChange}
        />
        <Radio
          id="radio-2"
          name="radio-buttons"
          checked=""
          disabled=""
          label=""
          handleChange={handleChange}
        />
        <Radio
          id="radio-3"
          name="radio-disabled"
          checked=""
          disabled="disabled"
          label=""
          handleChange={handleChange}
        />
        <Radio
          id="radio-4"
          name="radio-disabled"
          checked="checked"
          disabled="disabled"
          label=""
          handleChange={handleChange}
        />
      </div>

      <h2 className="element__title">Label</h2>
      <p className="element__text">You can provide a label to the Radio</p>

      <div className="element__container element__container_label">
        <Radio
          id="radio-5"
          name="number"
          checked="checked"
          label="First"
          handleChange={handleChange}
        />
        <Radio
          id="radio-6"
          name="number"
          checked=""
          disabled=""
          label="Second"
          handleChange={handleChange}
        />
        
      </div>
    </section>
  );
}

export default RadioButtons;
