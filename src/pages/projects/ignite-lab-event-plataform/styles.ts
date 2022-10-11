import styled from "styled-components";

export const Container =  styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`

export const PageTitle = styled.div`
  display: flex;
  justify-content: center;
  opacity: .1;
  align-items: center;
  margin-top: 6rem;
  margin-bottom: 1.5rem;

  h1{
  margin: 0;
  font-size: clamp(0rem, 18vw, 16rem); ;
  white-space: nowrap;
  line-height: 1;
  }
`