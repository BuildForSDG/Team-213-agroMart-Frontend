import { PRODUCT_LIST_REQUEST, PRODUCT_LIST_SUCCESS, PRODUCT_LIST_FAIL } from "../Constants/productConstants";
import axios from "axios";

//Create an action
const listProducts = () => async (dispatch) => {
    try {

        dispatch({ type: PRODUCT_LIST_REQUEST });
        //send ajax request to data
        const { data } = await axios.get("/api/products");
        dispatch({ type: PRODUCT_LIST_SUCCESS, payload: data });
        
    }
    catch (error) {
        dispatch({ type: PRODUCT_LIST_FAIL, payload: error.message });  
    }
   
}
export default listProducts;