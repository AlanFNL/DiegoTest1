import React, { useRef } from 'react'
import {Box, ScaleFade, Image} from '@chakra-ui/react'
import {useState, useEffect} from 'react';
import { useInViewport } from 'react-in-viewport'
import ReforceLogo from '../assets/favi.png'
import './NavBar.css'


function BackToTopButton() {
    const [BackToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY >= 0) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    }, [])

    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }

    const ref = useRef(null);
    const { inViewport } = useInViewport(
        ref,
        {rootMargin: "100px"},
        { disconnectOnLeave: false},
        {}
    );



    return <div >
   
    
    <Box
    className='reforLogo'
     left= "10%"
     width="20%"
     height="100%"
     position="fixed"
     top="0.5rem"
     
     
     
     
     
     ref={ref}> 
     {BackToTopButton && (
        
        <Image className='reforLogo' cursor="pointer" src={ReforceLogo} boxSize="100px" margin="0 15px" height="clamp(4rem, 10vh, 5rem)" width="clamp(4rem, 10vw, 5rem)" onClick={scrollUp}/>
   
        
   
     )}
     
    
     </Box>
     
  </div>
  

}

export default BackToTopButton