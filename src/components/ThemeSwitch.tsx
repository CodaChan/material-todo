import { AutoMode, DarkMode, LightMode } from "@mui/icons-material";
import { Divider, Paper, ToggleButton, ToggleButtonGroup, useColorScheme, styled, toggleButtonGroupClasses } from "@mui/material";
import { useRef } from "react";

const StyledToggleButtonGroup = styled(ToggleButtonGroup)(({ theme }) => ({
    [`& .${toggleButtonGroupClasses.grouped}`]: {
        margin: theme.spacing(0.5),
        border: 0,
        borderRadius: theme.shape.borderRadius,
        [`&.${toggleButtonGroupClasses.disabled}`]: {
            border: 0,
        },
    },
    [`& .${toggleButtonGroupClasses.middleButton},& .${toggleButtonGroupClasses.lastButton}`]:
    {
        marginLeft: -1,
        borderLeft: '1px solid transparent',
    },
}));

export default function ThemeSwitch() {
    const { mode, setMode } = useColorScheme();
    const prevMode = useRef<'light' | 'dark' | 'system'>('light')
    if (!mode) {
        return null;
    }
    return (
        <Paper
            elevation={3}
            sx={(theme) => ({
                border: `1px solid ${theme.palette.divider}`,
                display: 'flex',
                flexWrap: 'wrap',
                position: 'fixed',
                bottom: 24,
                right: 24,
                flexDirection: { xs: 'column', sm: 'row' },
                alignItems: 'center'
            })}
        >
            <StyledToggleButtonGroup
                exclusive
                onChange={(_event, value) => {
                    if (value !== null) {
                        setMode(value as 'light' | 'dark')
                    }
                }}
                value={mode}
                sx={{
                    display: mode === 'system' ? 'none' : 'flex'
                }}
            >
                <ToggleButton disabled={mode === 'system'} value="light">
                    <LightMode />
                </ToggleButton>
                <ToggleButton disabled={mode === 'system'} value="dark">
                    <DarkMode />
                </ToggleButton>
            </StyledToggleButtonGroup>
            <Divider
                flexItem
                orientation="vertical"
                sx={{
                    display: {
                        xs: 'none',
                        sm: mode === 'system' ? 'none' : 'block'
                    },
                    my: 1
                }}
            />
            <Divider
                flexItem
                sx={{
                    display: {
                        xs: mode === 'system' ? 'none' : 'block',
                        sm: 'none'
                    },
                    mx: 1
                }} 
            />
            <StyledToggleButtonGroup>
                <ToggleButton
                    onChange={() => {
                        if (mode === 'system') {
                            setMode(prevMode.current)
                            prevMode.current = 'system'
                        } else {
                            prevMode.current = mode
                            setMode('system')
                        }
                    }}
                    selected={mode === 'system'}
                    sx={{
                        width: 96,
                        height: 46
                    }}
                    value="system"
                >
                    <AutoMode sx={{ mr: 1 }} />
                    Auto
                </ToggleButton>
            </StyledToggleButtonGroup>
        </Paper>
    );
}
