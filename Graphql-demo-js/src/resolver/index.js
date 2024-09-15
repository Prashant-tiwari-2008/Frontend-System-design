import { Book, Author } from '../constant/index.js'

export const resolvers = {
    Book: {
        author: (parent, args, context, info) => {
            return Author.find(authorDetail => authorDetail.id === parent.authorId)
        },
    },

    // Author: {
    //     books: (parent, arg, context, info) => {
    //         return Book.filter(bookDetail =>{
    //             console.log(bookDetail.id, 'book id');
    //             console.log(parent.bookId, "parent bookId")
    //            let x = parent.bookId.find(pID => pID == bookDetail.id)
    //            console.log(x,"x")
    //            return x
    //         })
    //     }
    // },/

    Author : {
        books : (parent) => {
            return Book.filter(book => parent.bookId.includes(book.id))
        }
    },
    Query: {
        books: (parent, args, context, info) => {
            return Book;
        },
        authors: () => Author
    },
    Mutation : {
        addBook:(parent, args, context, info) => {
            console.log(args)
           const newBook = {...args,id:Book.length + 1} 
           console.log(newBook,"newBOok")  
           Book.push(newBook)
            return newBook
        }
    }

}