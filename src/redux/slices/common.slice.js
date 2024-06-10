import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	isCollapsed: false,
}

export const commonSlice = createSlice({
	name: 'common',
	initialState,
	reducers: {
		handleToggle: (state) => {
			return {
				...state,
				isCollapsed: !state.isCollapsed,
			}
		},
	},
})

const common = commonSlice.reducer
export default common
export const { handleToggle } = commonSlice.actions
