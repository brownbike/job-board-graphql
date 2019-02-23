const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Query {
    jobs: [Job]
    job(id: ID!): Job
    company(id: ID!): Company
  }

  type Company {
    id: ID!
    name: String
    description: String
    jobs: [Job]
  }

  type Job {
    id: ID!
    title: String
    company: Company
    description: String
  }
`;

module.exports = { typeDefs };
