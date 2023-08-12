// import lucia from 'lucia';
// import { prisma } from '@lucia-auth/adapter-prisma';
// import { PrismaClient } from '@prisma/client';
// import { dev } from '$app/environment';
// import { sveltekit } from 'lucia/middleware';

// const client = new PrismaClient();

// export const auth = lucia({
// 	// @ts-ignore
// 	adapter: prisma(client),
// 	env: dev ? 'DEV' : 'PROD',
// 	middleware: sveltekit(),
// 	transformDatabaseUser: (/** @type {{ id: any; email: any; name: any; }} */ userData) => {
// 		return {
// 			userID: userData.id,
// 			email: userData.email,
// 			name: userData.name
// 		};
// 	}
// });

import { lucia } from 'lucia';
import { prisma } from '@lucia-auth/adapter-prisma';
import { PrismaClient } from '@prisma/client';
import { sveltekit } from 'lucia/middleware';
import { dev } from '$app/environment';

const client = new PrismaClient();

export const auth = lucia({
	adapter: prisma(client),
	env: dev ? 'DEV' : 'PROD',
	middleware: sveltekit(),
	//@ts-ignore
	transformDatabaseUser: (/** @type {{ id: any; email: any; name: any; }} */ userData) => {
		return {
			userID: userData.id,
			email: userData.email,
			name: userData.name
		};
	}
});
