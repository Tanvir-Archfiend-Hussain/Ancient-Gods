// https://www.youtube.com/watch?v=W0bEL93tt4k&t=188s    10 min
import './App.css';
import {motion} from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import images from "./images.js";


function App() {
  
  const [width, setWidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
      console.log(carousel.current)
  }, []);
  
  return (
    <div className='App'>
      <motion.div ref={carousel} 
                  className='carousel'
                  >
        <motion.div 
                  drag="x" 
                  dragConstraints={{right : 0}}
                  className="inner-carousel"
                  >
            {images.map( image => {
                return (
                  <motion.div className='item' key={image}>
                      <img src={image} alt="" />
                  </motion.div>
                );
            })}
        </motion.div>
      </motion.div>
    </div>  
  );
}

export default App;
