import { auth } from '$lib/server/lucia';
import { redirect } from '@sveltejs/kit';
import { prisma } from '$lib/server/prisma';
/** @type {import('./$types').LayoutServerLoad} */
export async function load({ locals }) {
	const session = await locals.auth.validate();

	if (!session) {
		return {
			logedIn: false
		};
	}

	const u = await prisma.user.findUniqueOrThrow({
		where: {
			id: session.user.userId
		},
		include: {
			files: true
		}
	});

	// console.log(user);

	// console.log(session.user);

	return {
		userId: session.user.userId,
		logedIn: true,
		user: u
	};
}
