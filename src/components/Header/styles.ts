import styled from "styled-components"

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: center;
  header{
    height: 6rem;
    transition: height .5s;
    overflow: hidden;
  }

  header.active{
    height: 26rem;
  }
`

export const PageHeader = styled.header`
  display: flex;
  width: 100%;
  padding: 2rem;
  max-width: 1416px;
  
  align-items: center;
  justify-content: space-between;
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
    flex-direction: column;
    background-color: ${(props) => props.theme.background};

    gap: 3rem;

    div{
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: space-between;
      h1{
        font-size: 1.5rem;
      }
    }

    nav{
      visibility:hidden;
      opacity: 0;
      
      ul{
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 2rem;
      }

     
    }
    
    nav.active{
      display: flex;
      visibility: visible;
      opacity: 1;
    }

    button{
      visibility:hidden;
      opacity: 0;
    }    

    button.active{
      display: flex;
      visibility: visible;
      opacity: 1;
    }
  }

`

export const HamburguerMenu = styled.section`
  display: none;
  height: 2rem;
  cursor: pointer;

  @media (max-width: 800px){
    display: flex;
    opacity: .8;
    width: 24px;
    section{
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;
      flex: 1;
      div{
        position: relative;
        width: 24px;
        height: 3px;
        border-radius: 15px;
        background-color: ${(props) => props.theme["base-text"]};
        
        transition: .5s;
      }
      
      div.active{
        width: 1px;
        background-color: transparent;
      }
      
      div::before{
        content: '';
        width: 24px;
        height: 3px;
        border-radius: 15px;

        background-color: ${(props) => props.theme["base-text"]};
        position: absolute;
        top: -.3rem;

        transition: .5s;
      }
      
      div.active::before{
        top: 0;
        transform: rotate(45deg);
      }

      div::after{
        content: '';
        width: 24px;
        height: 3px;
        border-radius: 15px;

        background-color: ${(props) => props.theme["base-text"]};
        position: absolute;
        top: .3rem;

        transition: .5s;
      }

      div.active::after{
        top: 0;
        transform: rotate(-45deg);
      }
    }
  }
`