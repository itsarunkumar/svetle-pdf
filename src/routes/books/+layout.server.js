import { supabase } from '$lib/supabaseClient';

/** @type {import('@sveltejs/kit').Load} */
export async function load() {
	try {
		const { data, error } = await supabase.storage.from('files').list();

		if (error) {
			throw error;
		}

		// console.log(data);

		const resData = await Promise.all(
			data.slice(1, data.length).map(async (file) => {
				// @ts-ignore
				const { error, data } = await supabase.storage.from('files').getPublicUrl(file.name);
				if (error) {
					console.error(error);
					throw error;
				}
				// console.log(data);

				return {
					id: file.id,
					name: file.name,
					url: data.publicUrl,
					createdAt: file.created_at,
					visited: file.last_accessed_at
				};
			})
		);

		return {
			status: 200,
			data: resData
		};
	} catch (error) {
		console.error(error);
		return {
			status: 500,

			error: 'An error occurred while fetching data.'
		};
	}
}
