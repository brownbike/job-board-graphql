const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    jobs: [Job]
    job(id: ID!): Job
    company(id: ID!): Company
  }

  type Mutation {
    createJob(input: CreateJobInput): Job
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

  input CreateJobInput {
    title: String
    description: String
    companyId: ID
  }
`;

module.exports = { typeDefs };
