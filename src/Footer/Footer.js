import React, { useRef} from 'react'
import { useInViewport } from 'react-in-viewport'
import './Footer.css';
import instagramLogo from '../assets/logo-instagram.svg'
import '../assets/wave.png'
import C1 from '../assets/cloud1.png'
import C2 from '../assets/cloud2.png'
import C3 from '../assets/cloud3.png'
import C4 from '../assets/cloud4.png'
import C5 from '../assets/cloud5.png'

function Footer() {

    

    const ref = useRef(null);
    const { inViewport } = useInViewport(
        ref,
        {rootMargin: "-200px"},
        { disconnectOnLeave: false},
        {}
    );


    return (
        
            <body className='body_footer'>
                <footer id='contact'>
                    <div className='waves'>
                        <div loading='lazy' className='wave' id='wave1'></div>
                        <div loading='lazy' className='wave' id='wave2'></div>
                        <div loading='lazy' className='wave' id='wave3'></div>
                        <div loading='lazy' className='wave' id='wave4'></div>
                    </div>
                    <ul className='social_icon'>
                        <li className='li_social'><a className='a_social' href='https://www.instagram.com/maradonafanfest/' target="_blank" rel="noopener noreferrer"><img className='ig' loading='lazy' alt='instagram' src={instagramLogo}/></a></li>
                       
                    </ul>
                    <p className='p_footer'>Powered by <a href='https://www.reforceinfinity.io' target="_blank" rel="noopener noreferrer">Reforce</a></p>
                </footer>
               
            </body>


         
          
        
            
    

    
    );
}


export default Footer;