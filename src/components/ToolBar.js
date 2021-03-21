import { Link } from "react-router-dom";
// import { selectUser } from "../store/auth/selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../store/user/actions";
import { selectUser } from "../store/user/selectors";

export default function Toolbar() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  return (
    <div>
      <div>
        {" "}
        <Link to={`/`}>Home</Link>
      </div>
      <div>
        {" "}
        <Link to={`/myprofile`}>My Profile</Link>
      </div>
      <div>
        {" "}
        <Link to={`/cart`}>Shopping Cart</Link>
      </div>
      <div>
        {!user ? (
          <div>
            <div>
              <Link to={`/login`}>Login</Link>
            </div>
            <div>
              <Link to={`/signup`}>Signup</Link>
            </div>
          </div>
        ) : (
          <div>
            <div>{`Hi ${user.firstName}, welcome`}</div>
            <div>
              <button onClick={() => dispatch(logout)}>Logout</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
