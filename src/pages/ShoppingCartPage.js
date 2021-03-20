import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../store/user/selectors";
import { fetchUserById } from "../store/user/actions";

export default function ShoppingCartPage() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  console.log(`user `, user);

  useEffect(() => {
    dispatch(fetchUserById(user));
  }, [dispatch, user]);

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
              <div>
                order number: {order.id}
                <br />
                status: {order.status}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
