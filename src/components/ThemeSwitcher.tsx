import { AutoMode, DarkMode, LightMode } from "@mui/icons-material";
import { Divider, ToggleButton, ToggleButtonGroup, useColorScheme, toggleButtonGroupClasses, Box, Tooltip } from "@mui/material";
import { useRef } from "react";

export default function ThemeSwitcher() {
    const { mode, setMode } = useColorScheme();
    const prevMode = useRef<'light' | 'dark' | 'system'>('light')
    if (!mode) {
        return null;
    }
    return (
        <Box sx={{ display: 'flex' }}>
            <ToggleButtonGroup
                exclusive
                onChange={(_event, value) => {
                    if (value !== null) {
                        setMode(value as 'light' | 'dark')
                    }
                }}
                value={mode}
                sx={{
                    display: mode === 'system' ? 'none' : 'flex',
                    [`& .${toggleButtonGroupClasses.grouped}`]: {
                        m: 0.5,
                        border: 0,
                        borderRadius: 1,
                        color: 'white',
                        '&.Mui-selected': {
                            color: 'white'
                        },
                        '&:not(:first-of-type)': {
                            marginLeft: 0
                        }
                    }
                }}
            >
                <Tooltip title="Light Mode">
                    <ToggleButton disabled={mode === 'system'} value="light" aria-label="Light Mode" >
                        <LightMode />
                    </ToggleButton>
                </Tooltip>
                <Tooltip title="Dark Mode">
                    <ToggleButton disabled={mode === 'system'} value="dark" aria-label="Dark Mode">
                        <DarkMode />
                    </ToggleButton>
                </Tooltip>

            </ToggleButtonGroup>
            <Divider
                flexItem
                orientation="vertical"
                sx={{
                    display: mode === 'system' ? 'none' : 'block',
                    my: 1
                }}
            />
            <Tooltip title="Auto Mode">
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
                    value="system"
                    aria-label="Auto Mode"
                    sx={{
                        m: 0.5,
                        border: 0,
                        borderRadius: 1,
                        color: 'white',
                        '&.Mui-selected, &.Mui-selected:hover': {
                            color: 'white'
                        }
                    }}
                >
                    <AutoMode />
                </ToggleButton>
            </Tooltip>

        </Box>
    );
}
