<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Login page</h1>

<form method="post" class="w-full h-screen flex justify-center items-center flex-col">
	<div class="form-control w-full max-w-xs">
		<label class="label">
			<span class="label-text">What is your name?</span>
		</label>
		<input
			type="text"
			placeholder="Type name"
			name="name"
			id="name"
			class="input input-bordered w-full max-w-xs"
		/>
	</div>
	<div class="form-control w-full max-w-xs">
		<label class="label">
			<span class="label-text">What is your email?</span>
		</label>
		<input
			type="email"
			placeholder="Type email"
			name="email"
			id="email"
			class="input input-bordered w-full max-w-xs"
		/>
	</div>
	<div class="form-control w-full max-w-xs">
		<label class="label">
			<span class="label-text">What is your password?</span>
		</label>
		<input
			type="text"
			placeholder="Type password"
			name="password"
			id="password"
			class="input input-bordered w-full max-w-xs"
		/>
	</div>
	<div class="mt-8 flex gap-6">
		<button formaction="?/register" class="btn">Register</button>
		<button formaction="?/login" class="btn">Login</button>
	</div>
</form>
