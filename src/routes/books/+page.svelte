<script>
	// @ts-nocheck

	/** @type {import('./$types').PageData} */
	export let data;
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	console.log($page);
</script>

<h1 class="uppercase">book</h1>

<div>
	<form action="?/upload" method="post" use:enhance class="flex gap-2 mt-5">
		<input type="file" name="file" id="file" />
		<button class="px-4 py-[6px] rounded bg-green-500">Upload</button>
	</form>

	<!-- <div class="mt-5">
		{#if data.status === 200}
			<ul>
				{#each data?.data as book, index (book?.id)}
					<li class="text-ellipsis py-3">
						<a href="/books/{book?.id}" class="flex gap-2">
							<span>{index + 1}-</span>
							<div>{book?.name}</div>
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div> -->

	<div class="mt-5">
		{#if $page.data.user.files}
			<ul>
				{#each $page.data.user.files as book, index (book?.id)}
					<li class="text-ellipsis py-3">
						<a href="/books/{book?.id}" class="flex gap-2">
							<span>{index + 1}-</span>
							<div>{book?.name}</div>
						</a>
					</li>
				{/each}
			</ul>
		{/if}
	</div>
</div>
