import './App.css'
import DarkModeToggle from './DarkModeToggle'

function App() {
  return (
    <div className='p-4 bg-white min-h-screen dark:bg-gray-900 dark:text-white'>
       <DarkModeToggle />
       <h1 className='text-2xl'>Welcome to Dark Mode App</h1>
       <p>This is an example of Implementing Dark Mode using tailwind CSS</p>
    </div>
  )
}

export default App
