import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  a{
    text-decoration: none;
    font-size: 1.5rem;
    color: ${(props) => props.theme["yellow-dark"]};
  }
  a{
    transition: color .2s;
  }
  a:hover{
    color: ${(props) => props.theme["yellow"]}
  }
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
  font-size: clamp(0rem, 16vw, 14rem); ;
  white-space: nowrap;
  line-height: 1;
  }
`

export const BannerContainer = styled.div`
  display: flex;
  width: 100%;
  margin-block: 2rem;
    
  picture{
    display: flex;
    /* padding: 1rem 2rem 0rem 2rem; */
    align-items: center;
    justify-content: center;
    width: 100%;
    background-color: #104F8F;
    flex:1;
  }
 
`

export const Brief = styled.div`
  display: flex;
  flex-direction: column;
  padding-inline: 1rem;

  h2{
    margin-bottom: 1rem;
  }
  p{
    text-align: justify;
    font-size: 1.25rem;

    a{
      color: ${(props) => props.theme["base-text"]};
      
      font-size: 1.25rem;
      text-decoration: underline;
    }
  }


  p + p{
    margin-top: .5rem;
  }

  ul{
    margin-top: 1rem;
    margin-left: 2rem;
    font-size: 1.25rem;
  }

  div{
    margin-block: 1rem;
    padding: 1rem;
    width:100%;
    display: flex;
    align-items: center;
    background-color:  #104F8F;
    border-radius: 20px;
    flex-direction: column;

    
    section{
      display: flex;
      position: relative;
      overflow-y: scroll; 
      
 
      -ms-overflow-style: none; /* for Internet Explorer, Edge */
      scrollbar-width: none; /* for Firefox */
      ::-webkit-scrollbar {
       display: none; /* for Chrome, Safari, and Opera */
      }

      
      picture{
        margin: 2rem;
        border-radius: 20px;
        width: 70%;
        overflow: hidden;
        
      }

      picture:last-child{
        position: absolute;
        transform: translateX(35%) translateY(60%);
        
        overflow-Y:visible;
      }
    }

    
    @media (max-width: 1180px){
      
      section{
        flex-direction: column;
        overflow-y: visible; 
        margin-inline: auto;
        overflow: visible;
        gap: 2rem;
        
        picture{
          margin: 0;
          display: flex;
          width: 100%;
        }

        picture:last-child{
          
          position: relative;
          transform: none;
        }
      }
  
    }
  }
`

export const SkillsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 2rem;
  grid-template-rows: min-content;
  row-gap: 2rem;
  span{
    display: flex;
    align-items: center;
    justify-content: center;
  }
`