import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { ReactNode } from "react";
import { Container } from "./styles";

interface ExternalLinksProps{
  
  websiteLink: string
  githubLink: string
}

export default function ExternalLinks({ websiteLink, githubLink }: ExternalLinksProps){
  return(
    <Container>
        <Link 
          href={websiteLink} 
          target='_blank'
        >
          <FontAwesomeIcon icon={faAngleRight}/>  Visite o site
        </Link>
          
        <p>
          <Link 
            href={githubLink}
            target='_blank'
          >
            <FontAwesomeIcon icon={faGithub}/> github 
          </Link>
        </p>
        
    </Container>
  )
}