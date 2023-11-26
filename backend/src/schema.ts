export const TYPE_DEFS = `
type Book {
	title: String
	author: String
}

type Query {
	books: [Book]
}
`;
