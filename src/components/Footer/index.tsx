import { faGithub, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { FooterContainer, FooterContent } from "./styles";

export default function Footer(){
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
              
              <ul>
              <li>
                <Link href={'https://www.linkedin.com/in/jo%C3%A3o-paulo-mesquita-02a4a3179/'} target="_blank">
                  <FontAwesomeIcon icon={faLinkedin} size={'2x'}/>
                </Link>
              </li>
              <li>
                <Link href={'https://github.com/jp2mesquita'} target='_blank'>
                  <FontAwesomeIcon icon={faGithub} size={'2x'}/>
                </Link>
              </li>
              <li>
                <Link href={'https://twitter.com/jpmesquita_ump'} target='_blank'>
                  <FontAwesomeIcon icon={faTwitter} size={'2x'}/>
                </Link>
              </li>
              <li>
                <Link href={'https://www.instagram.com/joaopaulomesquita/'} target='_blank'>
                  <FontAwesomeIcon icon={faInstagram} size={'2x'}/>
                </Link>
              </li>

            </ul>
              <p>Feito com 💜 por <i>João Paulo Mesquita</i></p>
            </FooterContent>
          </FooterContainer>
  )
}