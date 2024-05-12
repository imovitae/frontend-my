import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from 'redux-thunk'; // Исправлено: использование default импорта
import { composeWithDevTools } from "redux-devtools-extension";

import { cartReducer } from "./reducers/cartReducers";
import { getProductsReducer, getProductDetailsReducer } from "./reducers/productReducers";

// Объединение всех редьюсеров в один корневой редьюсер
const reducer = combineReducers({
  cart: cartReducer,
  getProducts: getProductsReducer,
  getProductDetails: getProductDetailsReducer,
});

// Создание массива промежуточных обработчиков
const middleware = [thunk];

// Создание хранилища с промежуточными обработчиками и инструментами разработки
const store = createStore(
  reducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
