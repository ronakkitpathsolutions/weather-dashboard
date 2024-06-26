import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { api } from '../../api'
import { decodeToken } from '../../assets/utils/functions'

export const fetchUserByLogin = createAsyncThunk(
	'auth/fetchUserByLogin',
	async (payload) => {
		const response = await api.auth.login(payload)
		return response?.data
	}
)

const initialState = {
	isLogged: false,
	token: null,
	access: {},
	isLoading: false,
	error: null,
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
	extraReducers: (builder) => {
		builder.addCase(fetchUserByLogin.pending, (state) => {
			return {
				...state,
				isLoading: true,
			}
		})
		builder.addCase(fetchUserByLogin.fulfilled, (state, action) => {
			const response = action.payload
			return {
				...state,
				isLoading: false,
				isLogged: !!response?.token,
				token: response?.token,
				error: null,
				user: decodeToken(response?.token),
			}
		})
		builder.addCase(fetchUserByLogin.rejected, (state, action) => {
			return {
				...state,
				isLoading: false,
				error: action.error?.message || '',
			}
		})
	},
})

const auth = authSlice.reducer
export default auth
export const { updateUser } = authSlice.actions
