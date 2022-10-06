import styled from "styled-components";

export const GridContainer = styled.div`
  margin-top: 10rem;
  
  position: relative;
  overflow: visible;
  display: grid;
  justify-content: center;
  grid-template-columns: repeat(4, minmax(50px, 1fr));
  /* grid-auto-rows: min-content;
  grid-template-rows: repeat(3, min-content);
  width: 100%;
  height: min-content;
  flex: 0 0 auto; */
  gap: 2rem;
  padding: 0px;
  
  svg{
    transition: color .2s;
  }
  div:hover{
    div:last-child{
      svg{
        color: ${(props) => props.theme.yellow};
      }
    }
  }

  a{
    display: flex;
    flex:1;
    flex-direction: column;

    picture{
      display: flex;
      flex:1;
      justify-content: center;
      align-items: center;

    }

  }

  @media (max-width: 1170px){
    grid-template-columns: repeat(3, minmax(50px, 1fr));
    
  };

  @media (max-width: 800px){
    grid-template-columns: repeat(1, minmax(50px, 1fr));
    div{
      grid-column: span 3;
    }
  };

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