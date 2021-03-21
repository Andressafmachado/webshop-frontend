import { useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { Link } from "react-router-dom";

export default function MyProfile() {
  const user = useSelector(selectUser);
  // console.log(`user `, user);

  return (
    <div>
      {!user ? (
        <div>loading...</div>
      ) : (
        <div>
          <h2>Personal Data: </h2>
          <div>
            First Name: {user.firstName}
            <br />
            Last Name: {user.lastName}
            <br />
            address: {user.address} <br />
            phone: {user.phone} <br />
            email: {user.email} <br />
          </div>

          <h2>Orders:</h2>
          {user.orders.map((order) => {
            return (
              <div key={order.id}>
                order number: {order.id}
                <br />
                status: {order.status}
                <br />
                <Link to={`/orderdetails/${order.id}`}>
                  {" "}
                  <button style={{ marginBottom: 20 }}>more details</button>
                </Link>{" "}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
