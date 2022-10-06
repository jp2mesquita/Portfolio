import styled from "styled-components"

export const SliderContainer = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;

  main{
    width:100%;
    height: 150px;
    overflow: hidden;

    section{
      height: 100%;
      display: flex;
      animation: scrolling 12s linear infinite;

      span{
        border-radius: 20px;
      }
      span:hover{
        background-color: #e1e1e1;
      }
    }

    section:hover{
      animation-play-state: paused;
    }
  }

  @keyframes scrolling{
    from { transform: translateX(0)}
    to { transform: translateX(-180%)}
  }

  span{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 20%;
    flex-shrink: 0;
  }

  @media (max-width: 1000px) {
    main{
      section{
        gap: 0.5rem;
      }
    }
  }
`