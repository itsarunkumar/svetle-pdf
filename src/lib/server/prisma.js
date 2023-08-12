import { PrismaClient } from '@prisma/client';
import { env } from '$env/dynamic/private';

// @ts-ignore
const prisma = global.__prisma || new PrismaClient();

if (env.NODE_ENV === 'development') {
	// @ts-ignore
	global.__prisma = prisma;
}

export { prisma };
