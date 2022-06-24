import { combineReducers } from "redux"
import authReducer from "./authentication/authReducer"
import cartReducer from "./cart/cartReducer"
import productsReducer from "./products/productsReducer"
import { productsCategories } from "./productsCategries/productsCategories"

const rootReducer = combineReducers({
    productsState: productsReducer,
    productsCategoriesState: productsCategories,
    cartState: cartReducer,
    authState: authReducer
})

export default rootReducer