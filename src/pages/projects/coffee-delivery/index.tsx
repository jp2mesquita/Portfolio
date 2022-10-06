import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import { BannerContainer, Brief, Container, ExternalLinks, PageTitle } from "./styles";
import Link from "next/link";

import CoffeeDeliveryCover from '../../../assets/Captura de tela de 2022-10-01 12-48-13.png'
import filterExample from '../../../assets/coffe-delivery/filter-example.png'
import cartExample from '../../../assets/coffe-delivery/cart-example.png'

import Image from "next/image";
import Card from "../../../components/Card";
import { faGithub } from "@fortawesome/free-brands-svg-icons";





export default function CoffeDelivery(){
  return(
    <Container>
      <PageTitle>
        <h1>Coffee Delivery</h1>
      </PageTitle>

      <ExternalLinks>
        <Link 
          href={'https://github.com/jp2mesquita/coffeDelivery-Rocketseat-Challenge'} 
          target='_blank'
        >
          <FontAwesomeIcon icon={faAngleRight}/>  Visite o site
        </Link>
        <p>
          <Link 
            href={'https://github.com/jp2mesquita/coffeDelivery-Rocketseat-Challenge'}
            target='_blank'
          >
            <FontAwesomeIcon icon={faGithub}/> github 
          </Link>
        </p>
        
      </ExternalLinks>

      <BannerContainer>
        <picture>
          <Image src={CoffeeDeliveryCover} alt='' layout="intrinsic" height={550} objectFit="cover"/>
        </picture>
      </BannerContainer>


      <Brief>
        <h2>O projeto</h2>

        <p>Este projeto simula uma lojinha virtual onde se realiza pedidos de café para entrega em domicilio. Com uma proposta principal de estudos, as funcionalidades se limitam ao simples gerenciamento do carrinho de compras.</p>

        <p>
          Nesta aplicação web o usuário terá acesso a um catálago de cafés disponíveis para delivery e poderá realizar as seguintes ações:
        </p>

        <ul>

        <li>Filtrar a listagem de produtos por categorias</li>
        <li>Adicionar quantidades especificas de cada item no carrinho</li>
        <li>Aumentar ou dimunuir a quantidade de items do carrinho.</li>
        <li>Remover items do carrinho.</li>
        <li>Preencher um fomulário com dados da entrega.</li>
        <li>Escolher o método de pagamento dentre as opções disponíveis.</li>
        </ul>

        <div>
          <section>
            <picture>
              <Image src={filterExample} alt='' objectFit='contain'/>

            </picture>
            <picture>
              
              <Image src={cartExample} alt='' objectFit='contain'/>
              
            </picture>
          </section>
        </div>
      

        <p>
          A construção deste projeto se deu em um contexto onde o objetivo era o aperfeiçoamento no trato de alguns conceitos básicos do desenvolvimento em React.js, como estados, propriedades, componentização, contextAPI e imultabilidade do estado.
        </p>

        <p>
          Para a criação deste projeto em React.js eu utilizei o <Link href={'https://vitejs.dev/'} target='_blank'>Vite</Link> juntamente com <Link href={'https://www.typescriptlang.org/'} target='_blank'>Typescript</Link>.
        </p>

        <p>O Layout utilizado, criado pela  pode ser encontrado <Link href={'https://www.figma.com/file/5yT9ZzZmRQRS4yivGGB3pl/Coffee-Delivery'} target='_blank'>aqui.</Link></p>

        <p></p>
        
      </Brief>

    </Container>
  )
}