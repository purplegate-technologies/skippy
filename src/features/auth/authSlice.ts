import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
interface AuthState {
    user: null | {}
    token: string | null
}

const initialState: AuthState = {
    user: {},
    token: null,
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserDetail: (state, { payload }) => {
            console.log(payload, "user details");
            state.user = {
                firstName: payload.firstName,
                lastName: payload.lastName,
                phone: payload.phone,
                email: payload.email,
                isAdmin: payload.isAdmin,
                status: payload.status,
                type: payload.type,
                role: payload.role,
                id: payload._id,
            };
        },
        setUserDetails: (state, { payload: { user } }) => {
            state.user = user;
        },
        setUserToken: (state, { payload: { token } }) => {
            state.token = token;
        },
        setUser: (state, action: PayloadAction<{ user: {}, token: string }>) => {
            const { user, token } = action.payload
            localStorage.setItem(
                "user", JSON.stringify({ user, token })
            )
            // localStorage.setItem(
            //     "user", JSON.stringify({
            //         user: action.payload.user,
            //         token: action.payload.token
            //     })
            // )
            state.user = action.payload.user;
            state.token = action.payload.token;
        },

        // Dave authentication
        setCredentials: (state, action: PayloadAction<{ user: string, accessToken: string }>) => {
            const { user, accessToken } = action.payload
            state.user = user
            state.token = accessToken
        },
        logout: (state) => {
            localStorage.clear();
            state.user = null
            state.token = null
            // learn later
            // let redirectTo = window.location.pathname;
            window.localStorage.clear();
            // window.location.href = `/login?redirectTo=${redirectTo}`;
        }

    }
})

export const { setUser, logout, setCredentials, setUserDetails, setUserToken } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth

// selector to select use and token details from the store
export const selectCurrentUser = (state: RootState) => state.auth.user
export const selectCurrentToken = (state: RootState) => state.auth.token

export default authSlice.reducer;
