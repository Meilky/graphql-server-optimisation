import type { IEvent } from "../models/event";

export class EventService {
    constructor() {}

    public async getEvents(): Promise<IEvent[]> {
        return [];
    }

    public async getEventsOfPerson(personId: number): Promise<IEvent[]> {
        return [];
    }
}
