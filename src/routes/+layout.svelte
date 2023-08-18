<script>
	/** @type {import('./$types').LayoutData} */

	import '../app.css';
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import Navbar from '$lib/components/Navbar.svelte';

	import { navigating } from '$app/stores';

	export let data;

	import { page } from '$app/stores';

	$: ({ logedIn } = data);

	console.log($page);
</script>

<svelte:head>
	<title>Reda</title>
</svelte:head>

{#if $page.route.id !== '/login'}
	<Navbar {logedIn} />
{/if}

{#if $navigating}
	<p>Loading....</p>
{:else}
	<div class="w-full flex justify-center items-center flex-col">
		<slot />
	</div>
{/if}
