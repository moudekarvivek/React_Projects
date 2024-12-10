function About(){
    const name = "Vivek Moudekar";
    const profession = "Full Stack Developer";
    return(
        <section id='about' className='about-section'>
            <h2>About Me</h2>
            <p>
              Hello! I am {name}, a passionate {profession} I love building real world applications and solving problems.
            </p>
        </section>
    );
}

export default About;