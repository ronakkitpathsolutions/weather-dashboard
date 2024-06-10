import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isLogged: false,
	token: null,
	access: {},
	user: {},
}

export const authSlice = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		updateUser: (state, action) => {
			return {
				...state,
				...action.payload,
			}
		},
		logout: () => {
			return initialState
		},
	},
})

const auth = authSlice.reducer
export default auth
export const { updateUser } = authSlice.actions
