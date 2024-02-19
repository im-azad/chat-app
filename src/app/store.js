import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "../features/api/apiSlice";
import authSliceReducer from "../features/auth/authSlice";
import conversationSliceReducer from "../features/conversations/conversationSlice";
import messagesSliceReducer from "../features/messages/messagesSlice";


export const store = configureStore({
	
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		auth: authSliceReducer,
		conversations: conversationSliceReducer,
		messages: messagesSliceReducer,
	},
	// production mode devTools: false
	devTools: import.meta.env.PRO !== true,

	// Adding the api middleware enables caching, invalidation, polling, and other features of `rtk-query`
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware().concat(apiSlice.middleware),
});

