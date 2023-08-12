/** @type {import('./$types').PageServerLoad} */

import { auth } from '$lib/server/lucia';
import { fail, redirect } from '@sveltejs/kit';

export async function load() {
	return {};
}

/** @type {import('./$types').Actions} */
export const actions = {
	logout: async ({ locals }) => {
		const session = await locals.auth.validate();
		// @ts-ignore
		if (!session) return fail(401);
		await auth.invalidateSession(session.sessionId); // invalidate session
		locals.auth.setSession(null); // remove cookie
		throw redirect(302, '/login'); // redirect to login page
	}
};
