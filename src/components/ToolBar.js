import { Link } from "react-router-dom";
// import { selectUser } from "../store/auth/selectors";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// import { logout } from "../store/auth/actions";

export default function Toolbar() {
  //   const dispatch = useDispatch();
  //   const allUsers = useSelector(selectUser);
  //   console.log(`ALL USERS`, allUsers);

  return (
    //   !allUsers ? (
    <div>
      <div>
        <Link to={`/login`}>Login</Link>
      </div>
      <div>
        <Link to={`/signup`}>Signup</Link>
      </div>
    </div>
    //   ) : (
    //     <div>
    //       <div>{`Hi ${allUsers.name}, welcome`}</div>
    //       <div>
    //         <button
    //         onClick={() => dispatch(logout)}
    //         >Logout</button>
    //       </div>
    //     </div>
    //   );
  );
}
