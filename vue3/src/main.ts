// Vue
import { createApp } from 'vue'

// App Style
import './style.css'

// React Router
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

// Entry Point
import App from './App.vue'

// Features
import AppIndex from './features/app/views/index.vue'
import PostIndex from './features/post/views/index.vue'
import TodoIndex from './features/todo/views/index.vue'

const routes: RouteRecordRaw[] = [
	{ path: '/', name: 'appIndex', component: AppIndex },
	{ path: '/posts', name: 'postIndex', component: PostIndex },
	{ path: '/todos', name: 'todoIndex', component: TodoIndex }
]

const router = createRouter({
	history: createWebHistory(),
	routes
})

const app = createApp(App)

app.use(router)
app.mount('#app')
