import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import TopBar from "./components/TopBar";
import FaviconSwitcher from "./components/FaviconSwitcher";
import type Todo from "./types";

export default function App() {
    const [todos, setTodos] = useState<Todo[]>(() => {
        if (typeof window === "undefined") {
            return []
        }
        const stored = window.localStorage.getItem("todos")
        return stored ? JSON.parse(stored) as Todo[] : []
    })

    useEffect(() => {
        window.localStorage.setItem("todos", JSON.stringify(todos))
    }, [todos])

    const handleCreateTodo = (text: string) => {
        setTodos((previous) => [...previous, { completed: false, content: text, id: Date.now() }])
    }

    const handleRemoveTodo = (id: number) => {
        setTodos((previous) => previous.filter((todo) => todo.id !== id))
    }

    const handleToggleTodo = (id: number) => {
        setTodos((previous) =>
            previous.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        )
    }

    return (
        <>
            <FaviconSwitcher />
            <TopBar />
            <Box sx={{ marginX: 'auto', maxWidth: { xs: '80%', sm: '60%' } }}>
                <CreateTodo onCreateTodo={handleCreateTodo} />
                <TodoList onRemoveTodo={handleRemoveTodo} onToggleTodo={handleToggleTodo} todos={todos} />
            </Box>
        </>
    )
}
