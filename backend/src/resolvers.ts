import type { Context } from "./types";
import type { IPerson, IPersonInfos } from "./models/person";
import type { IEvent } from "./models/event";

export const RESOLVERS = {
    Query: {
        persons: async (_parent: unknown, _args: unknown, context: Context): Promise<IPerson[]> => {
            return context.services.person.getPersons();
        },
        events: async (_parent: unknown, _args: unknown, context: Context): Promise<IEvent[]> => {
            return context.services.event.getEvents();
        },
    },
    Person: {
        infos: async (parent: IPerson, _args: unknown, context: Context): Promise<IPersonInfos | undefined> => {
            return context.services.person.getPersonInfos(parent.id);
        },
        events: async (parent: IPerson, _args: unknown, context: Context): Promise<IEvent[]> => {
            return context.services.event.getEventsOfPerson(parent.id);
        },
    },
	Event: {
        persons: async (parent: IEvent, _args: unknown, context: Context): Promise<IPerson[]> => {
            return context.services.person.getPersonsAtEvent(parent.id);
        },
	}
};
