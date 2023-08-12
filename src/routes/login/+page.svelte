<script>
	/** @type {import('./$types').PageData} */
	export let data;
</script>

<h1>Login page</h1>

<form method="post">
	<input type="text" name="name" id="name" />
	<input type="email" name="email" id="email" />
	<input type="text" name="password" id="password" />
	<button formaction="?/register">Register</button>
	<button formaction="?/login">Login</button>
</form>
