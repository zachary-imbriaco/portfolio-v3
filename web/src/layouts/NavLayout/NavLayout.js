import {Link, routes} from '@redwoodjs/router'

const NavLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <ul>
            <li>
              <Link to={routes.home()}>Home</Link>
            </li>
            <li>
              <Link to={routes.about()}>About</Link>
            </li>
            <li>
              <Link to={routes.projects()}>Projects</Link>
            </li>
          </ul>
        </nav>
      </header>
    
      <main>{children}</main>
    </>
  )
}

export default NavLayout
