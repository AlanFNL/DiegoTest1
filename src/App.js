import {useState, useEffect} from 'react';
import './App.css';
import Hero from './HeroSection/Hero';
import NavBar from '../src/NavBar/NavBar';


import Partners from './Partners/Partners'
import Sponsor from './SPONSOR/Sponsor'
import Services from './OurServices/OurServices'
import Footer from './Footer/Footer'
import FAQ from './FAQ/FAQ'
import New from './New/New'
import BackToTopButton from './NavBar/BackToTopButton';



import { BrowserRouter} from "react-router-dom";

function App() {
  const [accounts, setAccounts] = useState([]);
  const [balanceInfo, setBalanceInfo] = useState({
    address: "-",
    balance: "-"
  });

  const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.scrollY);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll)
    }, []);

  return (
  
  <div className="overlay">
    <BrowserRouter>
    
  <div className="App">
  

    <div className="NavBar">
      <NavBar accounts={accounts} setAccounts={setAccounts} />
      <BackToTopButton/>
   </div>
   
   <div className="moving-background" style={{ filter: `blur(${offsetY * 0.01}px`}}>
  </div>

  <div className="moving-background2"></div>

      <Hero accounts={accounts} setAccounts={setAccounts} />
      <New />
      
      <Services id='process'/>
      <Sponsor />
      <Partners />
      
      <FAQ/>
      <Footer id='contact'/>

  </div>
  </BrowserRouter>

</div>  

  );
}

export default App;
