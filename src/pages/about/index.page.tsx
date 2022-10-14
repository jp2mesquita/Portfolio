
import Image from "next/image";

import Card from "../../components/Card";

import { Container, GridContainer, PageTitle } from "./styles";




import { faGraduationCap} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  BrandsSlider  from "./components/BrandsSlider/index.page";


export default function AboutMe(){
  return(
    <Container>
      <PageTitle>
          <h1>Sobre mim</h1>
      </PageTitle>


      <GridContainer>

        <Card >

          <div>
            <h2>Hey, eu sou o João<span>✌🏼</span></h2>
            <p>Um desenvolvedor web front-end</p>
          </div>

        </Card>

        <Card  isMedium={true}>

          {/* <picture>
            <FontAwesomeIcon icon={faGraduationCap} size={'8x'}/>
          </picture> */}
          

          <div>
            <h2>Formação Academica <span>🎓</span></h2>
            
            <p> Graduado em Licenciatura em Matemática pela Universidade de Brasília! Estou fazendo transição de carreira para desenvolvimento web!</p>
          </div>
        </Card>


      <Card isLarge={true}>
          <div>
            <h2>Sobre mim <span>🧔🏻</span></h2>
            <p>Em 2013 eu ingressei na Universidade de Brasília no curso de Engenharia Mecâtrônica e foi ali, na matéria de Computação Básica, que digitei o meu primeiro &quot;Hello World&quot;. No entanto, a linguagem utilizada (C++) e o ambiente do curso não proporcionaram uma boa experiência o que me fez repensar meus planos e após 3 anos decidi mudar de rota.  </p>
            <p>E foi assim que, resgatando outra paixão, a de ensinar, eu inciei o curso de Licenciatura em Matemática. E após me formar e experimentar as vivências de uma sala de aula acabei percebendo que eu não estava conseguindo causar o impacto que eu gostaria, e além disso você deve imaginar que o salário não era muito atrativo. Resultado... vamos mudar os planos novamente.</p>
            <p> 
              Tecnologia modernas e solucionar  problemas são duas paixões igualmente antigas na minha trajetória e poder alinhar isso com a oportunidade de dar vida a projetos reais, que podem impactar a vida de várias pessoas, foi o grande motor que me fez optar por conhecer e mergulhar de cabeça no mundo da programação.
              
            </p>
            <p>
              Eu credito que a educação, alinhada a uma boa dose de esforço e dedicação, é o melhor caminho pra qualquer tipo de sucesso. 
            </p>
            <p>
              Sou desenvolvedor focado em front-end e busco aprender constantemente sobre desenvolvimento de sistemas web sempre focando em tecnologias modernas e amplamente aplicadas ao mercado.
            </p>
          </div>
      </Card>

      <Card isLarge={true}>
        <h2>Minhas principais ferramentas <span>⚒️</span></h2>

        <BrandsSlider />
      </Card>

    </GridContainer>

    </Container>
  )
}
