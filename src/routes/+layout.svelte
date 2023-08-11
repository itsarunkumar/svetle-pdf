<script>
	/** @type {import('./$types').LayoutData} */
	export let data;

	import '../app.css';
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';

	import { LightSwitch } from '@skeletonlabs/skeleton';
	import Navbar from '$lib/components/Navbar.svelte';

	import { page } from '$app/stores';

	// console.log('page from layout', $page);
</script>

<svelte:head>
	<title>haha</title>
</svelte:head>

<Navbar />

<slot />
