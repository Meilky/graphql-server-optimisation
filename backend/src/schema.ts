export const TYPE_DEFS = `
type PersonInfos {
	middleName: String
	dateOfBirth: String
}

type Person {
	id: Int!
	firstName: String!
	lastName: String!
	infos: PersonInfos

	relations: [Relation]!
	events: [Event]!
}

type Event {
	id: Int!
	name: String!
	date: String!

	persons: [Person]!
}

type Relation {
	type: String!
	with: Person!
	description: String
}

type Query {
	persons: [Person]!
	events: [Event]!
}
`;
