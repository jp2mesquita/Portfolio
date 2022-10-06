import Image from "next/image";
import Link from "next/link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare, faArrowRightFromBracket, faAddressCard } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


import coffeDelivey from '../../assets/coffee-cup.svg'
import githubBlog from '../../assets/github-blog-logo.svg'
import podcastrLogo from '../../assets/podcastr-logo.svg'
import nlwLogo from '../../assets/nlw-esports-logo.svg'
import igniteShopLogo from '../../assets/ignite-shop-logo.svg'
import beautySalonLogo from '../../assets/beauty-salon-logo.svg'
import eventPlataformLogo from '../../assets/event-plataform-logo.svg'
import dtMoneyLogo from '../../assets/dt-money-logo.svg'

import { CardFooter, GridContainer, PageTitle } from "./styles";

import Card from "../../components/Card";


export default function Projects(){
  return(
    <>
      <PageTitle>
        <h1>Projetos</h1>
      </PageTitle>

      <GridContainer>

        <Card noPadTop={true}>        
          <Link href={'/projects/podcastr'}>

            <picture>
              <Image src={podcastrLogo} alt='' width={250} height={200}   objectFit='fill'/>
            </picture>

            <CardFooter>
              <div>
                <h2>Podcastr</h2>
                <p>Manipulando áudios</p>
              </div>

              <div>
                <FontAwesomeIcon 
                  icon={faArrowRightFromBracket} 
                  size={'2xl'}
                  />
              </div>
            </CardFooter>

          </Link>
        </Card>

        <Card noPadTop={true} isMedium={true}>
          <Link href={'/projects/coffee-delivery'}>



            <Image src={coffeDelivey} alt='' width={200} height={200} objectFit="cover"/>


            <CardFooter>  
              <div>
                <h2>Coffee Delivery</h2>
                <p>Controle de carrinho de compras</p>
              </div>

              <div>
                <FontAwesomeIcon 
                  icon={faArrowRightFromBracket}
                  size={'2xl'}
                />
              </div>
            </CardFooter>
          </Link>
        </Card>

        <Card >
          <picture>
            <Image src={igniteShopLogo} alt='' width={250} height={150} objectFit="fill"/>
          </picture>

          <CardFooter>  
            <div>
              <h2>Ignite Shop</h2>
              <p>Simulação de e-commerce</p>
            </div>

            <div>
              <FontAwesomeIcon 
                icon={faArrowRightFromBracket}
                size={'2xl'}
              />
            </div>
          </CardFooter>
        </Card>



        <Card>
          <Link href={'/projects'}>
            <picture>
              <Image src={githubBlog} alt='' width={250} height={150}   objectFit='fill' />
            </picture>

            <CardFooter>
              <div>
                <h2>Github-Blog</h2>
                <p>Conexão com api</p>
              </div>

              <div>
                <FontAwesomeIcon 
                  icon={faArrowRightFromBracket} 
                  size={'2xl'}
                />
              </div>
            </CardFooter>
          </Link>
        </Card>

        <Card >
          <Link href={'/projects/beautysalon'}>
            <picture>
              <Image src={beautySalonLogo} alt='' width={250} height={'100%'} objectFit="fill"/>
            </picture>
        
            <CardFooter>  
              <div>
                <h2>Beauty Salon</h2>
                <p>Agende seu horário</p>
              </div>

              <div>
                <FontAwesomeIcon 
                  icon={faArrowRightFromBracket}
                  size={'2xl'}
                  />
              </div>
            </CardFooter>
          </Link>
        </Card>

        <Card isMedium={true} isLarge={true}>
          <Link href={'/projects'}>
            <picture>
              <Image src={eventPlataformLogo} alt='' width={250} height={150}   objectFit='fill' />
            </picture>

            <CardFooter>
              <div>
                <h2>Event Plataform</h2>
                <p>Administrando uma week event</p>
              </div>

              <div>
                <FontAwesomeIcon 
                  icon={faArrowRightFromBracket} 
                  size={'2xl'}
                />
              </div>
            </CardFooter>
          </Link>
        </Card>

        <Card isMedium={true} isLarge={true}>

          <Image src={nlwLogo} alt='' width={200} height={200} objectFit="fill"/>

          <CardFooter>  
            <div>
              <h2>nlw eSports</h2>
              <p>Encontre seu duo</p>
            </div>

            <div>
              <FontAwesomeIcon 
                icon={faArrowRightFromBracket}
                size={'2xl'}
              />
          </div>
          </CardFooter>
        </Card>

        <Card isMedium={true} isLarge={true}>

          <Image src={dtMoneyLogo} alt='' width={200} height={200} objectFit="fill"/>

          <CardFooter>  
            <div>
              <h2>DT Money</h2>
              <p>Administre suas finanças</p>
            </div>

            <div>
              <FontAwesomeIcon 
                icon={faArrowRightFromBracket}
                size={'2xl'}
              />
            </div>
          </CardFooter>
        </Card>

      </GridContainer>    
    </>
  )
}