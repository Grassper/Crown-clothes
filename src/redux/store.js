import { createStore, applyMiddleware } from "redux";
import { persistStore } from "redux-persist";

import logger from "redux-logger";

import rootReducer from "./root.reducer.js";

const middleware = [logger];

const store = createStore(rootReducer,applyMiddleware(...middleware));

const persistor = persistStore(store);

export { store,persistor }
