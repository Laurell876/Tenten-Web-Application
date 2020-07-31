import { gql } from "apollo-boost";

import {
    GraphQLString,
    GraphQLObjectType,
    GraphQLNonNull,
    GraphQLInt
} from "graphql";

const UserInput = new GraphQLObjectType({
    name: "User",
    description: "User type definition",
    fields: () => ({
        firstName: { type: new GraphQLNonNull(GraphQLString) },
        lastName: { type: new GraphQLNonNull(GraphQLString) },
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
        tokenVersion: { type: new GraphQLNonNull(GraphQLInt) }
    }),
});

const LoginInput = new GraphQLObjectType({
    name: "LoginInput",
    description: "Login input definition",
    fields: () => ({
        email: { type: new GraphQLNonNull(GraphQLString) },
        password: { type: new GraphQLNonNull(GraphQLString) },
    }),
});


export const SIGN_UP = gql`
  mutation registerV2($type: UserInput!) {
    registerV2(data: $type) {
      userId
      token
    }
  }
`;

export const LOGIN = gql`
mutation loginV2 ($type: LoginInput!) {
    loginV2(data: $type) {
            userId
            token
    }
}
`
