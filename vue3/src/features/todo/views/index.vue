<script lang="ts" setup>
// Vue
import { onMounted, onBeforeUnmount } from 'vue'

// Plugins
import { axios } from '../../../plugins/axios'

// Hooks
import { useRequestSaver } from '../../app/hooks/request-saver'

// Instance of hook
const requestSaver = useRequestSaver()

/**
 * @description Load todo list
 *
 * @return {Promise<void>} Promise<void>
 */
const fetchTodoList = async (): Promise<void> => {
	try {
		await axios.get('/todos', {
			...requestSaver.requestSaverSetCancellation('FETCH_TODO_LIST')
		})
	} catch (_) {
		//
	}
}

// Do when user came to this page
onMounted(() => {
	fetchTodoList()
})

// Clear when user came out from this page
onBeforeUnmount(() => {
	requestSaver.requestSaverAbortAll()
})
</script>

<template>
	<div class="card">
		<h1>Hey, you in Todo page</h1>

		<div class="force-center">
			<button type="button" @click="$router.push({ name: 'appIndex' })">
				Back To Home
			</button>
			<button type="button" @click="$router.push({ name: 'postIndex' })">
				Go To Post
			</button>
		</div>
	</div>
</template>
