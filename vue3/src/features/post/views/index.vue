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
 * @description Load post list
 *
 * @return {Promise<void>} Promise<void>
 */
const fetchPostList = async (): Promise<void> => {
	try {
		await axios.get('/posts', {
			...requestSaver.requestSaverSetCancellation('FETCH_POST_LIST')
		})
	} catch (_) {
		//
	}
}

// Do when user came to this page
onMounted(() => {
	fetchPostList()
})

// Clear when user came out from this page
onBeforeUnmount(() => {
	requestSaver.requestSaverAbortAll()
})
</script>

<template>
	<div class="card">
		<h1>Hey, you in Post page</h1>

		<div class="force-center">
			<button type="button" @click="$router.push({ name: 'appIndex' })">
				Back To Home
			</button>
			<button type="button" @click="$router.push({ name: 'todoIndex' })">
				Go To Todo
			</button>
		</div>
	</div>
</template>
