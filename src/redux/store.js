// import { createStore } from "redux";
import { createStore, applyMiddleware, compose } from "redux";
import createSagaMiddleware from "@redux-saga/core";
import thunk from "redux-thunk";
import rootReducer from "./rootReducer";
import { initSagas } from "./initSagas";

// const store = createStore(rootReducer);

// export default store;

const getStore = () => {
    const sagaMiddleware = createSagaMiddleware();
    const middleWares = [sagaMiddleware, thunk];
    const composables = [applyMiddleware(...middleWares)];
    const enhancer = compose(...composables);
    const store = createStore(rootReducer, {}, enhancer);
    initSagas(sagaMiddleware);
    return store;
};

export default getStore();
