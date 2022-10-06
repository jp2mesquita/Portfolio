import Image from "next/image";
import { AvatarContainer } from "./styles";

export default function Avatar(){
  return(
    <AvatarContainer>
      <Image src="https://avatars.githubusercontent.com/u/102042713?v=4" alt="" width={250} height={250} objectFit="cover"/>
    </AvatarContainer>
  )
}