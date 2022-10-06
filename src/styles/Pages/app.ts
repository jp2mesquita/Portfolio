import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center; */
  /* justify-content: center; */
  min-height: 100vh;
  max-width: 1416px;
  min-width: 380px;
 
  margin-inline: auto;
  padding-inline: 2rem;
  position: relative;

  @media (max-width: 1400px){
    max-width: 1180px;
  }

`
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
  /* box-shadow: 0px 0px 10px rgba(0, 0, 0, .05); */

  
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
    a{
      color: ${(props) => props.theme["base-text"]};

      transition: color .2s;
    }
    a:hover{
      color: ${(props) => props.theme["yellow-dark"]};;
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

export const FooterContainer = styled.footer`
  display: flex;
  /* flex-direction: column; */
  justify-content: center;
  align-items: center;
  margin-top: auto;

 
`
export const Footer = styled.div`
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