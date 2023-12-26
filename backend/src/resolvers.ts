import type { Context } from "./types";
import type { ICharacter } from "./models/character";

export const RESOLVERS = {
    Query: {
        characters: async (_parent: unknown, _args: unknown, context: Context): Promise<ICharacter[]> => {
            return context.services.character.getCharacters();
        },
    },
};
