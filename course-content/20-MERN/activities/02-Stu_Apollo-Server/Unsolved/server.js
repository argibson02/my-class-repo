const express = require('express');

// TODO: Add a comment describing the functionality of this expression
// This is a graphQL server that allows us to use it from a webpage. API
const { ApolloServer } = require('apollo-server-express');

// TODO: Add a comment describing the functionality of this expression
// importing out tyeDefs and resolvers. These allows us to run queries
const { typeDefs, resolvers } = require('./schemas');
const db = require('./config/connection');

const PORT = process.env.PORT || 3001;
const app = express();

// TODO: Add a comment describing the functionality of this expression
// We are passing the typeDefs and resolvers to Apollo to enable to query our database
const server = new ApolloServer({
  typeDefs,
  resolvers
});

// TODO: Add a comment describing the functionality of this method
// Pass our app to apollo server as middleware
server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

db.once('open', () => {
  app.listen(PORT, () => {
    console.log(`API server running on port ${PORT}!`);
    console.log(`Use GraphQL at http://localhost:${PORT}${server.graphqlPath}`);
  });
});
