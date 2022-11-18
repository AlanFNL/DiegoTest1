import React, { useRef, useState } from 'react'
import './New.css'
import { useInViewport } from 'react-in-viewport'
import { useTranslation } from "react-i18next";
import { ethers } from 'ethers';
import Test from '../NFTS_json_files/Test.json'
import C1 from '../assets/cloud1.png'
import C2 from '../assets/cloud2.png'
import C3 from '../assets/cloud3.png'
import C4 from '../assets/cloud4.png'
import C5 from '../assets/cloud5.png'
import A from '../assets/avi.png'


function New() {

    const TestAddress = "0x1068aadB0F45EcffFB743a6E872678E8706bBfff";
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
  
  const handleWhitelist = async (e) => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    await provider.send("eth_requestAccounts", []);
    const tokenId = 1;
    const amount = 1;
    const signer = await provider.getSigner();
    const signerAddress = await signer.getAddress();
    const contract = new ethers.Contract(
        TestAddress,
        Test.abi,
        signer
    );
    const tx = await contract.whitelistMint(signerAddress, tokenId, amount) 
    try { 
        const receipt = await tx.wait()
        console.log(receipt)
        
        }
     catch (err) {
        alert(err)
        

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
                <div className='container_itworks'>
                <img className='plane' src={A}></img>
                </div>
                </div>
            <div className='col'>
            <div className='container_itworks'>
        <h2 className='h2_itworks'>Maradona FanFest </h2>
        <p className='p_itworks'>Un nft INCREIBLE, capaz de cambiar la vida a todo aquel que lo posea, único disponible, POWERED BY REFORCE POWERED BY DIEGO lorem lorem lorem lorem lorem lorem</p>
        <button onClick={handleWhitelist} className='button_itworks'><p className='button_claim'>Comprar NFT</p></button>
        <div className='launch-time'>
            <div>
                <p id='days'>00</p>
                <span>DAYS</span>
            </div>
            <div>
                <p id='hours'>00</p>
                <span>HOURS</span>
            </div>
            <div>
                <p id='minutes'>00</p>
                <span>MINUTES</span>
            </div>
            <div>
                <p id='seconds'>00</p>
                <span>SECONDS</span>
            </div>
        </div>
        </div>
            </div>
        </div>

       </div>


        </div>
        

        </body>
   
    );
}


export default New;