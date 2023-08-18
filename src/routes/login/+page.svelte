<script>
	/** @type {import('./$types').PageData} */
	import { enhance } from '$app/forms';
	export let data;
</script>

<div class="w-full h-screen flex justify-center items-center flex-col">
	<h1 class="uppercase text-3xl text-primary-500">Login page</h1>

	<form
		method="post"
		class="w-2/6 h-fit flex justify-center items-center flex-col py-10 rounded-md"
		use:enhance
	>
		<div class="form-control w-full max-w-xs">
			<label class="label my-2">
				<span class="label-text">What is your name? </span>
			</label>
			<input
				type="text"
				placeholder="Type name"
				name="name"
				id="name"
				class="input variant-form-material"
			/>
		</div>
		<div class="form-control w-full max-w-xs">
			<label class="label my-2">
				<span class="label-text">What is your email?</span>
			</label>
			<input
				type="email"
				placeholder="Type email"
				name="email"
				id="email"
				class="input variant-form-material"
			/>
		</div>
		<div class="form-control w-full max-w-xs">
			<label class="label my-2">
				<span class="label-text">What is your password?</span>
			</label>
			<input
				type="text"
				placeholder="Type password"
				name="password"
				id="password"
				class="input variant-form-material"
			/>
		</div>
		<div class="mt-8 flex gap-6">
			<button formaction="?/register" class="btn px-4 py-[6px] rounded bg-purple-700"
				>Register</button
			>
			<button formaction="?/login" class="btn px-4 py-[6px] rounded bg-green-500">Login</button>
		</div>
	</form>
</div>
