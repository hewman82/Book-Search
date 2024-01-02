const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    thoughts: [Thought]!
  }

  input BookInput {
    authors: String!
    description: String!
    title: String!
    bookId: String!
    image: String! 
    link: String
  }

  type Book {
    _id: ID
    authors: String
    description: String!
    title: String!
    bookId: String!
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(thoughtId: ID!): Thought
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    saveBook(bookId: ID!, input: BookInput): User
    removeBook(thoughtId: ID!): User
  }
`;

module.exports = typeDefs;
