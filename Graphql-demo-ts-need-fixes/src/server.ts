import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import { resolvers } from './resolver/index';
import { typeDefs } from  './schema/index';



const server = new ApolloServer({
    typeDefs,
    resolvers,
})

const { url } = await startStandaloneServer(server, {
    context : async ({req}) => {
        console.log(req,"server req")
        return 'test'
    },
    listen: { port: 4000 },
});

console.log(`Server ready at : ${url}`)