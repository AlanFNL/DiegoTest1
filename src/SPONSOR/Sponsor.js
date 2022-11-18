import React, { useState, useRef, useEffect } from 'react'
import { useInViewport } from 'react-in-viewport'
import './Sponsor.css'
import Give from '../assets/give.png'
import { useTranslation } from "react-i18next";



function Sponsor() {
    const [t, i18n] = useTranslation("global");
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
        <body id='nft-factory' className='body_sponsor'>
            
            <section className='section_sponsor'>
              <div className='purple_bg'> 
                <div className='text_sponsor'><p className='p_sponsor'>{t("give.text")}</p> 
                  </div>
              <a href='https://maradonafanfest.com/#promocion'><img className='give' src={Give}></img></a>
                      </div>
              <div className='sponsor_bg'></div>
                   
            </section>
           
           </body>


         
          
        
            
    

    
    );
}


export default Sponsor;