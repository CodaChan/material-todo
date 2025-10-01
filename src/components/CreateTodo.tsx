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
        setText(event.target.value)
        if (hasError && event.target.value.trim() !== '') {
            setHasError(false)
        }
    }

    return (
        <Box component="section">
            <Typography variant="h3" sx={{ fontWeight: 'bold', m: 1, mt: 5 }}>TodoList</Typography>
            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                <TextField
                    id="outlined-basic"
                    label="Anything"
                    variant="outlined"
                    value={text}
                    onChange={handleChange}
                    error={hasError}
                    sx={{ flexGrow: 1, m: 1 }}
                />
                <Fab type="submit" color="primary" aria-label="add" size="small" sx={{ m: 1, flexShrink: 0 }}>
                    <Add />
                </Fab>
            </Box>
        </Box>
    )
}
