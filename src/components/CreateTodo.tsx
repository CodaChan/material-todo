import { Add } from "@mui/icons-material";
import { Box, Fab, TextField, Typography } from "@mui/material";
import { type ChangeEvent, type FormEvent, useState } from "react";

interface CreateTodoProps {
    onCreateTodo: (text: string) => void
}

export default function CreateTodo({ onCreateTodo }: CreateTodoProps) {
    const [text, setText] = useState('')
    const [hasError, setHasError] = useState(false)

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const value = text.trim()
        if (!value) {
            setHasError(true)
            return
        }
        onCreateTodo(value)
        setText('')
        setHasError(false)
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value
        setText(value)
        if (hasError && value.trim()) {
            setHasError(false)
        }
    }

    return (
        <Box component="section">
            <Typography variant="h3" sx={{ fontWeight: 'bold', m: 1, mt: 5 }}>
                TodoList
            </Typography>
            <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{ alignItems: 'center', display: 'flex', flexDirection: 'row' }}
            >
                <TextField
                    id="outlined-basic"
                    label="Anything"
                    value={text}
                    onChange={handleChange}
                    error={hasError}
                    sx={{ flexGrow: 1, m: 1 }}
                />
                <Fab
                    aria-label="add"
                    color="primary"
                    size="small"
                    sx={{ flexShrink: 0, m: 1 }}
                    type="submit"
                >
                    <Add />
                </Fab>
            </Box>
        </Box>
    )
}
