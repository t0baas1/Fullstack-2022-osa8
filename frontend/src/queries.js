import { gql } from '@apollo/client'

export const ALL_AUTHORS = gql`
    query {
        allAuthors {
            name
            born
            bookCount
            id
        }
    }
`

export const ALL_BOOKS = gql`
    query {
        allBooks {
            title
            author
            published
            genres
        } 
    }
`

export const EDIT_AUTHOR = gql`
    mutation editAuthor($name: String!, $yearInt: Int!)
    {
        editAuthor(name: $name, setBornTo: $yearInt){
           name
           born
        }
    }
`

export const CREATE_BOOK = gql`
    mutation createBook($title: String!, $author: String!, $publishedInt: Int!, $genres:[String!]!){
        addBook(
            title: $title,
            author: $author,
            published: $publishedInt,
            genres: $genres,
        ){
            title
            author
            published
            genres
        }
    }
`