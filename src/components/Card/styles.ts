import styled from "styled-components";
import { serialize } from "v8";

interface isFlexProps{
  isMedium?: boolean
  isLarge?: boolean
  noPadTop?: boolean
}

export const CardContainer = styled.div<isFlexProps>`

  grid-column: ${(props) => {
      if(props.isMedium){
        return 'span 2'
      }else{
        if(props.isLarge){
          return 'span 3'
        }else{
          return null
        }
      }
    }
  };

  display: flex;
  flex-direction: column;
  padding: 0 2rem 2rem 2rem;

  padding-top: ${(props) => {
      if(props.noPadTop){
        return 0
      }else{
        return '2rem'
      }
    }
  };


  min-height: 20rem;
  /* min-width: 14rem; */
  border: none;
  border-radius: 25px;
  background-color: ${(props) => props.theme.white};
  box-shadow: 0px 0px 60px rgba(0, 0, 0, .08);
  
  div:first-child{
    display: flex;
    /* align-items: center; */
    justify-content: center;
    svg{
      color: ${(props) => props.theme.yellow};
    }
  }


  h2{ 
    margin-top: 1rem;
    margin-bottom: .5rem;
    font-size: 1.75rem;
    span{
      font-size: 2.5rem;
    }
  }
  p{
    font-size: 1.25rem;
  }

  p ~ p{
    margin-top: .5rem;
  }

  @media (max-width: 1170px){
    grid-column: ${(props) => {
        if(props.isLarge){
          return 'span 3'
        }else{
          return null
        }
      }
    }
  }

  @media (max-width: 1170px){
    grid-template-columns: repeat(3, minmax(50px, 1fr));
    font-size: .75rem;
    h2{
      font-size: 1.5rem;
    }
    p{
      font-size: 1rem;
    }
  }

`


