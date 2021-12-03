const { Class } = require('../models');

// TODO: Add a comment describing the functionality of this expression
// this is our resolver function that allows us to query our database
const resolvers = {
  Query: {
    classes: async () => {
      // TODO: Add a comment describing the functionality of this statement
      // This finds everything in the Class collection
      return await Class.find({});
    }
  }
};

module.exports = resolvers;
