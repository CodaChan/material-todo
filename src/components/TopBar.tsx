import { DoneAll, GitHub } from "@mui/icons-material";
import { AppBar, IconButton, styled, Toolbar, Typography } from "@mui/material";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export default function TopBar() {
    return (
        <>
            <AppBar elevation={3}>
                <Toolbar>
                    <IconButton
                        component="a"
                        href="/"
                        sx={{ mr: 1 }}
                    >
                        <DoneAll fontSize="large" />
                    </IconButton>
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
                    <IconButton
                        component="a"
                        href="https://github.com/CodaChan/material-todo"
                    >
                        <GitHub fontSize="large" />
                    </IconButton>
                </Toolbar>
            </AppBar>
            <Offset />
        </>
    )
}
