import Image from "next/image"
import { SliderContainer } from "./styles"

import styledComponentsLogo from '../../../../assets/tools/logo-dark-text.png'
import nextLogoDark from '../../../../assets/tools/next-logo-dark-text.png'
import htmlLogo from '../../../../assets/tools/html-logo.png'
import cssLogo from '../../../../assets/tools/css-logo.png'
import jsLogo from '../../../../assets/tools/js-logo.png'
import reactLogo from '../../../../assets/tools/react-logo.png'
import stitchesLogo from '../../../../assets/tools/hero.webp'
import typescriptLogo from '../../../../assets/tools/typescript-logo.png'
import nodeLogo from '../../../../assets/tools/node-logo.png'

export default function BrandsSlider(){
  return(
    <>
        <SliderContainer>
          <main>
            <section>
              <span>
                <Image src={htmlLogo} alt=''  width={100} height={120} objectFit='contain'/>  
              </span>
              <span>
                <Image src={cssLogo} alt=''  width={90} height={100} objectFit='contain'/>
              </span>  
              <span>
                <Image src={jsLogo} alt=''  width={90} height={120} objectFit='contain'/>
              </span>
              <span>
                <Image src={nodeLogo} alt=''  width={120} height={120} objectFit='contain'/>
              </span>
              <span>
                <Image src={typescriptLogo} alt=''  width={130} height={120} objectFit='contain'/>
              </span>
              <span>
                <Image src={reactLogo} alt='' width={130} height={120} objectFit='contain'/>
              </span>
              <span>
                <Image src={nextLogoDark} alt='' width={130} height={120} objectFit='contain'/>
              </span>

              <span>
                <Image src={styledComponentsLogo} alt='' width={120} height={110} objectFit='contain'/>
              </span>


              <span>
                <Image src={stitchesLogo} alt=''  width={90} height={120} objectFit='contain'/>
              </span>


          
              {/* repeated*/}
              <span>
                <Image src={htmlLogo} alt=''  width={100} height={120} objectFit='contain'/>  
              </span>
              <span>
                <Image src={cssLogo} alt=''  width={90} height={100} objectFit='contain'/>
              </span>  
              <span>
                <Image src={jsLogo} alt=''  width={90} height={120} objectFit='contain'/>
              </span>
              <span>
                <Image src={nodeLogo} alt=''  width={120} height={120} objectFit='contain'/>
              </span>
              <span>
                <Image src={typescriptLogo} alt=''  width={130} height={120} objectFit='contain'/>
              </span>
              {/* repeated*/}


            </section>

          </main>
        </SliderContainer>
    </>
  )
}