<script>
	import PDF from '$lib/components/PDF.svelte';
	export let data;

	import { page } from '$app/stores';
	import Text from '$lib/components/Text.svelte';
	import Combine from '$lib/components/Combine.svelte';

	console.log(
		'page',
		$page.data.user.files.find((/** @type {{ id: string; }} */ item) => item.id === $page.params.id)
	);

	let url = $page.data.user.files.find(
		(/** @type {{ id: string; }} */ item) => item.id === $page.params.id
	).url;
</script>

<div class="w-full flex justify-center items-center flex-col py-10">
	<PDF {url} />
	<!-- <Text {url} /> -->
	<!-- <Combine {url} /> -->
</div>
