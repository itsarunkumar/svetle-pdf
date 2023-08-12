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

	return {
		userId: session.user.userId,
		logedIn: true,
		user: u
	};
}
