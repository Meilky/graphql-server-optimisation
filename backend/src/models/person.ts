export interface IPersonInfos {
	middleName?: string
	dateOfBirth?: string
}

export class PersonInfosModel implements IPersonInfos {
	public middleName?: string
	public dateOfBirth?: string
}

export interface IPerson {
	id: number;

	firstName: string;
	lastName: string;
	infos?: IPersonInfos;
}

export class PersonModel implements IPerson {
	public id: number;

	public firstName: string;
	public lastName: string;
	public infos?: IPersonInfos;

	constructor(id: number, firstName: string, lastName: string) {
		this.id = id;
		this.firstName = firstName;
		this.lastName = lastName;
	}
}

interface IDBPerson {
	id: number
	first_name: string
	last_name: string
}

export function createPersonFromDB({ id, first_name, last_name }: IDBPerson): PersonModel {
	return new PersonModel(id, first_name, last_name)
}
