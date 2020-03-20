// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Router, Route } from '@redwoodjs/router'

const Routes = () => {
  return (
    <Router>
      <Route path="/api/projects" page={ProjectsPage} name="projects" />
      <Route path="/api/projects/{id:Int}" page={ProjectPage} name="project" />
      <Route path="/api/projects/{id:Int}/edit" page={EditProjectPage} name="editProject" />
      <Route path="/api/projects/new" page={NewProjectPage} name="newProject" />
      <Route path="/" page={HomePage} name="home" />
      <Route path="/about" page={AboutPage} name="about" />
      <Route path="/projects" page={ProjectlistPage} name="projects" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
