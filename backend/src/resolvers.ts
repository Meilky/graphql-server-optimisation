import type { IPerson } from "./models/person";

export const RESOLVERS = {
	Query: {
		persons: (): IPerson[] => {
			return [];
		},
	},
};
