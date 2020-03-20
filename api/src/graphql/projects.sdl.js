export const schema = gql`
  type Project {
    id: Int!
    title: String!
    body: String
    website: String!
    createdAt: DateTime!
  }

  type Query {
    projects: [Project]
    project(id: Int!): Project
  }

  input ProjectInput {
    title: String
    body: String
    website: String
  }

  type Mutation {
    createProject(input: ProjectInput!): Project
    updateProject(id: Int!, input: ProjectInput!): Project
    deleteProject(id: Int!): Project
  }
`
