import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type Query {
    getUser(id: ID!): User
    getAllUsers: [User]
    getPost(id: ID!): Post
    getAllPosts: [Post]
  }

  type Mutation {
    createUser(name: String!, email: String!): User
    updateUser(id: ID!, name: String, email: String): User
    deleteUser(id: ID!): User
    createPost(title: String!, content: String!, authorId: ID!): Post
    updatePost(id: ID!, title: String, content: String): Post
    deletePost(id: ID!): Post
  }

  type User {
    id: ID!
    name: String!
    email: String!
    posts: [Post]
  }

  type Post {
    id: ID!
    title: String!
    content: String!
    author: User
  }
`;

export default typeDefs;