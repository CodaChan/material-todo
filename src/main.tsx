import { CssBaseline, GlobalStyles, ThemeProvider, createTheme } from "@mui/material"
import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./App.tsx"

const theme = createTheme({
    colorSchemes: {
        dark: true
    }
})

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <ThemeProvider noSsr theme={theme}>
            <CssBaseline enableColorScheme />
            <GlobalStyles
                styles={{
                    'body, #root': {
                        transition: 'background-color 240ms ease, color 240ms ease',
                    },
                    '.MuiPaper-root, .MuiAppBar-root, .MuiToolbar-root, .MuiCard-root, .MuiButtonBase-root':
                    {
                        transition:
                            'background-color 240ms ease, color 240ms ease, border-color 240ms ease, box-shadow 240ms ease',
                    },
                    '.MuiSvgIcon-root, svg': {
                        transition: 'fill 240ms ease, stroke 240ms ease',
                    },
                    '.MuiTouchRipple-root': { transition: 'none' },
                }}
            />
            <App />
        </ThemeProvider>
    </StrictMode>
)
