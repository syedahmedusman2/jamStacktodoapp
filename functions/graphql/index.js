const {ApolloServer, gql} = require('apollo-server-lambda');

const typeDefs = gql`
type Query{
    todos: [Todo]!
} 
type Todo{
    id: ID!
}`;

const resolvers = {
    Query:{
        hello: () => 'Hello-World!',
    },
};

const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: true,
    introspection: true,
});

expors.handler = server.createHandler()