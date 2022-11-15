import "./AddElement.css";
function AddElement({ isElement, data, left, top }) {
  if (isElement) {
    return (
      <div
        className="element"
        style={{
          width: `${data}px`,
          height: `${data}px`,
          left: `${left}px`,
          top: `${top}px`,
        }}
      ></div>
    );
  }
}

export default AddElement;
