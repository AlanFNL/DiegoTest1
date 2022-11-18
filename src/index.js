import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ChakraProvider } from '@chakra-ui/react'
import {I18nextProvider} from "react-i18next";
import i18next from 'i18next';

import global_es from  "./Translations/es/global.json"
import global_en from  "./Translations/en/global.json"

i18next.init({
  interpolation: {escapeValue: false},
  lng: "es",
  resources: {
    es: {
      global: global_es,
    },
    en: {
      global: global_en,
    }
  }
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>  
    <ChakraProvider>
    <I18nextProvider i18n={i18next}>

    <App /> 

    </I18nextProvider>
    </ChakraProvider>
  </React.StrictMode>
);  

