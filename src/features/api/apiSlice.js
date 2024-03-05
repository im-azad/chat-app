import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
	reducerPath: "api",
	baseQuery: fetchBaseQuery({
		baseUrl: import.meta.env.VITE_API_URL,
	}),
	tagTypes: [],
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (data) => ({
				url: "/register",
				method: "POST",
				body: data,
			})
		})
		,
		login: builder.mutation({
			query: (data) => ({
				url: "/login",
				method: "POST",
				body: data,
			})
		})
	}),
});

export const { useRegisterMutation, useLoginMutation } = apiSlice;
 