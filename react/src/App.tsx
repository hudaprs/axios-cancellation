// Assets
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

// Styles
import './App.css'

// React Router DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// Features
import { AppIndex } from './features/app/views/index'
import { PostIndex } from './features/post/views/index'
import { TodoIndex } from './features/todo/views/index'

const App = () => {
	return (
		<Router>
			<div>
				<a href='https://vitejs.dev' target='_blank'>
					<img src={viteLogo} className='logo' alt='Vite logo' />
				</a>
				<a href='https://react.dev' target='_blank'>
					<img src={reactLogo} className='logo react' alt='React logo' />
				</a>
			</div>

			<Routes>
				<Route path='/' element={<AppIndex />} />
				<Route path='/posts' element={<PostIndex />} />
				<Route path='/todos' element={<TodoIndex />} />
			</Routes>
		</Router>
	)
}

export default App
