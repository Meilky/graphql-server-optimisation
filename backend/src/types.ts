import type { CharacterService } from "./services/character";

export interface Context {
    services: {
        character: CharacterService;
    };
}
