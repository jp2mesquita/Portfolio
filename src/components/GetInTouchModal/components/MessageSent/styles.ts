import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'
import { SERVER_PROPS_ID } from "next/dist/shared/lib/constants";


export const Container = styled.div`
  width: 100%;
  max-width: 20rem;
  border-radius: 6px;
  background-color: ${(props)=> props.theme["background"]};
  
  display: flex;
  flex-direction: column;
  align-items: center;
  
  margin-inline: auto;
  

  p{
    font-size: 1rem;
  }
  div{
    
    margin-top: 1rem;
    display: flex;
    align-items: center;
    gap: 1.5rem;

    button{
      padding: .5rem 1rem;
      font-size: 1rem;
      border: none;
      color: ${(props) => props.theme["white"]};
      font-weight: bold;
      border-radius: 6px;
      background-color: ${(props) => props.theme["purple-dark"]};

      &:first-child{
        background-color: ${(props) => props.theme["yellow"]}
      }
    }
  }
`

export const CloseButton = styled(Dialog.Close)`
  
`