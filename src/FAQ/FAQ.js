import React, { useState, useRef, useEffect } from 'react'
import { useInViewport } from 'react-in-viewport'
import './FAQ.css'
import { useTranslation } from "react-i18next";



function FAQ() {
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
  
    const Ref_f = useRef()

  

    const faqs = document.querySelectorAll(".faq")
   
    faqs.forEach((faq) => {
      faq.addEventListener("click", () => {
 
         faqs.forEach(faq => faq.classList.remove("active"));
 
         faq.classList.toggle("active");
      })
    })

    return (
        <body id='nft-factory' className='body_faq'>
            
            <section className='section_faq'>
              <h2 className='title_faq'>FAQs</h2>
              <div className='faq'>
                  <div className='question'>
                    <h3>{t("faq.1q")}</h3>

                    <svg width="15" height="10" viewBox="0 0 42 25">
                      <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                    </svg>
                  </div>
                      
                    <div className='answer'>
                      <p>
                      {t("faq.1a")}
                      </p>
                    </div>
                </div>
              <div className='faq'>
                  <div className='question'>
                    <h3>{t("faq.2q")}</h3>

                    <svg width="15" height="10" viewBox="0 0 42 25">
                      <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                    </svg>
                  </div>
                      
                    <div className='answer'>
                      <p>
                      {t("faq.2a")}
                      </p>
                    </div>
                </div>
              
              <div className='faq'>
                  <div className='question'>
                    <h3>{t("faq.3q")}</h3>

                    <svg width="15" height="10" viewBox="0 0 42 25">
                      <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                    </svg>
                  </div>
                      
                    <div className='answer'>
                      <p>
                      {t("faq.3a")}
                      </p>
                    </div>
                </div>
                <div className='faq'>
                  <div className='question'>
                    <h3>{t("faq.4q")}</h3>

                    <svg width="15" height="10" viewBox="0 0 42 25">
                      <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                    </svg>
                  </div>
                      
                    <div className='answer'>
                      <p>
                      {t("faq.4a")}
                      </p>
                    </div>
                </div>

                <div className='faq'>
                  <div className='question'>
                    <h3>{t("faq.5q")}</h3>

                    <svg width="15" height="10" viewBox="0 0 42 25">
                      <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                    </svg>
                  </div>
                      
                    <div className='answer'>
                      <p>
                      {t("faq.5a")}
                      </p>
                    </div>
                </div>

                <div className='faq'>
                  <div className='question'>
                    <h3>{t("faq.6q")}</h3>

                    <svg width="15" height="10" viewBox="0 0 42 25">
                      <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                    </svg>
                  </div>
                      
                    <div className='answer'>
                      <p>
                      {t("faq.6a")}
                      </p>
                    </div>
                </div>

                <div className='faq'>
                  <div className='question'>
                    <h3>{t("faq.7q")}</h3>

                    <svg width="15" height="10" viewBox="0 0 42 25">
                      <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                    </svg>
                  </div>
                      
                    <div className='answer'>
                      <p>
                      {t("faq.7a")}
                      </p>
                    </div>
                </div>

                <div className='faq'>
                  <div className='question'>
                    <h3>{t("faq.8q")}</h3>

                    <svg width="15" height="10" viewBox="0 0 42 25">
                      <path d="M3 3L21 21L39 3" stroke="white" stroke-width="7" stroke-linecap="round"/>
                    </svg>
                  </div>
                      
                    <div className='answer'>
                      <p>
                      {t("faq.8a")}
                      </p>
                    </div>
                </div>
                   
            </section>
            <footer className='footer_faq' id='contact'>
                    <div className='waves'>
                        <div loading='lazy' className='wave' id='wave1'></div>
                        <div loading='lazy' className='wave' id='wave2'></div>
                        <div loading='lazy' className='wave' id='wave3'></div>
                        <div loading='lazy' className='wave' id='wave4'></div>
                    </div>
                </footer>
           </body>


         
          
        
            
    

    
    );
}


export default FAQ;