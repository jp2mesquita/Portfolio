
import Link from "next/link";
import { ReactNode } from "react";

import {  CardContainer } from "./styles";

interface CardProps{
  children: ReactNode
  isMedium?: boolean
  isLarge?: boolean
  noPadTop?: boolean
}


export default function Card({ 
    children, 
    noPadTop, 
    isMedium, 
    isLarge
  }: CardProps){
  return(

    <CardContainer  noPadTop={noPadTop} isMedium={isMedium} isLarge={isLarge}>

      {children}

    </CardContainer>

  )
}


 