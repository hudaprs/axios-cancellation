// React Router DOM
import { useNavigate } from 'react-router-dom'

const AppIndex = () => {
	// Navigation
	const navigate = useNavigate()

	return (
		<div className='card'>
			<h1>Hey, you in Home page</h1>

			<div className='force-center'>
				<button type='button' onClick={() => navigate('/todos')}>
					Go To Todo
				</button>
				<button type='button' onClick={() => navigate('/posts')}>
					Go To Post
				</button>
			</div>
		</div>
	)
}

export { AppIndex }
