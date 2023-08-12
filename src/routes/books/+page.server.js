import { prisma } from '$lib/server/prisma';
import { supabase } from '$lib/supabaseClient';
import { redirect } from '@sveltejs/kit';
// @ts-ignore
import { generateUniqueId } from '$lib/helper';
// @ts-ignore
import { v4 as uuid } from 'uuid';

/** @type {import('./$types').PageServerLoad} */
export async function load({ locals }) {
	const session = await locals.auth.validate();
	if (!session) {
		throw redirect(303, '/login');
	}
}

export const actions = {
	// @ts-ignore
	// @ts-ignore
	upload: async ({ cookies, request, locals }) => {
		const session = await locals.auth.validate();

		const data = await request.formData();
		const file = data.get('file');
		console.log(file);

		try {
			// @ts-ignore
			// @ts-ignore
			const { error, data } = await supabase.storage.from('files').upload(file.name, file);
			// @ts-ignore
			const { data: path } = await supabase.storage.from('files').getPublicUrl(data.path);
			// console.log(path.publicUrl, file?.name);
			await prisma.files.create({
				data: {
					//@ts-ignore
					name: file?.name || '',
					url: path.publicUrl,
					user: {
						connect: {
							id: session.user.userId
						}
					}
				}
			});
		} catch (error) {
			console.log('supabase error', error);
		}
	}
};
