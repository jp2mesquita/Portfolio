

import { CloseButton, Container } from "./styles";
import Link from "next/link";

interface props {
  handleNewMessage: () => void
}

export default function MessageSent( {handleNewMessage} : props){
  return(
    
    <Container>
        <p>Mensagem enviada com sucesso!</p>

        <div>
          <CloseButton asChild>

            <Link href={'/'}>
              <button>
                Sair
              </button>
            </Link>
          </CloseButton>

          <button onClick={handleNewMessage}>
            Nova mensagem
          </button>
        </div>
      
    </Container>

    
  )
}