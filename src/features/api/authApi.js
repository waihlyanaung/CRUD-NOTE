import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        baseUrl:'https://contact-app.mmsdev.site/api/v1',
    }),
    tagTypes:["Auth"],
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (user) => ({
                url: "/register",
                method: "POST",
                body:user,
            }),
            invalidatesTags:["Auth"],
        }),
         login: builder.mutation({
            query: (user) => ({
                url: "/login",
                method: "POST",
                body:user,
            }),
            invalidatesTags:["Auth"],
        }),
        logoutAccount: builder.mutation({
            query: (token) => ({
              url: "/user-logout",
              method: "POST",
              headers: { authorization: `Bearer ${token}` },
            }),
            invalidatesTags: ["authApi"],
          }),



    })
})

export const { useRegisterMutation,useLoginMutation,useLogoutAccountMutation } = authApi;