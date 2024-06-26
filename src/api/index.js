import { METHODS } from '../constant'
import client from './client'

export const api = {
	auth: {
		login: (params) =>
			client({
				url: '/login',
				data: params,
				method: METHODS.POST,
			}),
	},
}
