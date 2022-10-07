import Link from "next/link";
import { FooterContainer, FooterContent } from "./styles";

export function Footer(){
  return(
    <FooterContainer>
            <FooterContent>
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
            </FooterContent>
          </FooterContainer>
  )
}