import { AppProps } from 'next/app'
import React from 'react'
import GlobalStyle from '../styles/global';

const MyApp: React.FC<AppProps> = ({ Component, pageProps }) => {
  return(
  <>
    <Component {...pageProps} />
    <GlobalStyle />
  </>
  )
}

export default MyApp
