import { ReactNode } from "react";
import { PageTitle } from "./styles";

interface TitleProps{
  children: ReactNode
}

export default function TitlePage( { children } : TitleProps){
  return(
    <PageTitle>
      {children}
    </PageTitle>
  )
}