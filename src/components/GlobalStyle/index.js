import { createGlobalStyle } from "styled-components"
import Zig from "./zig.ttf"
import CursorBlack from "./cursorblack.png"

export const GlobalStyle = createGlobalStyle`
    @font-face {
        font-family: Zig;
        src: url('${Zig}') format('truetype');
    }
    * {
        font-family: Zig;
        font-weight: bold;
    }
    html,
    body {
    height: 100%;
    width: 100%;
    margin: 0;
    padding: 0;
    
}
`
