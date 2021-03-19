import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ProductDetails from "../components/ProductDetails";
import { fetchproductById } from "../store/products/actions";

export default function ProductDetailsPage() {
  return (
    <div>
      <h2>SPRODUCT DETAILS PAGE:</h2>
      <ProductDetails />
    </div>
  );
}
