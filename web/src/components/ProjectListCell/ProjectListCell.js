export const QUERY = gql`
  query {
    projects {
      id
      title
      body
      website
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => <div>Error: {error.message}</div>

import {Link} from '@redwoodjs/router'

export const Success = ({ projects }) => {
  return projects.map((project) => {
    let link = 'http://www.' + project.website
    return (
    <>
      <header>
        <h2>{project.title}</h2>
      </header>
      <main>
        <p>{project.body}</p>
      </main>
      <footer>
        <a href={link}>View this project at {project.website}</a>
      </footer>
    </>
  )})
}
