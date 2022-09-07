import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";

import userReducer from "./userSlice";
import tokenReducer from "./tokenSlice";
import topicReducer from "./topicSlice";

const reducers = combineReducers({
	user: userReducer,
	authToken: tokenReducer,
	topic: topicReducer,
});

const persistConfig = {
	key: "root",
	storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
	reducer: persistedReducer,
});

export default store;
