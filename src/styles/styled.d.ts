import 'styled-components'
import theme from './theme'

declare module 'styled-components'{
  type ThemesType = typeof theme;
  export interface DefaultTheme extends ThemesType {}
}