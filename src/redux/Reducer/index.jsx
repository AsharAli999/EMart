import handleCart from "./handleCart";
import { combineReducers } from "redux";

// const rootReducers = () =>   combineReducers({ 
//   handleCart,
// })  ;
const rootReducers =   combineReducers({ 
  handleCart,
})  ;


export default rootReducers;




// const createRootReducer = (history) => combineReducers({
//     router: connectRouter(history),
//     createUser: signupReducer,
//   });