import React, { useRef } from 'react'
import { useInViewport } from 'react-in-viewport'
import { useTranslation } from "react-i18next";
import One from '../assets/qatar_1.png';
import Two from '../assets/logo-fes2.png';
import Three from '../assets/qatar_2.png';
import Four from '../assets/ref4.png';

import './Partners.css'

function Partners() {

    
    const [t, i18n] = useTranslation("global");
    const ref = useRef(null);
    const { inViewport } = useInViewport(
        ref,
        {rootMargin: "-200px"},
        { disconnectOnLeave: false},
        {}
    );


    return (
        
           <body  className='body-p'>
          
              <div id='partners' className='client-wrap'>
                 <div className='client-in'>
                 <ul className='ul-p'>
                    <li className='li-p'>
                    <img loading='lazy' className='img-p' src={One} alt=""/>
                   
                    </li>
                    <li className='li-p'>
                    <img loading='lazy' className='img-p' src={Two} alt=""/>
                  
                    </li>
                    <li className='li-p'>
                    <img loading='lazy' className='img-p' src={Three} alt=""/>
                  
                    </li>
                    <li className='li-p'>
                    <img loading='lazy' className='img-p' src={Four} alt=""/>
                  
                    </li>
                    
                 </ul>
                 </div>
              </div>
           
           </body>

         
          
        
            
    

    
    );
}


export default Partners;