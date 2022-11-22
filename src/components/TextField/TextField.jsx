import "./TextField.css";

function TextField({ variant, id, name, checked, disabled, label }) {
  const handleChange = (e) => {
    console.log(e);
  };
  const handleBlur =(e)=> {
    console.log(e.target);
    if(e.target.value) {
      e.target.classList.add('dirty');
    } else {
      e.target.classList.remove('dirty');
    }
  }
  return (
      <label class={`input ${variant} `} >
      <input
        type="text"
        name={name}
        id={id}
        placeholder=" "
        autocomplete="off"
        onChange={handleChange}
        onBlur={(e) => handleBlur(e)}
      />
      <span class="placeholder">{label}</span>
      </label>
      
  );
}

export default TextField;
