const { gql } = require("apollo-server");

const typeDefinitions = gql`
  type Query {
    hello: String!
  }
`

module.exports = {
  typeDefinitions
};
