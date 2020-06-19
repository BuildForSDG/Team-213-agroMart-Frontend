import React, { useEffect, useState} from 'react';
//import data from '../data';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { detailsProduct } from '../Actions/productActions';


const ProductPage = (props) => {
    // Hooks to handle add to cart
    const [qty, setQty] = useState(1);

    //
    const productDetails = useSelector(state => state.productDetails);
    const { product, loading, error } = productDetails;
    const dispatch = useDispatch();

    useEffect(() => {
        console.log(detailsProduct(props.match.params.id));
        dispatch(detailsProduct(props.match.params.id));
        return () => {
            // cleanup
        }
    }, []);
    /*
     //Get product id and print to console 
    console.log(props.match.params.id);
     //find id in data.product and pass it variable "product" 
    const product = data.products.find(x => x._id === props.match.params.id);
    */
    return (
         
        <div className="container">
            <div className="row go-back">
                <Link to="/" className="links ">Go Back</Link>
            </div>
            {/*check loading*/}
            {loading ? <div>loading...</div> :
                error ? <div>{error}</div> :
                    (
                        <div className="details">
                            <div className="details-image ">
                                <img src={product.image} alt="product-img" />
                            </div>
                            <div className="details-info" >
                                <ul>
                                    <li>
                                        <h2>{product.name}</h2>

                                    </li>
                                    <li>
                                        <h3>Description:</h3>
                                        <div>{product.description}</div>
                                    </li>
                                    <li> Category:
                            <b> {product.category}</b>
                                    </li>
                                    <li>
                                        Price: <b>GHC {product.price}.00 </b>
                                    </li>
                                    <li>
                                        <h5>{product.rating} Stars ({product.review}) Reviews</h5>
                                    </li>
                                </ul>
                    Add to Cart
                    <div className="details-action">
                                    <ul className="p0 m0">
                                        <li>Price: {product.price}</li>
                                        <li>Status: {product.status}</li>
                                        <li>Qty:<select value={qty} onChange={(e) => {setQty(e.target.value)}}>
                                               
                                                {[...Array(product.countInStock).keys()].map(x => <option key={x+1} value={x+1}>{x+1}</option>)}

                                            </select>
                                        </li>
                                        <li>
                                            <Link className="add-to-cart btn" to="/cart"> Add to Cart</Link>
                                        </li>
                                    </ul>


                                </div>
                            </div>
                
                        </div>
                    )
                    }
                
            
            
        </div>
    );
}
export default ProductPage;