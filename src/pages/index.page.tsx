import Link from "next/link";
import Image from "next/image";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUpRightFromSquare, faArrowRightFromBracket, faAddressCard } from "@fortawesome/free-solid-svg-icons"
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'

import coffeDelivey from '../assets/coffee-cup.svg'
import githubBlog from '../assets/github-blog-logo.svg'
import podcastrLogo from '../assets/podcastr-logo.svg'
import nlwLogo from '../assets/nlw-esports-logo.svg'
import igniteShopLogo from '../assets/ignite-shop-logo.svg'
import beautySalonLogo from '../assets/beauty-salon-logo.svg'

import Avatar from "../components/Avatar";
import Card from "../components/Card";
import { CardFooter, GridContainer } from "../styles/Pages/home";


export default function Home() {
  return (


    <GridContainer>
 
    
      <Card isMedium={true}>
        <Link href={'/about'}>
          <Avatar />
          <CardFooter>
              <div>
                <h2>Hey, eu sou o João<span>✌🏼</span></h2>
                <p>Um desenvolvedor web front-end </p>
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


      <Card >
        <Link href={'https://www.linkedin.com/in/jp2mesquita/'} target='_blank'>
          <div>
            <FontAwesomeIcon 
              icon={faLinkedin} 
              size={'10x'}
              />
          </div>

          <CardFooter>
            <div>
              <h1>Linkedin</h1>
            </div>
            <div>

              <FontAwesomeIcon 
                icon={faArrowUpRightFromSquare}
                size={'2xl'}
                />
            </div>
          </CardFooter>
        </Link>
      </Card>



    <Card>
      <Link href={'/projects/github-blog'}>
        <picture>
          <Image src={githubBlog} alt='' width={200} height={150}   objectFit='fill' />
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
      <Link href={'https://github.com/jp2mesquita'} target='_blank'>
        <div>
          <FontAwesomeIcon 
            icon={faGithub} 
            size={'10x'}
            />
        </div>

        <CardFooter>
          <div>
            <h1>GitHub</h1>
          </div>
          <div>
            <FontAwesomeIcon 
              icon={faArrowUpRightFromSquare}
              size={'2xl'}
              />
          </div>
        </CardFooter>
      </Link>
    </Card>




    <Card noPadTop={true} isMedium={true} isLarge={true}>

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

    <Card isLarge={true}>
      <Link href={'/projects/nlw-esports'}>
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
      </Link>
    </Card>

    <Card >
      <Link href={'/resume'}>
        <div>
          <FontAwesomeIcon 
            icon={faAddressCard} 
            size={'10x'}
            />
        </div>

        <CardFooter>
          <div>
            <h1>Currículo</h1>
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


    <Card isMedium={true}>
      <Link href={'/projects/ignite-shop'}>
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
      </Link>
    </Card>


    <Card isMedium={true} isLarge={true}>
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

  </GridContainer>   
)
}
