import { Box } from "@mui/material";
import { useState } from "react";
import type Todo from "./types";
import TopBar from "./components/TopBar";
import ThemeSwitch from "./components/ThemeSwitch";
import CreateTodo from "./components/CreateTodo";
import TodoList from "./components/TodoList";

export default function App() {
  const [todos, setTodos] = useState<Todo[]>([])
  
  const onCreateTodo = (text: string) => {
    if(text != '') {
      setTodos([...todos, {id: Date.now(), content: text, compeleted: false}])
    }
  }

  const onRemoveTodo = (id: number) => {
    setTodos(todos.filter(todo=>todo.id!==id))
  }

  const onToggleTodo = (id: number) => {
    setTodos(todos.map(todo=>{
      if(todo.id===id) {
        todo.compeleted = !todo.compeleted
      }
      return todo
    }))
  }

  return (
    <Box>
      <TopBar />
      <Box marginX="auto" sx={{ maxWidth: { xs: '80%', sm: '60%' } }}>
        <CreateTodo onCreateTodo={onCreateTodo}/>
        <TodoList onRemoveTodo={onRemoveTodo} onToggleTodo={onToggleTodo} todos={todos}/>
        <ThemeSwitch />
      </Box>
    </Box>
  )
}
