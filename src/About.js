import React, { useState, useRef, useEffect } from 'react'
import { Flex, Container, SlideFade, Heading, Grid, GridItem, Box} from '@chakra-ui/react'
import { useInViewport } from 'react-in-viewport'
import './App.css';
import reforlogo from './assets/refor.png'
import mileniumlogo from './assets/milenium.png'


function About() {

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

    const ref = useRef(null);
    const { inViewport } = useInViewport(
        ref,
        {rootMargin: "-200px"},
        { disconnectOnLeave: false},
        {}
    );


    return (
        <body>
            <section className='claseH2test' style={{ clipPath: `circle(${offsetY * 0.4}px at center center`}}>
           <h2 className='innerText'>QUIENES SOMOS</h2>
           </section>
           
           </body>


         
          
        
            
    

    
    );
}


export default About;