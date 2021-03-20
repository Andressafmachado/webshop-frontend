import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchproductById } from "../store/products/actions";
import { selectProducts } from "../store/products/selectors";
import "./ProductCart.css";

export default function ProductDetails() {
  const dispatch = useDispatch();
  const product = useSelector(selectProducts);

  const { id } = useParams();
  // console.log("id no component", id);

  useEffect(() => {
    dispatch(fetchproductById(id));
  }, [dispatch, id]);

  return (
    <div>
      <h2>{product.name}</h2>
      <p>description: {product.description}</p>
      <p>price: {product.price}</p>
      <button>Add</button>
    </div>
  );
}
