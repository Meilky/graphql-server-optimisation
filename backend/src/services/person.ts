import type { IPerson, IPersonInfos } from "../models/person";

export class PersonService {
    constructor() {}

    public async getPersons(): Promise<IPerson[]> {
        return [];
    }

    public async getPersonInfos(personId: number): Promise<IPersonInfos | undefined> {
        return undefined;
    }

    public async getPersonsAtEvent(eventId: number): Promise<IPerson[]> {
        return [];
    }
}
