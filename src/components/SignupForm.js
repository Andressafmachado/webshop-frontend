import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { signUp } from "../store/user/actions";

export default function SignupForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const history = useHistory();

  const onFieldChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const onFormSubmit = (e) => {
    e.preventDefault();
    const { firstName, email, password } = formData;
    dispatch(signUp(firstName, email, password, history));
  };

  return (
    <div>
      <form onSubmit={onFormSubmit}>
        <label>name:</label>
        <input
          style={{ marginBottom: 10, marginTop: 10 }}
          type="texto"
          value={formData.firstName}
          name="firstName"
          onChange={onFieldChange}
        ></input>
        <br />

        <label>email:</label>
        <input
          type="email"
          style={{ marginBottom: 10 }}
          value={formData.email}
          name="email"
          onChange={onFieldChange}
        ></input>
        <br />

        <label>password:</label>
        <input
          style={{ marginBottom: 10 }}
          type="password"
          value={formData.password}
          name="password"
          onChange={onFieldChange}
        ></input>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
