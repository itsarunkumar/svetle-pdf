<script>
	import { LightSwitch } from '@skeletonlabs/skeleton';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	export let logedIn = false;
</script>

<nav class="bg-green-400 flex items-center justify-between h-16 px-4">
	<span>Reda</span>
	<div class="flex items-center justify-between">
		<LightSwitch />

		<div>
			<a href="/books" class="btn">Go to Books</a>
			<a href="/">Home</a>

			{#if logedIn}
				<form action="?/logout" method="post" use:enhance class="btn">
					<button formaction="/logout" type="submit" role="button">Logout</button>
				</form>
			{:else}
				<a href="/login" class="btn">go to login</a>
			{/if}
		</div>
	</div>
</nav>
