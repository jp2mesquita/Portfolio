import 'styled-components'
import { lightTheme } from '../styles/themes/ligth'

type ThemeLight = typeof lightTheme

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeLight {}
}