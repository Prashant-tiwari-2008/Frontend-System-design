export const Book = [
    {id : 1, name: 'abc', publishYear : 2001, author : "prashant", authorId : 1001},
    {id : 2, name: 'def', publishYear : 2002, author : "Pradeep", authorId : 1002},
    {id : 3, name: 'ghi', publishYear : 2003, author : "Sweta", authorId : 1003},
]
export const Author = [
    {id : 1001, name: 'abc', bookId: [1,2]},
    {id : 1002, name: 'def', bookId: [2,3]},
    {id : 1003, name: 'ghi', bookId: [3]},
]