import { BannerContainer, Brief, PageTitle, SkillsContainer } from "./styles";
import { Container } from "./styles";
import  ExternalLinks  from '../../../components/ExternalLinks'
import Image from "next/image";

import amazonCloneBanner from '../../../assets/amazon-clone/amazon-clone-banner.png'
import myOrders  from '../../../assets/amazon-clone/myOrders-example.png'
import checkout  from '../../../assets/amazon-clone/checkout-example.png'
import Link from "next/link";


import nextLogo from '../../../assets/tools/next-logo-dark-text.png'
import reduxLogo from '../../../assets/tools/redux-logo.png'
import tailwindCSS from '../../../assets/tools/tailwind-css.png'
import firebaseLogo from '../../../assets/tools/firebase-logo.png'
import stripeLogo from '../../../assets/tools/stripe-logo.png'
import nextAuthLogo from '../../../assets/tools/nextAuth-logo.png'



export default function Podcastr(){

  const websiteLink = 'https://www.jpclones-amz.tk'
  const githubLink = 'https://github.com/jp2mesquita/amazon-clone-jp2mesquita-'

  return(
    <>
      <Container>

        <PageTitle>
          <h1>Amazon Clone</h1>
        </PageTitle>

        <ExternalLinks 
          websiteLink={websiteLink}
          githubLink={githubLink}
        />

        <BannerContainer>
        <picture>
          <Image src={amazonCloneBanner} alt='' layout="intrinsic" objectFit="fill" height={550} width={950}/>
        </picture>
        </BannerContainer>
        


        <Brief>
        <h2>O projeto</h2>

        <p>
          Este projeto é um pequeno clone do grandioso site da Amazon. Assim sendo ele trás um layout muito semelhante (porém não idêntico) ao site original. Trás também algumas das funcionalidades mais básicas do site original.
        </p>

        <p>
          Nesta aplicação web o usuário terá acesso a um catálago produtos disponíveis para comprra e poderá realizar as seguintes ações:
        </p>

        <ul>

          <li>Filtrar a listagem de produtos atráves de botões</li>
          <li>Adicionar um item de cada vez no carrinho</li>
          <li>Remover um item de cada vez no carrinho.</li>
          <li>Fazer login com uma conta Google</li>
          <li>Ter acesso ás compras anteriores através de uma conexão com banco de dados do Firebase</li>
          <li>Pesquisar por items específicos (🚧 Em construção... 🚧)</li>
        </ul>

        <div>
          <section>
            <picture>
              
              <Image src={checkout} alt='' objectFit='contain'/>
              
            </picture>
            <picture>
              <Image src={myOrders} alt='' objectFit='cover'/>

            </picture>
          </section>
        </div>
      

        <p>
          Para construir este projeto foi utilizado diversas tecnologias para agilizar e possibilitar o fluxo da aplicação.        
        </p>

        <p>
          Para a autenticação foi utilizado o <Link href={'https://firebase.google.com/'} target='_blank'>Firebase</Link> e o <Link href={'https://next-auth.js.org/'} target='_blank'>NextAuth</Link> em conjunto, oferencendo a possibilidade de login social atráves de um conta Google.
        </p>

        
        <p>
          Para a criação e estilização foi utilizado o combo entre <Link href={'https://nextjs.org/'} target='_blank'>Next.js</Link>, <Link href={'https://tailwindcss.com/'} target='_blank'>Tailwind</Link> e <Link href={'https://tailwindcss.com/'} target='_blank'>Typescript</Link>., ferramentas extremamente perfomáticas e em alto uso no mercado.
        </p>

        <p>
          Para o gerenciamento de estado da aplicação, foi utilizado o <Link href={'https://redux.js.org/'} target='_blank'>Redux</Link> e o <Link href={'https://tahttps://redux-toolkit.js.org/ilwindcss.com/'} target='_blank'>Redux Toolkit</Link>., que oferecem um contexto com uma ampla possibilidade de gerenciar as informações entre os componentes em diferentes camadas.
        </p>
        
        <p>
          
        </p>

        <SkillsContainer>

          <span>
            <Image src={nextLogo} alt='' width={200} height={120} objectFit='contain'/>
          </span>
          <span>
            <Image src={reduxLogo} alt='' width={130} height={85} objectFit='contain'/>
          </span>


          <span>
            <Image src={firebaseLogo} alt=''  width={200} height={120} objectFit='contain'/>
          </span>

          <span>
            <Image src={stripeLogo} alt=''  width={150} height={70} objectFit='contain'/>
          </span>

          <span>
            <Image src={tailwindCSS} alt='' width={160} height={100} objectFit='contain'/>
          </span>

          <span>
            <Image src={nextAuthLogo} alt='' width={160} height={100} objectFit='contain'/>
          </span>

        </SkillsContainer>

        
        
      </Brief>



      </Container>
     
    </>
  )
}