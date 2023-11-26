const BOOKS = [
    {
        title: "The Awakening",
        author: "Kate Chopin",
    },
    {
        title: "City of Glass",
        author: "Paul Auster",
    },
    {
        title: "Allo",
        author: "lol",
    },
    {
        title: "Alloflkdjaslfdkj ",
        author: "lo flasdf laksdjl",
    },
];

export const RESOLVERS = {
    Query: {
        books: (): any[] => BOOKS,
    },
};
