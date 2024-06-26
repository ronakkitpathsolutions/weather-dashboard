import axios from 'axios'
import { BASE_URL, METHODS } from '../constant'

const axiosConfig = {
	baseURL: BASE_URL,
}

const createAxiosInstance = () => axios.create(axiosConfig)

const request = createAxiosInstance()
const cache = {}

const client = ({
	method = METHODS.POST,
	url = BASE_URL,
	data,
	useCache = false,
	invalidateQuery = false,
	...rest
}) =>
	useCache && !invalidateQuery && cache[url]
		? Promise.resolve(cache[url])
		: request({
				method,
				url,
				data,
				//   paramsSerializer,
				...rest,
			})

export const clientWithHeaders = ({
	method = METHODS.POST,
	url = BASE_URL,
	data,
	...rest
}) =>
	request({
		method,
		url,
		data,
		// paramsSerializer,
		...rest,
	}).then((res) => {
		return res
	})

request.interceptors.response.use(
	(res) => {
		return res
	},
	(err) => {
		const originalRequest = err.config
		const status = err.response?.status
		const response = err.response?.data
		if (status === 503) {
			const error = {
				originalRequest,
				status,
				response,
				message:
					'This service is unavailable right now, please try again later',
			}
			throw error
		}
		if (status === 500) {
			const error = {
				originalRequest,
				status,
				response,
				message:
					response.message ||
					response?.title ||
					'An unexpected error occurred, please try again later',
			}
			throw error
		}
		if (status === 404) {
			const error = {
				originalRequest,
				response,
				status,
				message: response?.message
					? response.message
					: 'The requested content does not exist, please try again later',
			}
			throw error
		}
		const message = response ? response?.message : err.message
		const error = { originalRequest, message, status, response }
		throw error
	}
)

export const setHeaderToken = (token) => {
	if (token) request.defaults.headers.Authorization = `Bearer ${token}`
	else delete request.defaults.headers.Authorization
}

export const setHeader = (key, value) => (request.defaults.headers[key] = value)

export default client
