export const TYPE_DEFS = `
type Character {
	id: Int!
	firstName: String!
	lastName: String!
}

type Query {
	characters: [Character]!
}
`;
