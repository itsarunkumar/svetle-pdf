<script>
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	export let logedIn = false;
</script>

<nav class="bg-green-400 flex items-center justify-between h-16 px-4">
	<a href="/" class="uppercase text-2xl"> reda </a>

	<div class="flex items-center justify-between gap-5">
		<LightSwitch />

		<div class="flex gap-4">
			<a href="/books">Go to Books</a>
			<a href="/books/text">Go to Text</a>
			<a href="/">Home</a>

			{#if logedIn}
				<form action="?/logout" method="post" use:enhance>
					<button type="submit">Logout</button>
				</form>
			{:else}
				<a href="/login">Login</a>
			{/if}
		</div>
	</div>
</nav>
