// src/components/PorductCart.js
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/products/actions";
import { Link } from "react-router-dom";
import { selectProducts } from "../store/products/selectors";

export default function ProductCart() {
  const dispatch = useDispatch();
  const allProducts = useSelector(selectProducts);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      {!allProducts ? (
        <div>loading</div>
      ) : (
        allProducts.map((product) => {
          return (
            <div className="products" key={product.id}>
              Product:
              <Link to={`/productdetails/${product.id}`}>{product.name}</Link>
              <br />
              Price: {product.price}
              <br />
              {product.imageUrl}
            </div>
          );
        })
      )}
    </div>
  );
}
