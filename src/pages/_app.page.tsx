import Link from "next/link"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/global"
import { Container } from "../styles/Pages/app"
import { lightTheme } from "../styles/themes/ligth"


import Header  from "../components/Header"
import  Footer  from "../components/Footer"


function MyApp({ Component, pageProps }) {

  
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Container>

          <Header />

          <Component {...pageProps} />
        
          <Footer />
          
          <GlobalStyle />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default MyApp
