import { Delete } from "@mui/icons-material"
import { Checkbox, IconButton, List, ListItem, ListItemButton, ListItemText, Tooltip } from "@mui/material"
import type Todo from "../types"

interface TodoListProps {
    onRemoveTodo: (id: number) => void,
    onToggleTodo: (id: number) => void,
    todos: Todo[]
}

export default function TodoList({ onRemoveTodo, onToggleTodo, todos }: TodoListProps) {
    return (
        <List>
            {todos.map((todo) => (
                <ListItem
                    key={todo.id}
                    disablePadding
                    secondaryAction={
                        <Tooltip title="Remove Todo" placement="right">
                            <IconButton
                                aria-label="Remove Todo"
                                edge="end"
                                onClick={() => onRemoveTodo(todo.id)}
                                sx={{ '&:hover': { color: 'red' } }}
                            >
                                <Delete />
                            </IconButton>
                        </Tooltip>

                    }
                >
                    <ListItemButton
                        onClick={() => onToggleTodo(todo.id)}
                        aria-label="Toggle Todo"
                    >
                        <Checkbox
                            checked={todo.completed}
                            disableRipple
                            edge="start"
                        />
                        <ListItemText
                            sx={{
                                color: todo.completed ? 'gray' : 'inherit',
                                textDecoration: todo.completed ? 'line-through' : 'none'
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
