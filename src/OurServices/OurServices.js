import React, { useState, useRef, useEffect } from 'react'
import { useInViewport } from 'react-in-viewport'
import Uno from '../assets/wallet.png'
import Dos from '../assets/polygon.png'
import Tres from '../assets/browser.png'
import C1 from '../assets/cloud1.png'
import C2 from '../assets/cloud2.png'
import C3 from '../assets/cloud3.png'
import C4 from '../assets/cloud4.png'
import C5 from '../assets/cloud5.png'

import { useTranslation } from "react-i18next";
import '../OurServices/OurServices.css'




function Services () {
    
    const [t, i18n] = useTranslation("global");
    const ref = useRef(null);
    const { inViewport } = useInViewport(
        ref,
        {rootMargin: "-200px"},
        { disconnectOnLeave: false},
        {}
    );

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

   

   const tabs = document.querySelectorAll(".tabs li");
   const contents = document.querySelectorAll(".content_tabs");

   tabs.forEach((tab, index) => {
     tab.addEventListener("click", () => {

        tabs.forEach(tab => tab.classList.remove("active"));

        tab.classList.add("active");

        contents.forEach(c => c.classList.remove("active"));

        contents[index].classList.add("active");

        
     });
   });
   

  
   


    return (
        
    <body id='process' className='ror'>
        <div className='clouds'>
            <img src={C1} id="cloud1"></img>
            <img src={C2} id="cloud2"></img>
            <img src={C3} id="cloud3"></img>
        </div>
          <h3 className='h1_verticals' style={{ transform: `translateX(${offsetY * -0.05}px`}}> ¿Como mintear?</h3>
          {/*
        <h3 className='h2_verticals' style={{ transform: `translateX(${offsetY * -0.15}px`}}> {t("services.our-process2")}</h3>
        */}
    <section className='tab_section'>
        <ul className='tabs'>
            <li className='active'>1. CONFIGURA TU WALLET</li>
            <li>2. COMPRA CRIPTOMONEDAS</li>
            <li>3. LISTO PARA COMPRAR</li>
        </ul>

        <div className='container_tabs'>
            <div className='content_tabs active'>
                <img src={Uno}></img>
                <p>Necesitarás <a href='https://metamask.io'>MetaMask </a>para mintear uno de nuestros Cheetos Chester Drop NFT. Instale la extensión de Chrome o descargue la aplicación móvil para comenzar. Consulte este artículo para aprender a configurar MetaMask. Si tiene curiosidad, puede encontrar otras opciones de billetera aquí.</p>
            </div>
        </div>
        <div className='container_tabs'>
            <div className='content_tabs'>
                <img src={Dos}></img>
                <p>Nuestro Cheetos Chester Drop NFT será gratuito, pero deberá pagar una tarifa de transacción (denominado gas) a la red Ethereum para mintear el NFT. Puede depositar directamente en su billetera MetaMask o usar un intercambio popular como Coinbase,Gemini o un servicio como MoonPay para adquirir una cantidad de ETH. </p>
            </div>
        </div>
        <div className='container_tabs'>
            <div className='content_tabs'>
                <img src={Tres}></img>
                <p>Ya está </p>
            </div>
        </div>

    </section>
    

    </body>  
    
        
    );
}

export default Services;
