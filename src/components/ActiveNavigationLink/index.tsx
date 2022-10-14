import Link, { LinkProps } from "next/link";
import { useRouter } from "next/router";
import { ReactElement, cloneElement } from "react";

interface ActiveNavigationLinkProps extends LinkProps{
  children: ReactElement
  activeClassName: string
}

export default function ActiveNavigationLink( { children, activeClassName, ...rest}: ActiveNavigationLinkProps){

  const { asPath } = useRouter()

  const url = String(rest.href)

  const className = asPath === url
    ? activeClassName
    : ''

  return(
    <Link {...rest}>
      {cloneElement(children, {
        className
      })}
    </Link>
  )
}