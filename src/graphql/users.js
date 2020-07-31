import {gql} from "apollo-boost";

export const usersQuery =     gql`
{
  users(id:"5f2422841bf4a73624c5ef37"){
    firstName
    lastName
    email
    password
    tokenVersion
  }
}`