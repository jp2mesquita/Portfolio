import Link from "next/link";
import { HeaderContainer, PageHeader } from "./styles";

import * as Dialog from '@radix-ui/react-dialog'
import { GetInTouchModal } from "../GetInTouchModal"
import { useRouter } from "next/router";
import { ActiveNavigationLink } from "../ActiveNavigationLink";

export function Header(){

  const { asPath } = useRouter()
  return(
    <>
            <HeaderContainer>
            <PageHeader>
                <Link href={'/'}>
                  <h1>TheBrabus</h1>
                </Link>
                
                <nav>
                  <ul>
                    <ActiveNavigationLink href={'/'} activeClassName={'active'}>
                      <p>Início</p>
                    </ActiveNavigationLink>
                    <li> 
                    <ActiveNavigationLink href={'/projects'} activeClassName={'active'}>
                      <p>Projetos</p>
                    </ActiveNavigationLink>
                    </li>
                    <li> 
                      <ActiveNavigationLink href={'/about'} activeClassName={'active'}>
                        <p>Sobre mim</p>
                      </ActiveNavigationLink>
                    </li>
                    <li> 
                      <ActiveNavigationLink href={'/resume'} activeClassName={'active'}>
                        <p>Currículo</p></ActiveNavigationLink>
                    </li>
                  </ul>
                </nav>

                <Dialog.Root>

                  <Dialog.Trigger asChild>
                    <button>
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