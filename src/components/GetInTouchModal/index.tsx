
import { useForm } from 'react-hook-form'
import copy from 'copy-to-clipboard'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


import emailjs from "@emailjs/browser"

import * as Dialog from '@radix-ui/react-dialog'

import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faClose, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { CloseButton, Content, Overlay } from './styles'

import Link from 'next/link'
import MessageSent from './components/MessageSent'
import { useState } from 'react'


const newContactFormValidationSchema = zod.object({
  name: zod.string().min(1, {message: 'Preencha o seu nome aqui!'}),
  email: zod.string().email({message: 'Email inválido, insira um email válido'}),
  message: zod.string().min(1,{message: 'Deixe a sua mensagem aqui!'})
})

type NewContactFromImputs = zod.infer<typeof newContactFormValidationSchema>


export default function GetInTouchModal(){

  const [isMenssageSent, setIsMessageSent] = useState(false)


  const newContactForm =useForm<NewContactFromImputs>({
    resolver: zodResolver(newContactFormValidationSchema),
    defaultValues:{
      name: '',
      email: '',
      message: '',
    }
  })

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
    watch,
    reset,
  } = newContactForm

  const templateParams ={
    from_name: watch('name'),
    message: watch('message'),
    email: watch('email'),
    reply_to: watch('email')
  }

  const isAllFilled = !(templateParams.from_name === '' || templateParams.message === '' || templateParams.email === '' )
  const isSubmitDisable = !isAllFilled
  
  async function handleSubmitNewContactForm( data: NewContactFromImputs) {
    // event.preventDefault();
      
    const emailjs_service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const emailjs_template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const emailjs_api_key = process.env.NEXT_PUBLIC_EMAILJS_API_PUBLIC_KEY



    emailjs.send(emailjs_service_id, emailjs_template_id, templateParams, emailjs_api_key)
    .then((res) => {
      console.log('Email sent', res.status, res.text)
    })
    .catch((error) => {
      console.error("ERRO: ", error)
    })

    setIsMessageSent(true)

    reset()


  }

  function handleCopyTextToClipboard(){
    const myEmail = 'jp-mesquita@live.com'
    copy(myEmail)
    document.getElementById('copyToClipboard').innerHTML='Copiado!'
  }

  function handleNewMessage(){
    setIsMessageSent(false)
    
  }

  


return(
  <>
    <Dialog.Portal>
      <Overlay>

      <Content>

        {isMenssageSent
          ? <MessageSent handleNewMessage={handleNewMessage} />
          : <>
              <Dialog.Title> Entre em contato comigo</Dialog.Title>

              <CloseButton>
                <FontAwesomeIcon icon={faClose} size={'2x'}/>
              </CloseButton>
      
              <form onSubmit={handleSubmit(handleSubmitNewContactForm)}>
                <input 
                  type={'text'} 
                  placeholder={'Digite o seu nome'}
                  required
                  {...register('name')}
                />
                <input 
                  type={'email'} 
                  placeholder={'Digite o seu e-mail'}
                  required
                  {...register('email')}
                />
                <textarea
                  placeholder={'Deixe sua mensagem...'}
                  rows={20}
                  required
                  {...register('message')}
                />
      
              <div>
                

                <button 
                  type="submit" 
                  disabled={isSubmitDisable} 
                >
                  Enviar
                  <FontAwesomeIcon icon={faPaperPlane}/>
                  <span className='sumbitNotAlowed'>Preencha todos os campos</span>
                </button>

      
                <div>
      
                  <ul>
                    <li>
                      <Link href={'https://linkedin.com/in/jp2mesquita'} target='_blank'>
                        <FontAwesomeIcon icon={faLinkedin} size={'xl'}/>
                      </Link>
                    </li>
                    <li>
                      <Link href={'https://github.com/jp2mesquita'} target='_blank'>
                        <FontAwesomeIcon icon={faGithub} size={'xl'}/>
                      </Link>
                    </li>
                    <li>
                      <Link href={'https://instagram.com/joaopaulomesquita'} target='_blank'>
                        <FontAwesomeIcon icon={faInstagram} size={'xl'}/>
                      </Link>
                    </li>
                    <li>
                      <Link href={'https://twitter.com/jpmesquita_ump'} target='_blank'>
                        <FontAwesomeIcon icon={faTwitter} size={'xl'}/>
                      </Link>
                    </li>
      
                  </ul>
      
                  <p onClick={handleCopyTextToClipboard}>
                    jp-mesquita@live.com
                    <span 
                      id='copyToClipboard' 
                      className='copyToClipboard'
                    >
                      Copiar para área de transferência
                    </span>
                  </p>
                </div>
              </div>
      
              </form>
            </>
      }
        
        

        


      </Content>
      </Overlay>
    </Dialog.Portal>
  </>

)
}