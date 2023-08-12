<script>
	/** @type {import('./$types').LayoutData} */
	export let data;

	import { navigating } from '$app/stores';
</script>

<div class="px-10 sm:px-5">
	{#if $navigating}
		<p>Loading....</p>
	{:else}
		<slot />
	{/if}
</div>
