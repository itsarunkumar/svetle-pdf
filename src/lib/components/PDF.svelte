<script>
	import { onMount } from 'svelte';
	import { writable } from 'svelte/store';
	import * as pdfjsLib from 'pdfjs-dist';
	export let url;

	let currentPage = writable(1);
	let numPages = writable(0);

	/**
	 * @type {HTMLCanvasElement}
	 */
	let canvas;

	let file = url;

	/**
	 * @param {string | URL | ArrayBuffer | import("pdfjs-dist/types/src/display/api").DocumentInitParameters} url
	 * @param {number} pageNumber
	 */
	async function loadPdf(url, pageNumber) {
		try {
			pdfjsLib.GlobalWorkerOptions.workerSrc =
				'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.9.179/pdf.worker.min.js';

			const loadingTask = pdfjsLib.getDocument(url);
			const pdf = await loadingTask.promise;

			numPages.set(pdf.numPages);

			console.log('PDF loaded');

			const page = await pdf.getPage(pageNumber);
			console.log('Page loaded');

			const textContent = await page.getTextContent();
			console.log('Text content loaded');
			console.log(textContent);

			const scale = 1;
			const viewport = page.getViewport({ scale });

			canvas.height = viewport.height;
			canvas.width = viewport.width;

			const renderContext = canvas.getContext('2d');
			const renderViewport = { canvasContext: renderContext, viewport };
			// @ts-ignore
			await page.render(renderViewport);

			console.log('Page rendered');
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

<div class="w-full h-fit flex justify-center items-center flex-col sm:flex-col">
	<canvas bind:this={canvas} id="the-canvas" class="lg:w-full w-screen lg:h-full h-fit" />
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
