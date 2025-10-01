import { DoneAll } from "@mui/icons-material";
import { AppBar, styled, Toolbar, Typography } from "@mui/material";

const Offset = styled("div")(({ theme }) => theme.mixins.toolbar);

export default function TopBar() {
    return (
        <>
            <AppBar elevation={3}>
                <Toolbar>
                    <DoneAll fontSize="large" sx={{ mr: 2 }} />
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
                </Toolbar>
            </AppBar>
            <Offset />
        </>
    )
}
