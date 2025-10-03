import { Alert, Snackbar } from "@mui/material";
import type { SnackBarMsg } from "../types";
import { useEffect, useState } from "react";

interface SnackBarProps {
    msg: SnackBarMsg | null
}

export default function SnackBar({ msg }: SnackBarProps) {
    const [open, setOpen] = useState(false)
    useEffect(() => {
        if (!msg) return
        setOpen(true)
    }, [msg])

    return (
        <Snackbar
            key={msg?.id}
            open={open}
            autoHideDuration={3000}
            onClose={() => setOpen(false)}
        >
            <Alert
                onClose={() => setOpen(false)}
                severity="success"
                variant="filled"
                sx={{ width: '100%' }}
            >
                {msg?.content}
            </Alert>
        </Snackbar>
    )
}