import React from 'react'

const TodoForms = () => {
  return (
    <div className='todo-form'>
        <h2>Criar tarefa:</h2>
        <form action="">
            <input type="text" placeholder='Digite o titulo' />
            <select>
                <option value="Trabalho">Trabalho</option>
                <option value="Estudo">Estudo</option>
                <option value="Pessoal">Estudo</option>
            </select>
        </form>
    </div>
  )
}

export default TodoForms