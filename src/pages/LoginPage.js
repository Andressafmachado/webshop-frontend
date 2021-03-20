import { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { login } from "../store/user/actions";

export default function LoginPage() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const onFormSubmit = (e) => {
    e.preventDefault();
    // console.log("login", email, password);
    dispatch(login(email, password, history));
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <form onSubmit={onFormSubmit}>
          <div>
            <label>email:</label>
            <input
              style={{ marginBottom: 10 }}
              type="email"
              value={email}
              name="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>password:</label>
            <input
              style={{ marginBottom: 10 }}
              type="password"
              value={password}
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit"> Submit</button>
        </form>
      </div>
    </div>
  );
}
