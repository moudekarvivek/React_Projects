import './App.css'

//JSX is a syntax extension for JavaScript that looks like HTML
//It allows you to write HTML like code within Javascript,
//Which react then trandforms into JavaScript objects.
//you can embed any valid JavaScript expression inside JSX by wrapping it in curly braces.
//It uses CamelCase Syntax

function App() {
  const name = "Vivek Moudekar";
  const profession = "Full Stack Developer";
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
return (
    <div className='App'>
      
      {/* Header Section here */}
      <header className='header'>
        <h1>{name}</h1>
        <p>{profession}</p>
        <nav>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </nav>
      </header>

      {/* About Section here */}
      <section id='about' className='about-section'>
        <h2>About Me</h2>
        <p>
          Hello! I am {name}, a passionate {profession} I love building real world applications and solving problems.
        </p>
      </section>
      
      {/* Projects Section here */}
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

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <h2>Contact Me</h2>
        <p>If you would like to get in touch, feel free to email me at <a href='mailto:vivek@example.com'>vivek@example.com</a></p>
      </section>

      {/* Footer Section */}
      <footer className='footer'>
        <p>2025. All right Reserved</p>
      </footer>
    </div>
    
  );
}

export default App
