import TextField from "../TextField/TextField";
import "../../element.css";

function TextFields() {
  return (
    <section className="element">
      <h2 className="element__title">Basic TextField</h2>
      <p className="element__text">
        The TextField wrapper component is a complete form control including a
        label, input, and help text. It comes with three variants: outlined
        (default), filled, and standard.
      </p>

      <form className="element__container">
        <TextField variant="outlined-default"  id="text-1" name="text" label="Outlined" />
        <TextField  variant="filled" id="text-2" name="text" label="Filled" />
        <TextField variant="standard" id="text-3" name="text" disabled="" label="Standard" />
      </form>
    </section>
  );
}

export default TextFields;
