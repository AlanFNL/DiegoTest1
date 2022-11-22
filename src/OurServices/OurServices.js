import React, { useState, useRef, useEffect } from 'react'
import { useInViewport } from 'react-in-viewport'
import Uno from '../assets/wallet.png'
import { ethers,  BigNumber} from 'ethers';
import Dos from '../assets/polygon.png'
import Tres from '../assets/browser.png'
import C1 from '../assets/cloud1.png'
import C2 from '../assets/cloud2.png'
import C3 from '../assets/cloud3.png'
import C4 from '../assets/cloud4.png'
import C5 from '../assets/cloud5.png'
import Test from '../NFTS_json_files/Nftes.json'
import { useTranslation } from "react-i18next";
import '../OurServices/OurServices.css'




function Services () {
    
    const TestAddress = "0x0fE085946253f069ec1f22A9867740c8e7C292f2";
    const [mintAmount, setMintAmount] = useState(1);
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

   async function handleMint() {
    if (window.ethereum) {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
            TestAddress,
            Test.abi,
            signer
        );
        
        const response = await contract.mint(BigNumber.from(mintAmount), {
                value: ethers.utils.parseEther((0.002 * mintAmount).toString()),
            });
        try {
            const receipt = await response.wait()
            console.log(receipt)
            popup.classList.add('active')
            

        } catch (err) {
            console.log("error: ", err)
        }
    }
}

   

  
   


    return (
        
    <body id='process' className='ror'>
        <div className='clouds'>
            <img src={C1} id="cloud1"></img>
            <img src={C2} id="cloud2"></img>
            <img src={C3} id="cloud3"></img>
        </div>
          <h3 className='h1_verticals' style={{ transform: `translateX(${offsetY * -0.05}px`}}>{t("howto.h")}</h3>
          {/*
        <h3 className='h2_verticals' style={{ transform: `translateX(${offsetY * -0.15}px`}}> {t("services.our-process2")}</h3>
        */}
    <section className='tab_section'>
        <ul className='tabs'>
            <li className='active'>{t("howto.1")}</li>
            <li>{t("howto.2")}</li>
            <li>{t("howto.3")}</li>
        </ul>

        <div className='container_tabs'>
            <div className='content_tabs active'>
                <img src={Uno}></img>
                <p>{t("howto.1-t")}</p>
            </div>
        </div>
        <div className='container_tabs'>
            <div className='content_tabs'>
                <img src={Dos}></img>
                <p>{t("howto.2-t")}</p>
            </div>
        </div>
        <div className='container_tabs'>
            <div className='content_tabs'>
                <img src={Tres}></img>
                <p><button onClick={handleMint} className='button_itworks2'><p className='button_claim'>{t("header.claim")}</p></button></p>
            </div>
        </div>

    </section>
    

    </body>  
    
        
    );
}

export default Services;
