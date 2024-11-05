import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../../store/store'
import { tokenType } from '../../../lib/generalTypes'

// Define a type for the slice state
interface AuthState {
    isAuthenticated: boolean,
    token: tokenType,
    authToken: string
}

const initialState: AuthState = {
    isAuthenticated: false,
    token: {},
    authToken: "",
}

export const authSlice = createSlice({
    name: 'auth',
    // `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        setAuth: (state, action: PayloadAction<any>) => {
            state.isAuthenticated = action.payload;
        },
        setToken: (state, action: PayloadAction<any>) => {
            state.token = action.payload;
        },
        setauthToken: (state, action: PayloadAction<any>) => {
            state.authToken = action.payload;
        },
    },
})

export const { setAuth, setToken, setauthToken } = authSlice.actions

export default authSlice.reducer