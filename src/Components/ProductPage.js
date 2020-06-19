import React, { useEffect, useState } from "react";
//import data from '../data';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { detailsProduct } from "../Actions/productActions";

const ProductPage = (props) => {
  // Hooks to handle add to cart
  const [qty, setQty] = useState(1);

  //
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(detailsProduct(props.match.params.id));
    dispatch(detailsProduct(props.match.params.id));
    return () => {
      // cleanup
    };
  }, []);
  // add to cart
  const handleAddToCart = () => {
    props.history.push("/cart/" + props.match.params.id + "?qty=" + qty);
  };
  return (
    <div className="container">
      <div className="row go-back">
        <Link to="/" className="links ">
          Go Back
        </Link>
      </div>
      {/*check loading*/}
      {loading ? (
        <div>loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="details">
          <div className="details-image ">
            <img src={product.image} alt="product-img" />
          </div>
          <div className="details-info">
            <ul>
              <li>
                <h2>{product.name}</h2>
              </li>
              <li>
                <h3>Description:</h3>
                <div>{product.description}</div>
              </li>
              <li>
                {" "}
                Category:
                <b> {product.category}</b>
              </li>
              <li>
                Price: <b>GHC {product.price}.00 </b>
              </li>
              <li>
                <h5>
                  {product.rating} Stars ({product.review}) Reviews
                </h5>
              </li>
            </ul>
            Add to Cart
            <div className="details-action">
              <ul className="p0 m0">
                <li>Price: {product.price}</li>
                <li>
                  Status:{" "}
                  {product.countInStock > 0 ? " In Stock. " : " Out of Stock."}
                </li>
                <li>
                  Qty:{" "}
                  <select
                    value={qty}
                    onChange={(e) => {
                      setQty(e.target.value);
                    }}
                  >
                    {[...Array(product.countInStock).keys()].map((x) => (
                      <option key={x + 1} value={x + 1}>
                        {" "}
                        {x + 1}{" "}
                      </option>
                    ))}
                  </select>
                </li>
                <li>
                  {product.countInStock > 0 && (
                    <button
                      onClick={handleAddToCart}
                      className="add-to-cart btn"
                      href="/cart"
                    >
                      {" "}
                      Add to Cart
                    </button>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default ProductPage;
