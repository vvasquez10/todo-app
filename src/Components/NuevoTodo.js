import React, { useState } from  'react';

const NuevoTodo = (props) => {
    const [nombreTodo, setNombreTodo] = useState("");
    const [checked, setChecked] = useState(false);


    const createTodo = (e) => {
        e.preventDefault();
        const newTodo = { nombreTodo, checked };
        props.onNewTodo(newTodo)
    };

    return(
        <>
        <form onSubmit={ createTodo }>
            <div>
                    <label>Add a new To Do: </label>
                    <input type="text" id='newTodo' required="True" onChange={ e =>  setNombreTodo(e.target.value) }/>                    
                    <input type="submit" value="Add" />
            </div>            
        </form>
        </>
    );
}

export default NuevoTodo;