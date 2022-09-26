import "styled-components/native";

import { light } from "@themes/light";

declare module "styled-components/native" {
  type ThemeType = typeof light;

  export interface DefaultTheme extends ThemeType {}
}
