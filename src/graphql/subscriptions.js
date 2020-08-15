import { gql } from "apollo-boost";
import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID
} from "graphql";


export const NEW_MESSAGE = gql`
subscription{
    newMessage{
      _id
      text
      createdAt
      sender{
        _id
      }
      receiver{
        _id
      }
      chat{
        _id
      }
    }
  }
`

