import Button from "../inputs-components/Button/Button";
import "./Inputs.css";

function Inputs() {
  return (
    <section className="inputs">
      <h2 className="inputs__title">Basic button</h2>
      <div className="inputs__container">
        <Button variant="text" text="text" />
        <Button variant="contained" text="contained" />
        <Button variant="outlined" text="outlined" />
      </div>
    </section>
  );
}

export default Inputs;
