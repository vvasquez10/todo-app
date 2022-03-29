import './App.css';
import NuevoTodo from './Components/NuevoTodo';
import ListaTodos from './Components/ListaTodos';
import React, { useState } from  'react';

function App() {
    const [listaTodos, setListaTodos] = useState([]);

    //...
    const setNewTodo = (newTodo) => {
      setListaTodos([...listaTodos, newTodo]);
    };

    // filter
    const deleteTodo = (todo) => {
      const newListaTodos = listaTodos.filter(x => x.nombreTodo !== todo.nombreTodo);
      setListaTodos(newListaTodos);    
    };

    // map
    const changeStatus = (todoToChange) => {
      const updatedListaTodos = listaTodos.map(todo => { //ir todo por todo
        if (todo.nombreTodo === todoToChange.nombreTodo) { //si un todo coincide con el que queremos actualizar
          return { //retorna una copia de ese todo pero ya actualizado
            ...todo,
            checked: !todoToChange.checked,
          }
        }
        return todo
      });
      
      setListaTodos(updatedListaTodos);
    };
    
  return (
    <div className="App">     
      <NuevoTodo onNewTodo={setNewTodo}/>
      <ListaTodos todos={listaTodos} onDeleteTodo={deleteTodo} onChangeStatus={changeStatus}/>
    </div>
  );
}

export default App;
