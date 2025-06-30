import React from 'react';

export default function AddButton({newTodo, setNewTodo, handleAddTodo}) {
    return (
        <div>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder='Add new Todo'
            />
            <button onClick={handleAddTodo}>Add</button>
        </div>
    );
}