// React
import { useRef } from 'react'

// Axios
import axios, { AxiosRequestConfig } from 'axios'

// Types
import { TRequestSaver } from './types'

const useRequestSaver = () => {
	// Common State
	const requestSaverList = useRef<TRequestSaver>({})

	/**
	 * @description Clear all incoming or running request
	 *
	 * @return {void} void
	 */
	const requestSaverAbortAll = (): void => {
		if (Object.keys(requestSaverList.current).length > 0) {
			// Abort incoming request
			Object.values(requestSaverList.current).forEach(requestSaver => {
				requestSaver.cancel()
			})

			// Clear all request from state
			requestSaverList.current = {}
		}
	}

	/**
	 * @description Abort some request according identifier
	 *
	 * @param {string} id
	 *
	 * @return {void} void
	 */
	const requestSaverAbort = (id: string): void => {
		const request = requestSaverList.current?.[id]

		// Check if request exists
		// Check if request is not aborted yet, if not aborted, abort it
		// In the end, clear the aborted request
		if (request) {
			// Abort the request
			request.cancel()

			// Delete aborted request
			delete requestSaverList.current[id]
		}
	}

	/**
	 * @description Set cancellation
	 *
	 * @param {string} id
	 *
	 * @return {AxiosRequestConfig} AxiosRequestConfig
	 */
	const requestSaverSetCancellation = (id: string): AxiosRequestConfig => {
		// Check if theres any request with the same identifier
		// Abort the request if exists
		if (requestSaverList.current?.[id]) requestSaverAbort(id)

		// Make instance of Axios Source
		const axiosSource = axios.CancelToken.source()

		// Make key value pair of cancel token to list
		requestSaverList.current[id] = {
			cancel: axiosSource.cancel,
			token: axiosSource.token
		}

		// Return saved signal that stored to state
		return { cancelToken: axiosSource.token }
	}

	return {
		requestSaverAbortAll,
		requestSaverAbort,
		requestSaverSetCancellation
	}
}

export { useRequestSaver }
