import { games, authors, reviews } from '../constant/_db.js';
export const resolvers = {
    Query: {
        games: () => games,
        game: (_,args) => games.find(game => game.id === args.id),
        reviews: () => reviews,
        review: (_,args) => reviews.find(review => review.id === args.id),
        authors: () => authors,
        author: (_,args) => authors.find(author => author.id === args.id)
    },

    Game : {
        reviews(parent){
            return reviews.filter((review) => review.game_id === parent.id )
        }
    },
    Review : {
        author(parent) {
            return authors.find((author) => author.id === parent.author_id)
        },
        game(parent){
            return games.find((game) => game.id === parent.game_id)
        }
    },

    Author : {
        reviews(parent) {
            return reviews.find((review) => review.author_id === parent.id)
        }
    },

    Mutation: {
        addGame(_, args) {
            let newGame = {
                ...args.game,
                id: Math.floor(Math.random() * 10000).toString()
            }
            games.push(newGame);
            return { games: games, newgame: newGame }
        },
        deleteGame(_,args) {
            games = games.filter((g) => g.id !== args.id);
            return games;
        },
        updateGame (_,args){
            games = games.map((g) => {
                if(g.id === args.id){
                    return {...g, ...args.edits}
                }
                return g;
            })
            return _db.games.find((g) => g.id === args.id)
        }
    }

}