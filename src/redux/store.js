import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";

import logger from "redux-logger";

import rootReducer from "./root.reducer.js";

const middleware = [thunk];

if (process.env.NODE_ENV === "development"){
    middleware.push(logger);
}

const store = createStore(rootReducer,applyMiddleware(...middleware));

const persistor = persistStore(store);

export { store,persistor }
