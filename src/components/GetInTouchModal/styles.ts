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
  width: 100%;
  max-width: 52rem;
  border-radius: 6px;
  padding: 2.5rem 3rem;
  background-color: ${(props)=> props.theme["background"]};

  position: fixed;
  z-index: 2;

  /* display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center; */

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
      margin-top: .5rem;

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
      div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        /* padding: 1rem; */
        gap: 1rem;

        p{
          position: relative;
          .copyToClipboard{
            position: absolute;

            width: 100%;
            background-color: black;
            color: #fff;
            text-align: center;
            border-radius: 6px;
            padding: 5px 0;
            position: absolute;
            z-index: 2;
            left: -100%;

            visibility: hidden;
            opacity: 0;
            transition: opacity .4s;
            font-size: .8rem;
          }
        }

        p:hover{
          cursor: pointer;
          .copyToClipboard{
            visibility: visible;
            opacity: .6;
            }

        }
      }
    }

    button[type='submit'] {
      display: flex;
      position: relative;

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

      &:not(:disabled):hover{
        background: ${(props) => props.theme['yellow-dark']};

      }
      .sumbitNotAlowed{
        position: absolute;
        z-index: 3;

        width: 100%;
        background-color: black;
        color: #fff;
        text-align: center;
        border-radius: 6px;
        padding: 5px 0;
        position: absolute;
        z-index: 2;
        bottom: 100%;
        left: 50%;
        margin-left: -60px;

        visibility: hidden;
        opacity: 0;
        transition: opacity .4s;
        font-size: 1rem;
      }
      &:disabled{
        opacity: .5;
        cursor: not-allowed;
        &:hover{
          .sumbitNotAlowed{
            visibility: visible;
            opacity: 1;
          }
        }
      }
    }
  
  }

  @media (max-width: 1180px){
    max-width: 42rem;
  }

  @media (max-width: 800px){
    max-width: 80%;
    max-height: 80vh;
    overflow-y: auto;
    overflow-x: hidden;
  }

  @media (max-width: 650px){
    padding-inline: 1.5rem;
    form{
      div{
        flex-direction: column;
        width: 100%;
        gap:1rem;

        button[type='submit']{
          width: 100%;
          font-size: 1rem;
        }
      }
      ul{
        svg{
          font-size: 1.5rem;
        }
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