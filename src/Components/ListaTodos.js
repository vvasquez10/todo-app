import React, { useState } from  'react';

const ListaTodos = (props) => {


    const deleteTodo = (e, todo) => {
        e.preventDefault();
        props.onDeleteTodo(todo);
    };
    
    return(
        <>
        {
        props.todos.map((todo) => (
            <ul>
                <li>
                <form onSubmit={(e) => deleteTodo(e, todo)}>
                    <label style={{textDecorationLine: todo.checked ? 'line-through': 'none'}}> {todo.nombreTodo} - </label>    
                    <input type="checkbox" checked={todo.checked} onChange={(e) =>  props.onChangeStatus(todo)}/>                                 
                    <div>
                        <input type="submit" value="Delete" />      
                    </div>                
                                  
                </form>
                </li>
            </ul>
        ))                   
        }
        
        </>
    );

}

export default ListaTodos;