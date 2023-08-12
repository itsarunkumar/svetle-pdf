/** @type {import('./$types').PageServerLoad} */

import { auth } from '$lib/server/lucia';
import { redirect } from '@sveltejs/kit';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	const session = await locals.auth.validate();
	if (session) {
		throw redirect(303, '/');
	}
	return {};
}

// @ts-ignore
/** @type {import('./$types').Actions} */
export const actions = {
	register: async ({ request, locals }) => {
		const { name, email, password } = Object.fromEntries(await request.formData());

		try {
			const user = await auth.createUser({
				key: {
					providerId: 'email',
					// @ts-ignore
					providerUserId: email,
					// @ts-ignore
					password
				},
				attributes: {
					name,
					email
				}
			});
			const session = await auth.createSession({
				userId: user.userId,
				attributes: {}
			});
			locals.auth.setSession(session);
		} catch (error) {
			console.log('', error);
		}

		throw redirect(303, '/');
	},
	login: async ({ request, locals }) => {
		const { email, password } = Object.fromEntries(await request.formData());
		try {
			// @ts-ignore
			const Key = await auth.useKey('email', email, password);
			console.log(Key);
			const session = await auth.createSession({
				userId: Key.userId,
				attributes: {}
			});
			locals.auth.setSession(session);
		} catch (error) {
			console.log(error);
		}
		throw redirect(303, '/');
	}
};
