import { faArrowRightFromBracket, faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import Avatar from "../../components/Avatar";
import Card from "../../components/Card";
import { CardFooter, ResumeContainer, PageTitle, CardWrapper, TextWrapper, LinksWrapper, SkillsContainer } from "./styles";


import styledComponentsLogo from '../../assets/tools/logo-dark-text.png'
import nextLogoDark from '../../assets/tools/next-logo-dark-text.png'
import htmlLogo from '../../assets/tools/html-logo.png'
import cssLogo from '../../assets/tools/css-logo.png'
import jsLogo from '../../assets/tools/js-logo.png'
import reactLogoVertical from '../../assets/tools/react-logo-vertical.png'
import stitchesLogo from '../../assets/tools/hero.webp'
import typescriptLogo from '../../assets/tools/typescript-logo.png'
import nodeLogo from '../../assets/tools/node-logo.png'
import sassLogo from '../../assets/tools/sass-logo.png'

export default function Project(){
  return(
    <>
      <PageTitle>
        <h1>Currículo</h1>
      </PageTitle>

      <ResumeContainer>
        <CardWrapper>
          <Card>
            <Avatar />
            <CardFooter>

              <div>
                <h2>João Paulo Mesquita</h2>
                <p>Desenvolvedor front-end </p>
                <p>jp-mesquita@live.com</p>
              </div>
            </CardFooter>
          </Card>

          <Card>
            <div></div>
            <LinksWrapper>
              <Link href={'https://www.linkedin.com/in/jp2mesquita/'} target='_blank' >
                <h3>Linkedin <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h3>
                
              </Link>
              <Link href={'https://github.com/jp2mesquita'} target='_blank'>
                <h3>Github <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h3>
              </Link>
              <Link href={'https://twitter.com/jpmesquita_ump'} target='_blank'>
                <h3>Twitter <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h3>
              </Link>
              <Link href={'https://www.instagram.com/joaopaulomesquita/'} target='_blank'>
                <h3>Instagram <FontAwesomeIcon icon={faArrowUpRightFromSquare} /></h3>
              </Link>
            </LinksWrapper>

          </Card>

        </CardWrapper>
        <TextWrapper>
          <h2>Sobre mim</h2>
          <p>Sou desenvolvedor web, especialista em front end, com foco em tecnologias modernas e escaláveis.</p>

          <h2>Formação</h2>
          <h3><i>Universidade de Brásilia </i><span>2013-2018</span></h3>
          <p>Graduação em <span>Lincenciatura em Matemática. </span></p>
          <p>Foi durante a minha trajetória na universidade que tive os meus primeiros contatos com a programação. 
          </p>
          <p>Foi lá também onde colaborei e paticipei de várias feiras de ciências como a SNTC (Semana Nacional de Ciências e Tecnlogia) e os eventos da Semana Universitária, o que me fez ampliar ainda mais a minha visão sobre as possibilidades e vantagens do universo do desenvolvimento.</p>
          <br />
          <h3> <i>Rocketseat</i> <span>2022-2022</span></h3>

          <h4>Trilha Fundamentar Discover</h4>
          <p>Com um currículo de aprendizado incluindo HTML, CSS, JavaScript, NodeJS, SQL, Git e Github foi neste curso que consolidei os fundamentos básicos para o desenvolvimento web da forma mais moderna possível com aulas atualizadas e desafios desenhados para aprimorar e fixar ainda mais os conhecimentos.</p>

          <h4>Trilha Especializar Discover</h4>
          <p>Com o foco em expandir os conhecimentos básicos para tecnoligas amplamente utilizadas no mercado, este curso me trouxe os fundamentos da especialização em front-end. Contando com um currículo que aborda CSS transition e animation, criação e consumo de APIs, Fundamentos do ReactJS, Typescript, e Github para times, este curso me trouxe uma visão panorâmica do mercado de trabaho e das tecnologias mais adequedas para o momento.</p>
          
          <h4>Trilha ReactJS Ignite (cursando)</h4>
          <p>Já com a base e os fundamentos consolidados, este curso trás o que é preciso para alcançar a especialização. Através do desenvolvimento de muitos projetos, é aqui que estou aprendendo as ferramentas mais potentes para o front-end. Dentre outros conhecimentos, este curso conta com ReactJS, NextJS, Styled-components, SASS, Stitches e Tailwind.   </p>

          <h2>Habilidades</h2>

          <SkillsContainer>
              <span>
                <Image src={htmlLogo} alt=''  width={100} height={100} objectFit='contain'/>  
              </span>
              <span>
                <Image src={cssLogo} alt=''  width={100} height={100} objectFit='contain'/>
              </span>  
              <span>
                <Image src={jsLogo} alt=''  width={100} height={95} objectFit='contain'/>
              </span>
              <span>
                <Image src={nodeLogo} alt=''  width={100} height={100} objectFit='contain'/>
              </span>
              <span>
                <Image src={sassLogo} alt=''  width={100} height={100} objectFit='contain'/>
              </span>
              <span>
                <Image src={reactLogoVertical} alt='' width={100} height={100} objectFit='contain'/>
              </span>
              <span>
                <Image src={nextLogoDark} alt='' width={100} height={100} objectFit='contain'/>
              </span>

              <span>
                <Image src={styledComponentsLogo} alt='' width={100} height={100} objectFit='contain'/>
              </span>

              <span>
                <Image src={stitchesLogo} alt=''  width={100} height={100} objectFit='contain'/>
              </span>

              <span>
                <Image src={typescriptLogo} alt=''  width={100} height={100} objectFit='contain'/>
              </span>
          </SkillsContainer>
        </TextWrapper>


      </ResumeContainer>    
    </>
  )
}