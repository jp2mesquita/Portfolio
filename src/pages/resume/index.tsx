import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Avatar from "../../components/Avatar";
import Card from "../../components/Card";
import { CardFooter, GridContainer, PageTitle } from "./styles";


export default function Project(){
  return(
    <>
      <PageTitle>
        <h1>Currículo</h1>
      </PageTitle>

      <GridContainer>

        <div>
          
          
        </div>

        <div>
        
          <Avatar />
              
          <h2>João Paulo Mesquita</h2>
          <p>Um desenvolvedor web front-end </p>

        </div>
      </GridContainer>    
    </>
  )
}