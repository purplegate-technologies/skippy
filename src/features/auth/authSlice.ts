import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../../app/store";
interface AuthState {
    user: string | null
    token: string | null

}
const initialState: AuthState = {
    user: null,
    token: null,
}
export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setUserDetails: (state, {payload: {user}}) => {
            state.user = user;
          },
          setUserToken: (state, {payload: {token}}) => {
            state.token = token;
          },
        setUser: (state, action: PayloadAction<{ user: string, token: string }>) => {
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
        logout: (state) => {
            localStorage.clear();
            state.user = null;
            state.token = null;
        },
////////////////////////////////////////////
        // Dave authentication
        setCredentials: (state, action: PayloadAction<{ user: string, accessToken: string }>) => {
            const { user, accessToken } = action.payload
            state.user = user
            state.token = accessToken
        },
        logOut: (state) => {
            localStorage.clear();
            state.user = null
            state.token = null
            // learn later
            let redirectTo = window.location.pathname;
            window.localStorage.clear();
            window.location.href = `/login?redirectTo=${redirectTo}`;
        }

    }
})

export const { setUser, logout, setCredentials, logOut, setUserDetails, setUserToken } = authSlice.actions;
// dave
// export const {  setCredentials, logOut } = authSlice.actions;

export const selectAuth = (state: RootState) => state.auth
export const selectAuthUser = (state: RootState) => state.auth.user
export const selectAuthToken = (state: RootState) => state.auth.token

export default authSlice.reducer;

export const selectCurrentUser = (state : RootState) => state.auth.user
export const selectCurrentToken = (state : RootState) => state.auth.token
