// Axios
import defaultAxios, { AxiosError } from 'axios'

const axios = defaultAxios.create({
	baseURL: 'https://jsonplaceholder.typicode.com',
	timeout: 5000
})

// Add a request interceptor
axios.interceptors.request.use(
	config => {
		// Do something before request is sent
		return config
	},
	error => {
		// Do something with request error
		return Promise.reject(error)
	}
)

// Add a response interceptor
axios.interceptors.response.use(
	response => {
		// Any status code that lie within the range of 2xx cause this function to trigger
		// Do something with response data
		return response
	},
	(error: AxiosError) => {
		// Check if theres any cancellation request
		if (defaultAxios.isCancel(error)) {
			console.warn(
				'Request canceled:',
				`${error?.config?.baseURL}${error?.config?.url} ${error.message}`
			)
		}

		// Any status codes that falls outside the range of 2xx cause this function to trigger
		// Do something with response error
		return Promise.reject(error)
	}
)

export { axios }
