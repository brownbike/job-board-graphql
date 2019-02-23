const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    jobs: [Job]
  }

  type Company {
    id: ID!
    name: String
    description: String
  }

  type Job {
    id: ID!
    title: String
    company: Company
    description: String
  }
`;

module.exports = { typeDefs };