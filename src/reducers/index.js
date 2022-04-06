import { combineReducers } from "redux";
import categoryReducer from "./category.reducer";
import productReducer from "./product.reducer";
import authReducer from "./auth.reducer";
import cartReducer from "./cart.reducer";

const rootReducer  =combineReducers({
    categoryReducer,
    productReducer,
    authReducer,
    cartReducer
})

export default rootReducer;