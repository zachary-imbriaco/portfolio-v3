import NavLayout from "src/layouts/NavLayout/NavLayout"
import ProjectListCell from 'src/components/ProjectListCell'

const ProjectlistPage = () => {
  return (
    <NavLayout>
      <div class='projectList'>
        <ProjectListCell />
      </div>
    </NavLayout>
  )
}

export default ProjectlistPage
