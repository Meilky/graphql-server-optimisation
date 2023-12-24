export interface IEvent {
    id: number;
    name: string;
    date: string;
}

export class EventModel implements IEvent {
    public id: number;

    public name: string;
    public date: string;

    constructor(id: number, name: string, date: string) {
        this.id = id;
        this.name = name;
        this.date = date;
    }
}

interface IDBPerson {
    id: number;
    name: string;
    date: string;
}

export function createEventFromDB(dto: IDBPerson): EventModel {
    return new EventModel(dto.id, dto.name, dto.date);
}
