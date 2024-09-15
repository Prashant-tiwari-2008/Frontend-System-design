export const typeDefs = `#graphql
    type Book {
        id : ID
        name : String
        publishYear : Int
        author : Author
    }

    type Author  {
        id : ID,
        name : String,
        books : [Book],
    }

    type  Query  {
        books : [Book]
        authors : [Author] 
    }

    type Mutation {
        addBook(name : String!, publishYear : Int, authorId : ID!,author : String!) : Book!
    }
`