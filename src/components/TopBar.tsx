import { DoneAll, GitHub } from "@mui/icons-material";
import { AppBar, IconButton, styled, Toolbar, Tooltip, Typography } from "@mui/material";
import ThemeSwitcher from "./ThemeSwitcher";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export default function TopBar() {
    return (
        <>
            <AppBar elevation={3}>
                <Toolbar>
                    <Tooltip title="Material Todo">
                        <IconButton
                            aria-label="Material Todo"
                            component="a"
                            href="/"
                            sx={{ mr: 1, color: 'white' }}
                        >
                            <DoneAll fontSize="large" />
                        </IconButton>
                    </Tooltip>
                    <Typography
                        noWrap
                        variant="h6"
                        sx={{
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.1rem'
                        }}
                    >
                        Material Todo
                    </Typography>
                    <ThemeSwitcher />
                    <Tooltip title="Github">
                        <IconButton
                            aria-label="GitHub"
                            component="a"
                            href="https://github.com/CodaChan/material-todo"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ ml: 1, color: 'white' }}
                        >
                            <GitHub fontSize="large" />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
            <Offset />
        </>
    )
}
