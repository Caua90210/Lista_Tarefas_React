import { useState } from 'react'

import Todo from './components/Todo'
import TodoForms from './components/TodoForms';

import "./App.css"

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "Criar funcionalidade x no sistema",
      category: "Trabalho",
      isCompleted: false
    },
    {
      id: 2,
      text: "Ir para a academia",
      category: "Pessoal",
      isCompleted: true
    },
    {
      id: 3,
      text: "Estudar React",
      category: "Estudo",
      isCompleted: true
    },
    {
      id: 4,
      text: "Ler 2 livros no mês",
      category: "Pessoal",
      isCompleted: false
    }
  ]);
    

  return (
   
     <div className="App">
      <h1>Lista de Tarefas</h1>
      <div className="todo-list">
        {todos.map((todo)=> (
          <Todo todo={todo}></Todo>
        ))}

      </div>
      
      <TodoForms todoForms={todoForms}></TodoForms>
     </div>
       
   
  )
}

export default App
