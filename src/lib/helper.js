import crypto from 'crypto';

export const generateUniqueId = () => {
	const uuid = crypto.randomBytes(16).toString('hex');
};
