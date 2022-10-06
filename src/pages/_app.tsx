import Link from "next/link"
import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../styles/global"
import { Container, FooterContainer, Footer, HeaderContainer, PageHeader } from "../styles/Pages/app"
import { lightTheme } from "../styles/themes/ligth"

import * as Dialog from '@radix-ui/react-dialog'
import { GetInTouchModal } from "../components/GetInTouchModal"


function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <Container>

          <HeaderContainer>
            <PageHeader>
                <Link href={'/'}>
                  <h1>TheBrabus</h1>
                </Link>
                
                <nav>
                  <ul>
                    <Link href={'/'}>
                      <p>Início</p>
                    </Link>
                    <li> 
                    <Link href={'/projects'}>
                      <p>Projetos</p>
                    </Link>
                    </li>
                    <li> 
                      <Link href={'/about'}>
                        <p>Sobre mim</p>
                      </Link>
                    </li>
                    <li> 
                      <Link href={'/resume'}>Currículo</Link>
                    </li>
                  </ul>
                </nav>

                <Dialog.Root>

                  <Dialog.Trigger asChild>
                    <button>
                      Fale comigo
                    </button>
                  </Dialog.Trigger>

                  <GetInTouchModal />
                </Dialog.Root>
                  
                
                
            </PageHeader>
          </HeaderContainer>


          <Component {...pageProps} />

          <FooterContainer>
            <Footer>
              <div>
                <Link href={'/'}>
                  <h1>TheBrabus</h1>
                </Link>
                
                <nav>
                  <ul>
                    <Link href={'/'}>
                      <p>Início</p>
                    </Link>
                    <li> 
                    <Link href={'/projects'}>
                      <p>Projetos</p>
                    </Link>
                    </li>
                    <li> 
                      <Link href={'/about'}>
                        <p>Sobre mim</p>
                      </Link>
                    </li>
                    <li> 
                      <Link href={'/resume'}>Currículo</Link>  
                    
                    </li>
                  </ul>
                </nav>

              </div>
              
              
              <p>Feito com 💜 por <i>João Paulo Mesquita</i></p>
            </Footer>
          </FooterContainer>
          
          <GlobalStyle />
        </Container>
      </ThemeProvider>
    </>
  )
}

export default MyApp
