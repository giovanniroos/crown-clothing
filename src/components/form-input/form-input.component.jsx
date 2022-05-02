import "./form-input.styles.scss";
const FormInput = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input className="form-input" {...otherProps} />
      {label && (
        <label
          className={`${
            otherProps.value.lenth ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
    </div>
  );
};

export default FormInput;

// <input
//         type="text"
//         required
//         onChange={changeHandler}
//         name="displayName"
//         value={value}
//       ></input>
