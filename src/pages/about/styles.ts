import styled, { keyframes } from "styled-components";

export const Container = styled.div`
  margin-top: 8rem;

  display: flex;
  flex-direction: column;
`

export const GridContainer =styled.div`

  display: grid;
  grid-template-columns: repeat(3, 1fr );
  gap: 2rem;
  picture{
    display: flex;
    justify-content: flex-end;
    svg{
      color:${(props) => props.theme.yellow};
    }
  }
  
  div{
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

  }

  @media (max-width: 800px){
    picture{
      font-size: .65rem;
    }
    grid-template-columns: repeat(1, minmax(50px, 1fr));
    div{
      grid-column: span 3;
    }
  }

`

export const PageTitle = styled.div`
  display: flex;
  justify-content: center;
  opacity: .1;
  align-items: center;

  h1{
  margin: 0;
  font-size: clamp(0rem, 18vw, 16rem);

  white-space: nowrap;
  line-height: 1;
  }
`



