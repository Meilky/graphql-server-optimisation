import type { EventService } from "./services/event";
import type { PersonService } from "./services/person";

export interface Context {
    services: {
        person: PersonService;
        event: EventService;
    };
}
