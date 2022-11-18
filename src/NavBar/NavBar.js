import React, {useState} from 'react';
import { Box, Button, Flex} from '@chakra-ui/react';
import { useTranslation } from "react-i18next";
import { HashLink as Links } from "react-router-hash-link";
import '../NavBar/NavBar.css'




const NavBar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);
   
    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    
    const [t, i18n] = useTranslation("global");
    const [active, setActive] = useState('menu_navbar');
    const [icon, setIcon] = useState("toggler_navbar");

    const ToggleNavbar = () => {
        active === 'menu_navbar' ? setActive('menu_navbar active_navbar') : setActive('menu_navbar')
        
        if (icon === "toggler_navbar") {
            setIcon("toggler_navbar toggle");
          } else setIcon("toggler_navbar");
        ;
    
    }

    
    /* Función para que haya un offset al tocar el link */

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = 0; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }




    return (
       
        <Flex justify="space-between" align="center" padding="0px">
          
            <Flex justify="space-around" width="20%" padding="0 75px">
               
                
            </Flex>

            
            <Flex
            marginTop={-2}
            justify="space-around"
            align="center"
            width="57%"
            padding="30px 30px 30px 30px">
                
              
             <nav>
             <ul className={active}>

             <Links to="#about" smooth scroll={el => scrollWithOffset(el)}>
                <a className='a_navbar' href='#about'>COMPRAR</a>
                </Links>
               
             
                <Links className='link' to="#process" smooth scroll={el => scrollWithOffset(el)}>
                <a className='a_navbar' href='#process'>{t("nav.2")}</a>
                </Links>

                <Links to='#partners' smooth scroll={el => scrollWithOffset(el)}>
                <a className='a_navbar' href='#partners'>FAQS</a>
                </Links>

                <Links to='#contact' smooth scroll={el => scrollWithOffset(el)}>
                <a className='a_navbar' href='#contact'>{t("nav.6")}</a>
                </Links>
                
                {isConnected ? (
                <div className='a_navbar conectado'>{t("nav.8")}</div>
                 ) : (
                  
                    <a onClick={connectAccount} className='a_navbar conectar'>CONECTAR</a>
            
                
                    )}
                
                
                    
                   
                   
            
                

                </ul>
              <div onClick={ToggleNavbar} className={icon}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
              </div>
              
               </nav>
               <Links to="#about" smooth scroll={el => scrollWithOffset(el)}></Links>
               

               
           <div className='botones'>
             <button className='boton_l' onClick={() => i18n.changeLanguage("es")}>ES</button>
             <hr className='hr_botones'></hr>
             <button className='boton_l' onClick={() => i18n.changeLanguage("en")}>EN</button>
             </div>
            </Flex> 
            
        </Flex>
        
       
    )
}

export default NavBar;