import styled from "styled-components"

export const PageTitle = styled.div`
  display: flex;
  justify-content: center;
  opacity: .1;
  align-items: center;
  margin-top: 6rem;
 

  h1{
  margin: 0;
  font-size: clamp(0rem, 18vw, 16rem); ;
  white-space: nowrap;
  line-height: 1;
  }
`

export const ResumeContainer = styled.div`
  display: flex;
  margin-top: 2rem;
  gap: 3rem;
    
  @media (max-width: 1180px){
    flex-direction: column;
  }
`
export const CardWrapper = styled.section`
  display: flex; 
  flex-direction: column;
  width: 25rem;
  
  gap: 2rem;

  @media (max-width: 1180px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    width: 100%;
  }

  @media (max-width: 800px){
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`
export const LinksWrapper = styled.div`
  display: flex;
  
  flex-direction: column;
  flex-flow: column;
  
  a{
    padding-block: 1rem;
  
  }

  a ~ a{
    border-top: 1px solid ${(props) => props.theme["base-text"]};
  }

  h3{
    display: flex; 
    align-items: center;
    justify-content: space-between;
    font-size: 1.75rem;
    font-weight: 400;
    opacity: .8;
    

    
    svg{
      color: ${(props) => props.theme["base-text"]};
      transition: color .2s;  

    }
  
    &:hover{
      opacity: .8;

      svg{
        color: ${(props) => props.theme.yellow};
        
      }
    }
  }
  @media (max-width: 1180px){
    h3{
      font-size: 1.5rem;
    }
  }
  @media (max-width: 800px){
    h3{
      font-size: 1.25rem;
    }
  }
  
`

export const TextWrapper = styled.section`
  display: flex; 
  flex-direction: column;
  flex: 1;


  h2{
    font-size: 1.75rem;
    margin-bottom: 2rem;
  }
  p~h2{
    margin-top: 3rem;
  }
  h3{
    font-size: 1.5rem;
    font-weight: 400;
    margin-block: 1rem;
    text-decoration: underline;
    span{
      font-weight: bold;
    
    }
  }

  h4{
    font-size: 1.5rem;
    font-weight: 400;
    color: ${(props) => props.theme["yellow-dark"]};
    margin-top: 1rem;
  }
 
  p{
    font-size: 1.5rem;
    text-align: justify;
    span{
      font-weight: bold;
    
    }
  }

  @media (max-width: 800px){
    h2{
      font-size: 1.25rem;
      margin-bottom: 1rem;

    }
    h3, h4, p{
      font-size: 1rem;
    }

    h3{
    margin-block: .5rem;

    }
    h4{
      margin-top: .5rem;

    }
  }
  
`

export const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: auto;
  div{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
  }
`
export const SkillsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: min-content;
  row-gap: 2rem;
  span{
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media (max-width: 800px){
    span{
      width: 5rem;
    }
  }

  @media (max-width: 500px){
    span{
      width: 4rem;
    }
  }
`
