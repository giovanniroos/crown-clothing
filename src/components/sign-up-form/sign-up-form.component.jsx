import { useState } from "react";
import {
  createAuthUserFromEmailPassword,
  createUserDocFromAuth,
} from "../../utils/firebase/firebase.utils";

const defaultFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(defaultFormFields);
  const { displayName, email, password, confirmPassword } = formFields;
  console.log(formFields);
  const clearFormFields = () => {
    setFormFields(defaultFormFields);
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords does not match");
      return;
    }
    try {
      const { user } = await createAuthUserFromEmailPassword(email, password);
      console.log(user);
      await createUserDocFromAuth(user, { displayName });
      clearFormFields();
    } catch (error) {
      console.log(error);
    }
  };
  

  return (
    <div>
      <h1>Sign up with email account</h1>
      <form onSubmit={handleSubmit}>
        <label>Display name</label>
        <input
          type="text"
          required
          onChange={handleChange}
          name="displayName"
          value={displayName}
        ></input>

        <label>Email</label>
        <input
          type="email"
          required
          onChange={handleChange}
          name="email"
          value={email}
        ></input>

        <label>Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="password"
          value={password}
        ></input>

        <label>Confirm Password</label>
        <input
          type="password"
          required
          onChange={handleChange}
          name="confirmPassword"
          value={confirmPassword}
        ></input>

        <button type="submit">Sign up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
