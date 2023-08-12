<script>
	/** @type {import('./$types').LayoutData} */

	import '../app.css';
	// Your selected Skeleton theme:
	import '@skeletonlabs/skeleton/themes/theme-skeleton.css';

	// This contains the bulk of Skeletons required styles:
	import '@skeletonlabs/skeleton/styles/skeleton.css';
	import Navbar from '$lib/components/Navbar.svelte';

	export let data;
</script>

<svelte:head>
	<title>haha</title>
</svelte:head>

<Navbar logedIn={data.logedIn} />

<slot />
