import { Checkbox, IconButton, List, ListItem, ListItemButton, ListItemText } from "@mui/material"
import type Todo from "../types"
import { Delete } from "@mui/icons-material"

interface TodoListProps {
    onRemoveTodo: (id: number) => void,
    onToggleTodo: (id: number) => void,
    todos: Todo[]
}

export default function TodoList({ onRemoveTodo, onToggleTodo, todos }: TodoListProps) {
    return (
        <List>
            {todos.map(todo => (
                <ListItem key={todo.id} disablePadding secondaryAction={
                    <IconButton edge='end' sx={{'&:hover':{color: 'red'}}} onClick={() =>
                        onRemoveTodo(todo.id)
                    }>
                        <Delete />
                    </IconButton>
                }>
                    <ListItemButton onClick={() => onToggleTodo(todo.id)}>
                        <Checkbox checked={todo.completed} edge='start' disableRipple></Checkbox>
                        <ListItemText
                            sx={{
                                textDecoration: todo.completed ? 'line-through' : 'none',
                                color: todo.completed ? 'gray' : 'inherit'
                            }}
                        >
                            {todo.content}
                        </ListItemText>
                    </ListItemButton>
                </ListItem>
            ))}
        </List>
    )
}
