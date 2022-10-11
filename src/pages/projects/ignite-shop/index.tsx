import Link from "next/link";
import Image from "next/image";

import ExternalLinks from "../../../components/ExternalLinks";

import { BannerContainer, Brief, Container, PageTitle, SkillsContainer } from "./styles";

import IgniteShopCover from '../../../assets/ignite-shop/ignite-shop-cover.png'

import igniteShopCatalog from '../../../assets/ignite-shop/ignite-shop-catalog.png'
import igniteShopCart from '../../../assets/ignite-shop/ignite-shop-cart.png'
import igniteShopStripe from '../../../assets/ignite-shop/ignite-shop-stripe.png'
import igniteShopSuccess from '../../../assets/ignite-shop/ignite-shop-success.png'


import nextLogoDark from '../../../assets/tools/next-logo-dark-text.png'
import reactLogoVertical from '../../../assets/tools/react-logo-vertical.png'
import stitchesLogo from '../../../assets/tools/hero.webp'
import typescriptLogo from '../../../assets/tools/typescript-logo.png'


export default function IgniteShop(){

  const websiteLink = "https://github.com/jp2mesquita/Ignite_shop2_Next.js"
  const gihubLink = "https://github.com/jp2mesquita/Ignite_shop2_Next.js"
  const rocketseatLink = "https://www.rocketseat.com.br/"
  const stripeLink = "https://stripe.com/br"
  const figmaLink = "https://www.figma.com/file/GkHhzI9I5xkAfCn2fSmo0L/Ignite-Shop-2.0"

  return(
   <Container>
      <PageTitle>
      <h1>Ignite Shop</h1>

      </PageTitle>

      <ExternalLinks websiteLink={websiteLink} githubLink={gihubLink}/>

      <BannerContainer>
        <picture>
          <Image 
            src={IgniteShopCover} 
            alt='' 
            layout="intrinsic" 
            height={550} 
            objectFit="cover"
          />
        </picture>
      </BannerContainer>

      <Brief>
        <h2>O Projeto</h2>
      
      <p>Este é o Ignite Shop, mais uma pequena simulação de ecommerce baseado em um desafio do programa Ignite (Trilha ReactJs) da <Link href={rocketseatLink} target='_blank'>Rocketseat</Link>. Com a finalidade de aprimorar o uso de APIs de forma integrada ao NextJS, utilizando as estratégias de Server Side Rendereing (SSR) e Static Site Generator (SSG), a atual versão conta com um layout simples oferecendo uma navegação descomplicada e extremamente rápida.</p> 

      <p>Nesta aplicação web o usuário terá acesso a um pequeno catálogo de camisetas e poderá então realizar as seguintes ações:</p>

      <ul>
        <li>
          Adicionar items ao carrinho de compras
        </li>
        <li>
          Remover items do carrinho de compras
        </li>
        <li>
          Navegar para pagina de cada produto separadamente
        </li>
        <li>
          Finalizar a compra
        </li>
      </ul>



      <div>
        <section>
          <picture>
            <Image src={igniteShopCatalog} alt='' objectFit='contain'/>

          </picture>
          <picture>
            
            <Image src={igniteShopCart} alt='' objectFit='contain'/>
            
          </picture>
        </section>
      </div>

      <p>Dentre os principais conhecimentos utilizados, algo que se destaca é o consumo da API de pagamento do <Link href={stripeLink} target='_blank'>Stripe</Link> que fornece toda a funcionalidade de pagamento de forma descomplicada.</p>

      <p>Após o usuário seguir para a seção de pagamento, quando clicar em <i>Finalizar Compra</i>, ele será redirecionado para a própria plataforma do stripe onde encontra um resumo dos itens os quais estavam em seu carrinho bem como os campos para digitar os dados para pagamento.</p>

      <div>
        <section>
          <picture>
            <Image src={igniteShopStripe} alt='' objectFit='cover' width={1200}/>

          </picture>
          <picture>
            
            <Image src={igniteShopSuccess} alt='' objectFit='cover' width={1200}/>
            
          </picture>
        </section>
      </div>

      <p>Logo após finalizar o pagamento com sucesso, o usuário será redirecionado de volta a aplicação para uma página de sucesso, onde há um breve resumo dos itens adquiridos.</p>

      <p><b>As principais ferramentas utilizadas na construção deste projeto foram:</b></p>
      <SkillsContainer>

              <span>
                <Image src={reactLogoVertical} alt='' width={130} height={120} objectFit='contain'/>
              </span>
              <span>
                <Image src={nextLogoDark} alt='' width={200} height={120} objectFit='contain'/>
              </span>

              <span>
                <Image src={stitchesLogo} alt=''  width={130} height={110} objectFit='contain'/>
              </span>

              <span>
                <Image src={typescriptLogo} alt=''  width={200} height={120} objectFit='contain'/>
              </span>
      </SkillsContainer>

      <p>O layout deste projeto no figma pode ser encontrado <Link href={figmaLink} target='_blank'>aqui</Link> </p>
      </Brief>
   </Container>
  )
}