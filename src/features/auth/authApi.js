import { apiSlice } from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		register: builder.mutation({
			query: (data) => ({
				url: "/register",
				method: "POST",
				body: data,
			}),
			/**
			 * A method that handles the start of a query.
			 *
			 * @param {type} arg - description of parameter
			 * @param {Object} dispatch - The dispatch function
			 * @param {Promise} queryFulfilled - The fulfilled query promise
			 * @return {Promise} A promise that resolves when the query is handled
			 */
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				try {
					const result = await queryFulfilled;
					localStorage.setItem(
						"auth",
						JSON.stringify({
							accessToken: result.data.accessToken,
							user: result.data.user,
						})
					);
					dispatch(
						userLoggedIn({
							accessToken: result.data.accessToken,
							user: result.data.user,
						})
					);
				} catch (error) {
					console.log(error);
				}
			},
		}),
		login: builder.mutation({
			query: (data) => ({
				url: "/login",
				method: "POST",
				body: data,
			}),
			/**
			 * A method that handles the start of a query.
			 *
			 * @param {type} arg - description of parameter
			 * @param {Object} dispatch - The dispatch function
			 * @param {Promise} queryFulfilled - The fulfilled query promise
			 * @return {Promise} A promise that resolves when the query is handled
			 */
			async onQueryStarted(arg, { dispatch, queryFulfilled }) {
				try {
					const result = await queryFulfilled;
					localStorage.setItem(
						"auth",
						JSON.stringify({
							accessToken: result.data.accessToken,
							user: result.data.user,
						})
					);
					dispatch(
						userLoggedIn({
							accessToken: result.data.accessToken,
							user: result.data.user,
						})
					);
				} catch (error) {
					console.log(error);
				}
			},
		}),
	}),
});

export const { useRegisterMutation, useLoginMutation } = authApi;
