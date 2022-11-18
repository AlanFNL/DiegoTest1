import React from "react";
import {Image, Box, Flex} from "@chakra-ui/react";
import refor3 from '../assets/logo-fest.png'
import '../HeroSection/Hero.css'




function Hero() {
    
   
   
    return (

        <Flex justify="center" align="center" >
            <Box marginTop={400} height={600} width={500}>
                <div>
                <Image className="reforceHeaderText" src={refor3}  />
               
              

            </div>
            

    

            </Box>
            
        </Flex>



    )
    
   
    
}

export default Hero;