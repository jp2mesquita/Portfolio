import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faClose, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as Dialog from '@radix-ui/react-dialog'

import { CloseButton, Content, Overlay } from './styles'

export function GetInTouchModal(){

  
  return(
    <>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Title> Entre em contato comigo</Dialog.Title>

          <CloseButton>
            <FontAwesomeIcon icon={faClose} size={'2x'}/>
          </CloseButton>

          <form>
            <input 
              type={'text'} 
              placeholder={'Digite o seu nome'}
              id='name'
              required
            />
            <input 
              type={'email'} 
              placeholder={'Digite o seu e-mail'}
              id='email'
              required
            />
            <textarea 
              
              placeholder={'Deixe sua mensagem...'}
              id='message'
              rows={20}
              required
            />

          <div>
            <button type="submit">
              Enviar
              <FontAwesomeIcon icon={faPaperPlane}/>
              
            </button>

            
            <ul>
              <li>
                <FontAwesomeIcon icon={faInstagram} size={'xl'}/>
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} size={'xl'}/>
              </li>
              <li>
                <FontAwesomeIcon icon={faGithub} size={'xl'}/>
              </li>
              <li>
                <FontAwesomeIcon icon={faLinkedin} size={'xl'}/>
              </li>

            </ul>
          </div>

          </form>
        </Content>
      </Dialog.Portal>
    </>

  )
}