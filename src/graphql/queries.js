import { gql } from "apollo-boost";

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
      title
      rent
      address
      bedrooms
      bathrooms
      rating
      image
      size
      parish
      owner{
        _id
        email
      }
    }
    favoriteListings {
      _id
      title
      rent
      address
      bedrooms
      bathrooms
      rating
      image
      size
      parish
      owner{
        _id
        email
      }
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

export const ALL_LISTINGS_HOMESCREEN = gql`
{
  listings{
    _id
    title
    rent
    address
    bedrooms
    bathrooms
    rating
    image
    size
    parish
    owner{
      _id
      email
    }
  }
}

`
