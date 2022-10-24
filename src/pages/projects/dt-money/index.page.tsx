import Image from "next/image";
import { BannerContainer, Brief, Container, PageTitle, SkillsContainer } from "./styles";

import dtMoneyCover from '../../../assets/dt-money/dt-money-cover.png'
import dtMoneySummary from '../../../assets/dt-money/dt-money-summary.png'
import dtMoneyModal from '../../../assets/dt-money/dt-money-modal.png'

import viteLogo from '../../../assets/tools/vite-logo.png'
import reactLogoVertical from '../../../assets/tools/react-logo-vertical.png'
import styledComponentsLogo from '../../../assets/tools/logo-dark-text.png'
import typescriptLogo from '../../../assets/tools/typescript-logo.png'
import ExternalLinks from "../../../components/ExternalLinks";
import Link from "next/link";

export default function DTMoney(){

  const websiteLink = '#'
  const githubLink = 'https://github.com/jp2mesquita/Ignite-DTmoney_jp2mesquita'
  const figmaLink = 'https://www.figma.com/file/G5lTYaaweKE5AdCZfn5pyM/DT-Money'

  return(
    <Container>
      <PageTitle>
        <h1>DT-Money</h1>
      </PageTitle>

      <ExternalLinks githubLink={githubLink} websiteLink={websiteLink}/>
      <BannerContainer>
        <picture>
          <Image 
            src={dtMoneyCover} 
            alt='' 
            layout="intrinsic" 
            height={550} 
            objectFit="cover"
          />
        </picture>
      </BannerContainer>

      <Brief>
      <h2>O projeto</h2>

      <p>Desenhado para registrar e realizar o controle financeiro pessoal o DT Money é uma aplicação moderna, simples e funcional em que o usuário terá a possibilidade de alimentar os registros com entradas ou saídas e terá como retorno um painel de consulta com todos os dados e com valores acumulados de gastos e receitas assim como um saldo final.</p>
      
      <div>
        <section>
          <picture>
            <Image src={dtMoneySummary} alt='' height={650} width={1200} objectFit='cover'/>

          </picture>
          <picture>
            
            <Image src={dtMoneyModal} alt='' height={650} width={1200} objectFit='cover'/>
            
          </picture>
        </section>
      </div>

      <p>A plataforma conta com um sistema de busca de dados para que o usúário seja capaz de filtrar os tipos de transações aos quais deseja realizar em uma consulta parcial dos registros.</p>

      <p>Além do React e da utilização de uma componentização adequada ao projeto para facilitar possíveis manunteções futuras, foi utilizado o Radix, uma biblioteca que oferece componentes responsivos, desvinculados de estilização prévia e repletos de acessibilidade para aplicações em React. </p>      

      <p><b>Este projeto conta com:</b></p>

      <SkillsContainer>

        <span>
          <Image src={viteLogo} alt='' width={200} height={120} objectFit='contain'/>
        </span>
        <span>
          <Image src={reactLogoVertical} alt='' width={130} height={120} objectFit='contain'/>
        </span>

        <span>
          <Image src={styledComponentsLogo} alt='' width={100} height={100} objectFit='contain'/>
        </span>

        <span>
          <Image src={typescriptLogo} alt=''  width={200} height={120} objectFit='contain'/>
        </span>
      </SkillsContainer>

      <p>Para ver o layout deste projeto no figma clique <Link href={figmaLink} target='_blank'>aqui</Link>  </p>

      </Brief>
    </Container>
  )
}