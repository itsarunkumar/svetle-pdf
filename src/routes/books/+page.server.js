import { supabase } from '$lib/supabaseClient';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
	return {};
}

export const actions = {
	// @ts-ignore
	upload: async ({ cookies, request }) => {
		const data = await request.formData();
		const file = data.get('file');
		console.log(file);

		try {
			// @ts-ignore
			const { error, data } = await supabase.storage.from('files').upload(file.name, file);
			console.log(error);
			console.log(data);
		} catch (error) {
			console.log('appwrite error', error);
		}
	}
};
