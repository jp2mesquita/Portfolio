import { FormEvent, useState } from 'react'
import { Controller, useForm } from 'react-hook-form'

import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'


import emailjs from "@emailjs/browser"

import * as Dialog from '@radix-ui/react-dialog'

import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faClose, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { CloseButton, Content, Overlay } from './styles'


const newContactFormValidationSchema = zod.object({
  name: zod.string(),
  email: zod.string(),
  message: zod.string()
})

type NewContactFromImputs = zod.infer<typeof newContactFormValidationSchema>

// interface ContactProps extends NewContactFromImputs{
//   event: FormEvent
// }

export function GetInTouchModal(){
  // const [name, setName] = useState('')
  // const [email, setEmail] = useState('')
  // const [message, setMessage] = useState('')
  

  const newContactForm =useForm<NewContactFromImputs>({
    resolver: zodResolver(newContactFormValidationSchema),
    defaultValues:{
      name: '',
      email: '',
      message: '',
    }
  })

  const {
    control,
    register,
    handleSubmit,
    formState: { isSubmitting },
    watch,
    reset,
  } = newContactForm


  async function handleSubmitNewContactForm( data: NewContactFromImputs) {
    // event.preventDefault();
    
    const templateParams ={
      from_name: watch('name'),
      message: watch('message'),
      email: watch('email'),
      reply_to: watch('email')
    }

    
    // if(name ==='' || email === '' || message === ''){
    //   alert("Preencha todos os campos")
    //   return
    // }

    
    
    const emailjs_service_id = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const emailjs_template_id = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const emailjs_api_key = process.env.NEXT_PUBLIC_EMAILJS_API_PUBLIC_KEY



    emailjs.send(emailjs_service_id, emailjs_template_id, templateParams, emailjs_api_key)
    .then((res) => {
      console.log('Email sent', res.status, res.text)
      // setName('')
      // setEmail('')
      // setMessage('')
    })
    .catch((error) => {
      console.error("ERRO: ", error)
    })

    reset()
  }
  return(
    <>
      <Dialog.Portal>
        <Overlay />

        <Content>
          <Dialog.Title> Entre em contato comigo</Dialog.Title>

          <CloseButton>
            <FontAwesomeIcon icon={faClose} size={'2x'}/>
          </CloseButton>

          <form onSubmit={handleSubmit(handleSubmitNewContactForm)}>
            <input 
              type={'text'} 
              placeholder={'Digite o seu nome'}
              // id='name'
              required
              {...register('name')}
              // value={name}
              // onChange={({target}) => setName(target.value)}
            />
            <input 
              type={'email'} 
              placeholder={'Digite o seu e-mail'}
              // id='email'
              required
              {...register('email')}
              // value={email}
              // onChange={({target}) => setEmail(target.value)}
            />
            <textarea 
              
              placeholder={'Deixe sua mensagem...'}
              // id='message'
              rows={20}
              required
              {...register('message')}
              // value={message}
              // onChange={({target}) => setMessage(target.value)}
            />

          <div>
            <button type="submit" disabled={isSubmitting}>
              Enviar
              <FontAwesomeIcon icon={faPaperPlane}/>
              
            </button>

            <div>

            <ul>
              <li>
                <FontAwesomeIcon icon={faLinkedin} size={'xl'}/>
              </li>
              <li>
                <FontAwesomeIcon icon={faGithub} size={'xl'}/>
              </li>
              <li>
                <FontAwesomeIcon icon={faInstagram} size={'xl'}/>
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} size={'xl'}/>
              </li>

            </ul>

            <p>jp-mesquita@live.com</p>
            </div>
          </div>

          </form>
        </Content>
      </Dialog.Portal>
    </>

  )
}