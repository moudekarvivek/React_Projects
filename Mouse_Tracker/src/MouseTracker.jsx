import { useEffect, useState } from 'react'
import './App.css'

function MouseTracker() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  
    useEffect(() => {
      const handleMouseMove = (event) => {
        setMousePosition({x: event.clientX, y: event.clientY});
      };
      window.addEventListener('mousemove', handleMouseMove);
      console.log("Mouse move listener added");

      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        console.log("Mouse move listener Removed");
      };
    }, []);
    
  return (
    <div>
        <h2>MOUSE POSITION</h2>
        <p>X: {mousePosition.x}, Y: {mousePosition.y}</p>
    </div>  
  );
}

export default MouseTracker
