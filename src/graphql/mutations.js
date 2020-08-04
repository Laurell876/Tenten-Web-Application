import { gql } from "apollo-boost";
import {
  GraphQLString,
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLInt,
  GraphQLBoolean,
  GraphQLID
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
  mutation registerV2($data: UserInput!) {
    registerV2(data: $data) {
      user{
        _id
        firstName
        lastName
        email
      }
      accessToken
    }
  }
`;

export const LOGIN = gql`
mutation loginV2 ($data: LoginInput!) {
    loginV2(data: $data) {
            user {
              _id
              firstName
              lastName
              email
            }
            accessToken
    }
}
`


const ListingInput = new GraphQLObjectType({
  name: "ListingInput",
  description: "Input type used when creating listings",
  fields: () => ({
    title: { type: new GraphQLNonNull(GraphQLString) },
    bedrooms: { type: new GraphQLNonNull(GraphQLInt) },
    bathrooms: { type: new GraphQLNonNull(GraphQLInt) },
    address: { type: new GraphQLNonNull(GraphQLString) },
    city: { type: new GraphQLNonNull(GraphQLString) },
    parish: { type: new GraphQLNonNull(GraphQLString) },
    size: { type: new GraphQLNonNull(GraphQLInt) },
    description: { type: GraphQLString },
    rent: { type: new GraphQLNonNull(GraphQLInt) },
    rating: { type: GraphQLInt },
    featured: { type: GraphQLBoolean }
  })
})

const ListingUpdateInput = new GraphQLObjectType({
  name: "ListingInput",
  description: "Input type used when creating listings",
  fields: () => ({
    id: {type: new GraphQLNonNull(GraphQLID)},
    title: { type: new GraphQLNonNull(GraphQLString) },
    bedrooms: { type: new GraphQLNonNull(GraphQLInt) },
    bathrooms: { type: new GraphQLNonNull(GraphQLInt) },
    address: { type: new GraphQLNonNull(GraphQLString) },
    city: { type: new GraphQLNonNull(GraphQLString) },
    parish: { type: new GraphQLNonNull(GraphQLString) },
    size: { type: new GraphQLNonNull(GraphQLInt) },
    description: { type: GraphQLString },
    rent: { type: new GraphQLNonNull(GraphQLInt) },
    rating: { type: GraphQLInt },
    featured: { type: GraphQLBoolean }
  })
})



export const CREATE_LISTING = gql`
mutation createListing ($data: ListingInput!) {
  createListing(data: $data){
    _id
  }
}`

export const UPDATE_LISTING = gql`
mutation updateListing ($data: ListingUpdateInput!) {
  updateListing(data: $data){
    _id
  }
}`

export const LOGOUT = gql`
mutation{
  logout
}
`

export const ADD_FAVORITE = gql`
mutation addFavorite($id: ID!){
  addFavorite(id: $id){
    _id
    title
    rent
  }
}
`

export const REMOVE_FAVORITE = gql`
mutation removeFavorite($id: ID!) {
  removeFavorite(id:$id){
    _id
    title
    rent
  }
}
`

export const REMOVE_LISTING = gql`
mutation removeListing($id: ID!) {
  removeListing(id: $id){
    _id
  }
}
`

