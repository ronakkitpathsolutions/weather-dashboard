import { combineReducers } from '@reduxjs/toolkit'
import auth from './auth.slice'
import common from './common.slice'

export const reducers = combineReducers({
	auth,
	common,
})
