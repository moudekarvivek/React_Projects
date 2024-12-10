function ProjectList(){
    const projects = [
        {
          title:"Project 1",
          description:"A Web Application built using React and Node.js",
          link:"#"
        },
        {
          title:"Project 2",
          description:"An E-commerce website built using MERN stack",
          link:"#"
        },
      ]
      return(
        <section id ='projects' className = 'projects-section'>
        <h2>Projects</h2>
        
        <div className='projects-list'>
          {projects.map((project, index) =>(
            <div key={index} className='project-item'>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target='_blank' rel="noopener noreferrer">View Project</a>

            </div>
          ))}
        </div>
      </section>
      );

}

export default ProjectList;