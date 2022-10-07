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

export const GridContainer = styled.div`
    display: flex;

    >div{
      display: flex;
      flex-direction: column;
      justify-content: flex-end;

      gap: 2rem;

      div{
        display: flex;
        /* background-color: red; */
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