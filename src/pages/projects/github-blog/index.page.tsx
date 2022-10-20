import Image from "next/image";
import { BannerContainer, Brief, Container, PageTitle, SkillsContainer } from "./styels";

import githubBlogCover from '../../../assets/github-blog/github-blog-cover.png' 
import githubBlogCatalog from '../../../assets/github-blog/github-blog-catalog.png'
import githubBlogPost from '../../../assets/github-blog/github-blog-post.png'


import viteLogo from '../../../assets/tools/vite-logo.png'
import reactLogoVertical from '../../../assets/tools/react-logo-vertical.png'
import styledComponentsLogo from '../../../assets/tools/logo-dark-text.png'
import typescriptLogo from '../../../assets/tools/typescript-logo.png'

import ExternalLinks from "../../../components/ExternalLinks";

export default function githubBlog(){

  const websiteLink = '#'
  const githubLink = 'https://github.com/jp2mesquita/github_blog_2'
  return(
    <Container>
      <PageTitle>
        <h1>Github Blog</h1>
      </PageTitle>

      <ExternalLinks websiteLink={websiteLink} githubLink={githubLink} />

      <BannerContainer>
        <picture>
          <Image 
            src={githubBlogCover} 
            alt='' 
            layout="intrinsic" 
            height={550} 
            objectFit="cover"
          />
        </picture>
      </BannerContainer>

      <Brief>
        <h2>O projeto</h2>

        <p>O Githubblog é exatamente o que o seu nome sugere, um blog montado a partir do github. Mas para ser mais detalhado trata-se de um blog que se alimenta das issues de um repositório no github.</p>
        <p>Além das issues ele busca os dados do perfil do usuário pré registrado na aplicação, assim como nome, foto de perfil e número de seguidores.</p>

        <p>Cada issue do repositório em questão se torna um post no blog. Está listagem é representada em umn catálogo com pequenos resumos sobre a postagem.</p>


        <div>
        <section>
          <picture>
            <Image src={githubBlogCatalog} alt='' layout="intrinsic" objectFit='cover'/>

          </picture>
          <picture>
            
            <Image src={githubBlogPost} alt='' layout="intrinsic" objectFit='cover'/>
            
          </picture>
        </section>
      </div>

      <p>Além de pode entrar na página do post que desejar, é possível realizar uma busca por palavras chaves para encontrar publicações com temas desejados.</p>

      <p>Apesar de conter poucas funcionalidades a aplicaçõa conta com conceitos muito interessantes como o consumo da api do Github bem como o uso da React Router Dom, uma biblioteca javascript focada em roteamento para aplicações React.</p>

      <p><b>O Projeto foi desenvolvido utilizando as seguintes ferramentas:</b></p>


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
      </Brief>

    </Container>
  )
}