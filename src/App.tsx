import { Box } from "@mui/material";
import { useCallback, useEffect, useMemo, useState } from "react";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";
import TopBar from "./components/TopBar";
import FaviconSwitcher from "./components/FaviconSwitcher";
import type { Todo, SnackBarMsg } from "./types";
import TodoFilter from "./components/TodoFilter";
import SnackBar from "./components/SnackBar";

export default function App() {

    // todos
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

    // hasFilter
    const [hasFilter, setHasFilter] = useState<boolean>(() => {
        if (typeof window === "undefined") {
            return false
        }
        const stored = window.localStorage.getItem("hasFilter")
        return stored ? JSON.parse(stored) as boolean : false
    })

    useEffect(() => {
        window.localStorage.setItem("hasFilter", JSON.stringify(hasFilter))
    }, [hasFilter])

    // hasSnackBar
    const [snackBarMsg, setSnackBarMsg] = useState<SnackBarMsg | null>(null)

    // filteredTodos
    const filteredTodos = useMemo(() => (
        hasFilter
            ? todos.filter((todo) => !todo.completed)
            : todos
    ), [todos, hasFilter])

    // handles
    const handleCreateTodo = useCallback((text: string) => {
        setTodos((previous) => [...previous, { completed: false, content: text, id: Date.now() }])
        setSnackBarMsg({ id: Date.now(), content: "A todo Created." })
    }, [])

    const handleRemoveTodo = useCallback((id: number) => {
        setTodos((previous) => previous.filter((todo) => todo.id !== id))
        setSnackBarMsg({ id: Date.now(), content: "A todo Removed." })
    }, [])

    const handleToggleTodo = useCallback((id: number) => {
        setTodos((previous) =>
            previous.map((todo) =>
                todo.id === id
                    ? { ...todo, completed: !todo.completed }
                    : todo
            )
        )
    }, [])

    const handleToggleFilter = useCallback((status: boolean) => {
        setHasFilter(status)
    }, [])

    // App body
    return (
        <>
            <FaviconSwitcher />
            <TopBar />
            <Box sx={{ marginX: 'auto', maxWidth: { xs: '80%', sm: '60%' } }}>
                <CreateTodo onCreateTodo={handleCreateTodo} />
                <TodoList onRemoveTodo={handleRemoveTodo} onToggleTodo={handleToggleTodo} todos={filteredTodos} />
            </Box>
            <TodoFilter onToggleFilter={handleToggleFilter} hasFilter={hasFilter} />
            <SnackBar msg={snackBarMsg} />
        </>
    )
}
