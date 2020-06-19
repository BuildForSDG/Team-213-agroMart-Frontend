import React, { useState, useEffect } from "react";
//import data from './data';
import { Link } from "react-router-dom";
//import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { listProducts } from "../Actions/productActions";

const HomePage = (props) => {
  {
    /*Create hooks to fetch data from server */
  }
  //const [products, setProduct] = useState([]);
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listProducts());
    /*const fetchData = async () => {
      const { data } = await axios.get("/api/products");
      setProduct(data);
    };
    fetchData();*/
    return () => {
      //
    };
  }, []);

  return loading ? <div>Loading...</div> :
    error ? <div>{error}</div> :<ul className="content row products">
      {/*Fetch Data  from ./data in react: to be change later*/}
      {products.map((product) => (
        <li className="col-12 col-md-6 col-lg-4" key={product._id}>
          <div className="product">
            <Link className="links" to={"/product/" + product._id}>
              <img
                src={product.image}
                alt="fresh-tomatoe"
                className="prod-img"
              />
            </Link>

            <div className="prod-name">
              <Link className="links" to={"/product/" + product._id}>
                {product.name}
              </Link>
            </div>
            <div className="prod-category">{product.category}</div>
            <div className="prod-price"> GHC {product.price}</div>
            <div className="prod-rating">
              {product.rating} Stars {product.review}
            </div>
          </div>
        </li>
      ))}
    </ul>
  
};
export default HomePage;
