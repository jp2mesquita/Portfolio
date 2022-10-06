import styled from "styled-components";
import * as Dialog from '@radix-ui/react-dialog'

export const Overlay = styled(Dialog.Overlay)`
  position: fixed;
  z-index: 2;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
`

export const Content = styled(Dialog.Content)`
  min-width: 52rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${(props)=> props.theme["background"]};

  position: fixed;
  z-index: 2;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form{
    display: flex;
    flex-direction: column;
    margin-top: 2rem;

    gap: 1rem;
    font-size: 1rem;
    
    input, textarea {
      border-radius: 6px;
      border: 6px;
      background: ${(props) => props.theme['base-input']};
      color: ${(props) => props.theme['base-title']};
      font-weight: bold;
      padding: 1rem;
      resize: none;
      &::placeholder {
        color: ${(props) => props.theme['base-text']};
        opacity: .7;
      }
    }

    div{
      display: flex;
      align-items: center;
      justify-content: space-between;

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
    }

    button[type='submit'] {
      display: flex;
      margin-top: 1rem;
      justify-content: center;
      align-items: center;
      width: 12rem;
      border: 0;
      background: ${(props) => props.theme['yellow']};
      border-radius: 6px;
      cursor: pointer;

      gap: 1rem;
      padding: 1rem;
      font-size: 1.5rem;
      font-weight: bold;
      color: ${(props) => props.theme.white};

      transition: background .2s;

      &:hover{
        background: ${(props) => props.theme['yellow-dark']};

      }
    }
 
  }
`

export const CloseButton = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;

  cursor: pointer;
  color: ${(props) => props.theme['base-title']};

  transition: color .2s;
  &:hover{
    color: ${(props) => props.theme['yellow']};

  }
`