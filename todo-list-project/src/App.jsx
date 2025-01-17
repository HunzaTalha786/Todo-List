import { useState } from 'react'

import './App.css'


function TodoList() {
  const [items, setItems] = useState([]); 
  const [input, setInput] = useState(""); 

  const addItem = () => {
    if (input.trim()) {
      setItems([...items, input]); // add the new item to the list
      setInput(""); // clear 
    }
  };

  const deleteItem = (index) => {
    const updatedItems = items.filter((item, i) => i !== index); 
    setItems(updatedItems); // update the state with the remaining items
  };

  return (
    <>
      <div>
        <h1>Simple Todo-List</h1>
        <input 
          type="text" 
          value={input} 
          onChange={(e) => setInput(e.target.value)} 
        />
        <button id='add-btn' onClick={addItem}>Add</button>
      </div>
      <div>
        {items.length > 0 ? (
          <ul>
            {items.map((item, index) => (
              <li key={index}>
                {item}
                <button  onClick={() => deleteItem(index)} style={{ marginLeft: '10px', backgroundColor: 'rgb(70, 20, 70)', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '4px',fontfamily: 'cursive'}}>
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No items added yet.</p>
        )}
      </div>
    </>
  );
}

export default TodoList;
