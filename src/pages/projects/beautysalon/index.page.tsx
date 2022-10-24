import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from '@fortawesome/free-solid-svg-icons'

import {  Brief, Container, CoverContainer, ExternalLinks, MobilePicturesContainer, PageTitle, WebPicturesContainer } from "./styles";
import Link from "next/link";

import cover from '../../../assets/beauty-salon/cover-beauty-salon.png'
import homeExample from '../../../assets/beauty-salon/home-beauty-salon.png'
import servicesExample from '../../../assets/beauty-salon/services-beauty-salon.png'
import menuNavigationMobileExample from '../../../assets/beauty-salon/navigation-menu-beauty-salon.png'
import testimonialsMobile from '../../../assets/beauty-salon/mobile-testimonials-beauty-salon.png'
import homeMobile from '../../../assets/beauty-salon/mobile-home.png'
import contactMobile from '../../../assets/beauty-salon/mobile-contact.png'
import servicesMobile from '../../../assets/beauty-salon/mobile-services.png'
import aboutMobile from '../../../assets/beauty-salon/mobile-about.png'



import Image from "next/image";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { Swiper, SwiperSlide} from 'swiper/react'

import "swiper/css"
import "swiper/css/effect-cards"

import {EffectCards } from 'swiper'

export default function BeautySalon(){

  const figmaLink = 'https://www.figma.com/file/EZzCYLkwOlcp7Lbl299BIN/Origin-Six-(Community)?node-id=0%3A1'
  const rocketseatLink = 'https://www.rocketseat.com.br/'
  const githubLink = 'https://github.com/jp2mesquita/OriginSix-Beautysalon'
  const websiteLink = 'https://jp2mesquita.github.io/OriginSix-Beautysalon/'

  return(
    <Container>
      <PageTitle>
        <h1>Beautysalon</h1>
      </PageTitle>

      <ExternalLinks>
        <Link 
          href={websiteLink} 
          target='_blank'
        >
          <FontAwesomeIcon icon={faAngleRight}/>  Visite o site
        </Link>
          
        <p>
          <Link 
            href={githubLink}
            target='_blank'
          >
            <FontAwesomeIcon icon={faGithub}/> github 
          </Link>
        </p>
        
      </ExternalLinks>

      <CoverContainer>
        <picture>
          <Image 
            src={cover} 
            alt='' 
            layout="intrinsic" 
            height={550} 
            objectFit="cover" 

          />
        </picture>
      </CoverContainer>


      <Brief>
        <h2>O projeto</h2>

        <p>Resultado de um evento promovido pela <Link href={rocketseatLink} target='_blank' color="#8047f8">Rocketseat</Link>, o NLW (Next Level Week), este projeto apresenta o meu primeiro trabalho completo como desenvolvedor.
        Trata-se de uma landing page de apresentação de um salão de beleza. 
        </p>

        <p>
          Esta aplicação conta com design responsivo e simples proporcionando ao usiário uma experiência leve e fluída.
        </p>

        <WebPicturesContainer >
          <div>
            <section>
              <picture>
                <Image src={homeExample} alt='' objectFit='contain'/>

              </picture>
              <picture>
                
                <Image src={servicesExample} alt='' objectFit='contain'/>
                
              </picture>
            </section>
          </div>
        </WebPicturesContainer>
      

        <p>
          Este projeto foi o divisor de águas que me fez apaixonar de vez pelo desenvolvimento front-end. Poder reproduzir um abiente virtual cheio de detalhes e com fidelidade ao design original, utilizando apenas HTML, CSS e Javascript me fez enxergar de forma ainda mais clara o grande potencial que a web oferece para o desenvolvedor. 
        </p>

        <p>
          Um dos grandes baratos desta aplicação foi utilizar o conceito de <i>mobile first</i>, onde eu desenvolvi primeiramente a versão mobile da página. Com o mundo cada vez mais moderno e com a certeza de que a cada dia aumenta o número de acessos a páginas web através de smartphones, poder contar com um design responsivo para as telinhas tornou-se um pré-requisito importantíssimo para qualquer aplicação.
        </p>

        <MobilePicturesContainer>

          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div>

                <Image src={homeMobile} alt='' width={400} height={640} objectFit='contain'/>
              </div>
              
              
            </SwiperSlide>
            <SwiperSlide>
              <div>

                <Image src={aboutMobile} width={400}alt='' height={640} objectFit='contain'/>
              </div>
              
            </SwiperSlide>
            <SwiperSlide>
              <div>

                <Image src={servicesMobile} width={400}alt='' height={640} objectFit='contain'/>
              </div>
              
            </SwiperSlide>
            <SwiperSlide>
              <div>

                <Image src={testimonialsMobile} width={400}alt='' height={640} objectFit='contain'/>
              </div>
              
            </SwiperSlide>
            <SwiperSlide>
              <div>

                <Image src={contactMobile} width={400}alt='' height={640} objectFit='contain'/>
              </div>
              
            </SwiperSlide>

          </Swiper>
       

          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
          >

            <SwiperSlide>
              <div>

                <Image 
                  src={menuNavigationMobileExample} 
                  width={400}
                  alt='' 
                  height={640} 
                  objectFit='contain'
                />
              </div>
              
            </SwiperSlide>

          </Swiper>
        </MobilePicturesContainer>

        <p>O Layout utilizado pode ser encontrado <Link href={figmaLink} target='_blank'>aqui.</Link></p>

        <p></p>
        
      </Brief>

    </Container>
  )
}