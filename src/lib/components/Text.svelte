<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import * as pdfjsLib from 'pdfjs-dist';
	export let url;

	let currentPage = writable(1);
	let numPages = writable(0);

	let textContent = writable(); // Use a writable store for text content

	let file = url;

	/**
	 * @param {string | URL | import("pdfjs-dist/types/src/display/api").TypedArray | ArrayBuffer | import("pdfjs-dist/types/src/display/api").DocumentInitParameters} url
	 * @param {number} pageNumber
	 */
	async function loadPdf(url, pageNumber) {
		try {
			pdfjsLib.GlobalWorkerOptions.workerSrc =
				'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.179/pdf.worker.min.js';

			const loadingTask = pdfjsLib.getDocument(url);
			const pdf = await loadingTask.promise;

			numPages.set(pdf.numPages);

			const page = await pdf.getPage(pageNumber);

			const extractedTextContent = await page.getTextContent();
			// const text = extractedTextContent.items.map((item) => item.str).join(' ');
			const text = extractedTextContent;

			console.log('text fro text', text);

			textContent.set(text); // Update the text content store

			console.log('PDF loaded', $textContent);
		} catch (error) {
			console.error('PDF loading error:', error);
		}
	}

	onMount(() => {
		loadPdf(file, 1);
	});

	async function handlePreviousPage() {
		if ($currentPage > 1) {
			currentPage.update((n) => n - 1);
			await loadPdf(file, $currentPage - 1);
		}
	}

	async function handleNextPage() {
		if ($currentPage < $numPages) {
			currentPage.update((n) => n + 1);
			await loadPdf(file, $currentPage + 1);
		}
	}
</script>

<div class=" flex justify-center items-center flex-col sm:flex-col">
	<div class="h-screen flex justify-center items-center flex-col sm:flex-col">
		{#if $textContent && $textContent.items}
			<div class="w-full overflow-x-auto max-w-screen-lg">
				<div class="p-4 bg-gray-100 text-gray-900 shadow-md rounded-lg">
					{#each $textContent.items as item}
						<p
							class="font-serif whitespace-no-wrap mb-2"
							style="transform: matrix(1, 0, 0, 1, ${item.transform[4]}, ${item.transform[5]})"
						>
							{item.str}
						</p>
					{/each}
				</div>
			</div>
		{:else}
			<p class="text-gray-600">Loading content...</p>
		{/if}
	</div>

	<div class="mt-5">
		<button
			on:click={handlePreviousPage}
			class="px-4 py-[6px] rounded bg-green-500"
			disabled={$currentPage === 1}>Prev</button
		>
		{$currentPage}/{$numPages}
		<button
			on:click={handleNextPage}
			class="px-4 py-[6px] rounded bg-green-500"
			disabled={$currentPage === $numPages}>Next</button
		>
	</div>
</div>

<style>
	#text-content {
		white-space: pre-line; /* Preserve line breaks and spaces in the text */
	}
</style>
