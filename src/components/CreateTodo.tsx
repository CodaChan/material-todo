import { Add } from "@mui/icons-material";
import { Box, Fab, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface CreateTodoProps {
    onCreateTodo: (text: string) => void
}

export default function CreateTodo({ onCreateTodo }: CreateTodoProps) {
    const [text, setText] = useState('')
    return (
        <Box>
            <Typography variant="h3" sx={{ fontWeight: 'bold', m: 1, mt: 5 }}>TodoList</Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', flexDirection: 'row' }}>
                <TextField value={text} onChange={(e) => setText(e.target.value)} id="outlined-basic" label="Anything" variant="outlined" sx={{ flexGrow: 1, m: 1 }} />
                <Fab onClick={() => { onCreateTodo(text); setText('') }} color="primary" aria-label="add" size="small" sx={{ m: 1, flexShrink: 0 }}> <Add /> </Fab>
            </Box>
        </Box>
    )
}