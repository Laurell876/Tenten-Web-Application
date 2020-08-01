import {gql} from "apollo-boost";

export const ALL_USERS = gql`
{
  users{
    firstName
    lastName
    email
    password
    tokenVersion
  }
}`

export const ME = gql`
{
  me{
      tokenVersion
    _id
    firstName
    lastName
    email
    createdListings {
      _id
    }
    favoriteListings {
      _id
    }
    reviews {
      _id
    }
    messagesSent {
      _id
    }
    messagesReceived {
      _id
    }
    chats{
    	_id
    }
  }
}
`