export const typeDefs = `#graphql

    type Book {
        id : ID!
        name : String!
        publishedYear :  number,
        author : String
    }

    type Author : {
        id : ID!
        name : String!
    }

    type Query : {
        books : [Book]
        authors : [author]
    }
`