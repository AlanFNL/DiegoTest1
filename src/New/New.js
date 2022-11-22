import React, { useRef, useState } from 'react'
import './New.css'
import { useInViewport } from 'react-in-viewport'
import { useTranslation } from "react-i18next";
import { ethers,  BigNumber} from 'ethers';

import Test from '../NFTS_json_files/Nftes.json'
import C1 from '../assets/cloud1.png'
import C2 from '../assets/cloud2.png'
import C3 from '../assets/cloud3.png'
import C4 from '../assets/cloud4.png'
import C5 from '../assets/cloud5.png'
import B from '../assets/fanfesty.gif'
import confetti from '../assets/confetti.gif'


function New() {

    const TestAddress = "0x0fE085946253f069ec1f22A9867740c8e7C292f2";
    const [mintAmount, setMintAmount] = useState(1);
    const [whiteInfo, setWhiteInfo] = useState({
        address: "-",
        balance: "-"
      });
    const Tienee = whiteInfo.balance >= 1;
    const [t, i18n] = useTranslation("global");
    

    const ref = useRef(null);
  const { inViewport } = useInViewport(
      ref,
      {rootMargin: "-100px"},
      { disconnectOnLeave: false},
      {}
  );
  



let popup = document.querySelector('.popup_mint');
let close = document.querySelector('.close_mint');

const Ref_m = useRef()

    
    const BotonOff = () => {
        Ref_m.current.classList.remove('active')
    
    }

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




var countDownDate = new Date("Dec 10, 2022 00:00:00").getTime();
var x = setInterval(function(){
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 *24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

}, 1000)



    return (
        <body className='body_new'>
            <div className='clouds'>
            <img src={C1} id="cloud1"></img>
            <img src={C2} id="cloud2"></img>
            <img src={C3} id="cloud3"></img>
            <img src={C4} id="cloud4"></img>
            <img src={C5} id="cloud5"></img>
        </div>
        <div id='about'>
        


       <div className='contents flow'>
        <div className='even-columns'>
            <div className='col'>
                <div className='container_itworks2'>
                <img className='plane' src={B}></img>
                </div>
                </div>
            <div className='col'>
            <div className='container_itworks'>
        <h2 className='h2_itworks'>MARADONA FANFEST</h2>
        <p className='p_itworks'>{t("header.about-us-text")}</p>
        <button onClick={handleMint} className='button_itworks'><p className='button_claim'>{t("header.claim")}</p></button>
        <div className='launch-time'>
            <div>
                <p id='days'>00</p>
                <span>{t("countdown.1")}</span>
            </div>
            <div>
                <p id='hours'>00</p>
                <span>{t("countdown.2")}</span>
            </div>
            <div>
                <p id='minutes'>00</p>
                <span>{t("countdown.3")}</span>
            </div>
            <div>
                <p id='seconds'>00</p>
                <span>{t("countdown.4")}</span>
            </div>
        </div>
        </div>
            </div>
        </div>

       </div>
       <div ref={Ref_m} className='popup_mint'>
        <h2>Congratulations!</h2>
        <p>Your Collectible has been minted successfully!</p>
        <img className='confetti' src={confetti}></img>
        <b onClick={BotonOff} className='close_mint'>x</b>
       </div>

       
        </div>
        

        </body>
   
    );
}


export default New;