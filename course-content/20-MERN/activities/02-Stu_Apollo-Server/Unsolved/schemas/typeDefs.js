const { gql } = require('apollo-server-express');

const typeDefs = gql`
  # TODO: Add a comment describing the functionality of this statement
  # Builds out how the response will be modeled

  type Class {
    _id: ID
    name: String
    building: String
    creditHours: Int
  }

  # TODO: Add a comment describing the functionality of this statement
  # This connects our resolvers to typeDefs
  
  type Query {
    classes: [Class]
  }
`;

module.exports = typeDefs;
