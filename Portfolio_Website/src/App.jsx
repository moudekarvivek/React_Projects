import './App.css'
import Header from './Component/Header';
import About from './Component/About';
import ProjectList from './Component/ProjectList';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

//JSX is a syntax extension for JavaScript that looks like HTML
//It allows you to write HTML like code within Javascript,
//Which react then transforms into JavaScript objects.
//you can embed any valid JavaScript expression inside JSX by wrapping it in curly braces.
//It uses CamelCase Syntax

function App() {
return (
    <div className='App'>
      
      <Header/>
      <About />
      <ProjectList />
      <Contact/>
      <Footer/>
    </div>
    
  );
}

export default App
