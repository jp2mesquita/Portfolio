import styled from "styled-components"

export const FooterContainer = styled.footer`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  margin-top: auto;

 
`
export const FooterContent = styled.div`
  display: flex;
  flex-direction:column;
  align-items: center;
  justify-content: space-between;

  max-width: 1420px;
  padding: 2rem;

  
  div{
    padding: 2rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4rem;
  }
  h1{
      font-size: 1.5rem;
      background: linear-gradient(90deg, rgba(232,116,96,1) 7%, rgba(205,193,65,1) 23%, rgba(240,146,130,1) 52%, rgba(191,211,124,1) 76%, rgba(95,204,211,1) 94%);
      background-clip: text;
      -webkit-background-clip: text;
      color: transparent;
  }
  
  nav{

    ul{
      display: flex;
      list-style: none;
      gap: 1.5rem;
      font-size: 1rem;
      
      
      
      a{
        color: ${(props) => props.theme["base-text"]};
        transition: color .1s;
      }
      
      a:hover{
        color: ${(props) => props.theme["yellow-dark"]};
      }
    }
  }

  ul{
    list-style: none;
    display: flex;
    
    gap: 2rem;

    li{
      transition: color .2s;
    }
    li:hover{
      color: ${(props)=> props.theme.yellow};
      cursor: pointer;
    }
  }

  ul~p{

    margin-top: 2rem;
 
  }

  @media (max-width: 800px){
    


    div{
      flex-direction: column;

      ul{
        font-size: .75rem;
      }
    }
    p{
      font-size: .75rem;
    }
  }


`