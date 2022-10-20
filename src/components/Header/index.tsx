import Link from "next/link";
import { HamburguerMenu, HeaderContainer, PageHeader } from "./styles";

import * as Dialog from '@radix-ui/react-dialog'
import  GetInTouchModal  from "../GetInTouchModal"
import  ActiveNavigationLink  from "../ActiveNavigationLink";
import { useState } from "react";

export default function Header(){

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function handleToggleNavMenu(){
    setIsMenuOpen(!isMenuOpen)
  }

  function closeNavMenu(){
    setIsMenuOpen(false)
  }
  return(
    <>
            <HeaderContainer >
            <PageHeader className={isMenuOpen ? 'active' : ''}>
              <div >

                <Link href={'/'}>
                  <h1>TheBrabus</h1>
                </Link>

                <HamburguerMenu 
                  onClick={handleToggleNavMenu} 
                >
                  <section >
                    <div className={isMenuOpen ? 'active' : ''}></div>
                  </section>
                </HamburguerMenu>
              </div>
              

              <nav className={isMenuOpen ? 'active' : ''}>
                <ul>
                  <ActiveNavigationLink href={'/'} activeClassName={'active'} onClick={closeNavMenu}>
                    <p>Início</p>
                  </ActiveNavigationLink>
                  <li> 
                  <ActiveNavigationLink href={'/projects'} activeClassName={'active'} onClick={closeNavMenu}>
                    <p>Projetos</p>
                  </ActiveNavigationLink>
                  </li>
                  <li> 
                    <ActiveNavigationLink href={'/about'} activeClassName={'active'} onClick={closeNavMenu}>
                      <p>Sobre mim</p>
                    </ActiveNavigationLink>
                  </li>
                  <li> 
                    <ActiveNavigationLink href={'/resume'} activeClassName={'active'} onClick={closeNavMenu}>
                      <p>Currículo</p></ActiveNavigationLink>
                  </li>
                </ul>
              </nav>

              <Dialog.Root>

                <Dialog.Trigger asChild>
                  <button className={isMenuOpen ? 'active' : ''} onClick={closeNavMenu}>
                    Fale comigo
                  </button>
                </Dialog.Trigger>

                <GetInTouchModal />
              </Dialog.Root>
                    
              
                 
              
            </PageHeader>
          </HeaderContainer>
    
    </>
  )
}