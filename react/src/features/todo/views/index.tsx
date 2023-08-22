// React
import { useState, useEffect, useCallback } from 'react'

// React Router DOM
import { useNavigate } from 'react-router'

// Axios
import { axios } from '../../../plugins/axios'

// Custom Hooks
import { useRequestSaver } from '../../app/hooks/request-saver'

const TodoIndex = () => {
	// Common State
	const [isFirstTimeLoaded, setIsFirstTimeLoaded] = useState(true)

	// Navigation
	const navigate = useNavigate()

	// Hooks
	const requestSaver = useRequestSaver()

	/**
	 * @description Load todo list
	 *
	 * @return {Promise<void>} Promise<void>
	 */
	const fetchTodoList = useCallback(async (): Promise<void> => {
		try {
			await axios.get('/todos', {
				...requestSaver.requestSaverSetCancellation('FETCH_TODO_LIST')
			})
		} catch (_) {
			//
		}
	}, [requestSaver])

	/**
	 * @description Fetch initial when first time came to this page	 *
	 *
	 * @return {Promise<void>} Promise<void>
	 */
	const fetchInitial = useCallback(async (): Promise<void> => {
		try {
			await fetchTodoList()
		} finally {
			setIsFirstTimeLoaded(false)
		}
	}, [fetchTodoList])

	// Do when user came to this page
	useEffect(() => {
		if (isFirstTimeLoaded) fetchInitial()

		// Do when user came out from this page
		return () => {
			if (!isFirstTimeLoaded) requestSaver.requestSaverAbortAll()
		}

		// eslint-disable-next-line
	}, [isFirstTimeLoaded])

	return (
		<div className='card'>
			<h1>Hey, you in Todo page</h1>

			<div className='force-center'>
				<button type='button' onClick={() => navigate('/')}>
					Back To Home
				</button>
				<button type='button' onClick={() => navigate('/posts')}>
					Go To Post
				</button>
			</div>
		</div>
	)
}

export { TodoIndex }
