import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchOrderById } from "../store/order/actions";
import { selectOrders } from "../store/order/selectors";

export default function OrderDetails() {
  const dispatch = useDispatch();
  const orders = useSelector(selectOrders);
  const { id } = useParams();
  console.log("id ", id);

  useEffect(() => {
    dispatch(fetchOrderById(id));
  }, [dispatch, id]);

  return (
    <div>
      {!orders ? (
        <p>loading...</p>
      ) : (
        <div>
          <h2>Order Details:</h2>
          <p>stat us: {orders.status}</p>

          <p>
            Products:{" "}
            {!orders.products ? (
              <p>add your products here</p>
            ) : (
              <div>
                {orders.products.map((product) => {
                  return (
                    <div>
                      {product.name}
                      <br /> {product.price}
                    </div>
                  );
                })}
              </div>
            )}
          </p>

          <div>
            {" "}
            <h2>Delivery Information: </h2>
            <div>
              First Name: {orders.user.firstName}
              <br />
              Last Name: {orders.user.lastName}
              <br />
              address: {orders.user.address} <br />
              phone: {orders.user.phone} <br />
              email: {orders.user.email} <br />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
