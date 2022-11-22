import Button from "../Button/Button";
import IconButton from "../IconButton/IconButton";
import "../../element.css";

function Buttons() {
  return (
    <section className="element">
      <h2 className="element__title">Basic button</h2>
      <p className="element__text">
        The Button comes with three variants: text (default), contained, and
        outlined.
      </p>
      <div className="element__container">
        <Button variant="text" text="text" />
        <Button variant="contained" text="contained" />
        <Button variant="outlined" text="outlined" />
      </div>
      <h2 className="element__title">Text button</h2>
      <p className="element__text">
        Text element are typically used for less-pronounced actions, including
        those located: in dialogs, in cards. In cards, text element help
        maintain an emphasis on card content.
      </p>
      <div className="element__container">
        <Button variant="text" text="primary" />
        <Button variant="text" text="disabled" disabled="disabled" />
        <Button variant="text" text="link" href="" />
      </div>
      <h2 className="element__title">Contained button</h2>
      <p className="element__text">
        Contained element are high-emphasis, distinguished by their use of
        elevation and fill. They contain actions that are primary to your app.
      </p>
      <div className="element__container">
        <Button variant="contained" text="contained" />
        <Button variant="contained" text="disabled" disabled="disabled" />
        <Button variant="contained" text="link" href="" />
      </div>
      <p className="element__text">
        You can remove the elevation with the disableElevation prop.
      </p>
      <div className="element__container  element__container_flex">
        <Button variant="contained" text="disable Elevation" disableElevation />
      </div>
      <h2 className="element__title">Outlined button</h2>
      <p className="element__text">
        Outlined element are medium-emphasis element. They contain actions that
        are important but aren't the primary action in an app. Outlined element
        are also a lower emphasis alternative to contained element, or a higher
        emphasis alternative to text button
      </p>
      <div className="element__container">
        <Button variant="outlined" text="primary" />
        <Button variant="outlined" text="disabled" disabled="disabled" />
        <Button variant="outlined" text="link" href="" />
      </div>

      <h2 className="element__title">Color</h2>
      <div className="element__container">
        <Button variant="text" text="secondary" color="secondary" />
        <Button variant="contained" text="success" color="success" />
        <Button variant="outlined" text="error" color="error" />
      </div>

      <h2 className="element__title">Sizes</h2>
      <p className="element__text">
        For larger or smaller element, use the size prop.
      </p>
      <div className="element__container element__container_size">
        <div>
          <Button variant="text" text="small" size="small" />
          <Button variant="text" text="medium" size="medium" />
          <Button variant="text" text="large" size="large" />
        </div>
        <div>
          <Button variant="outlined" text="small" size="small" />
          <Button variant="outlined" text="medium" size="medium" />
          <Button variant="outlined" text="large" size="large" />
        </div>
        <div>
          <Button variant="contained" text="small" size="small" />
          <Button variant="contained" text="medium" size="medium" />
          <Button variant="contained" text="large" size="large" />
        </div>
      </div>
      <h2 className="element__title">Upload button</h2>

   
      <div className="element__container  element__container_flex">
        <Button variant="contained" text="Upload" aria_label="upload picture" component="label" />
        <IconButton color="primary" aria-label="upload picture"></IconButton>
      </div>
    </section>
  );
}

export default Buttons;
