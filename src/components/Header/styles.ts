import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;

  
  
`

export const PageHeader = styled.header`
  display: flex;
  width: 100%;
  padding: 2rem;
  max-width: 1416px;

  
  align-items: center;
  justify-content: space-between;
  height: 6rem;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme["background"]};
  z-index: 1;
 

  
  h1{
      background: linear-gradient(90deg, rgba(232,116,96,1) 7%, rgba(205,193,65,1) 23%, rgba(240,146,130,1) 52%, rgba(191,211,124,1) 76%, rgba(95,204,211,1) 94%);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
    }

  ul{
    display: flex;
    list-style: none;
    gap: 2rem;
    font-size: 1.25rem;

    .active{
      color: ${(props) => props.theme["yellow"]};
    }
    a{
      color: ${(props) => props.theme["base-text"]};
      /* font-weight: bold; */

      transition: color .2s;
    }
    a:hover{
      color: ${(props) => props.theme.yellow}
      
    }
    
  }

  button{
    font-size: 1.25rem;
    padding: .75rem 1rem;
    border: none;
    border-radius: 32px;
    background-color: ${(props) => props.theme["base-text"]};
    color: ${(props) => props.theme["white"]};
  }


  @media (max-width: 1400px){
    max-width: 1180px;
  }


  @media (max-width: 1180px){
    
    h1{
      font-size: 1.7rem;
    }
    ul{
      
      gap: 1rem;
    }

    button{
      font-size: 1rem;
      padding: .75rem 1rem;
    }
  }

  @media (max-width: 800px){
    h1{
      font-size: 1.5rem;
    }
    ul{
      display: none;
    }

    button{
      display: none;
    }
  }

`