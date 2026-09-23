import React, { useState } from 'react';
import './App.css';

function App() {
  const [item, setItem] = useState('');
  const [list, setList] = useState([]);

 
  const handleAdd = () => {
    if (item.trim() !== '') {
      setList([...list, item]);
      setItem(''); 
    }
  };
  const handleRemove = (indexToRemove) => {
    const updatedList = list.filter((_, index) => index !== indexToRemove);
    setList(updatedList);
  };

  // Function to handle "Enter" key press
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleAdd();
    }
  };

  return (
    <div className="app-container">
      <div className="card">
        <h2 className="title">Add Items to List</h2>
        
        <div className="input-group">
          <input
            type="text"
            name="item"
            placeholder="Type something and press Enter"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            onKeyDown={handleKeyDown}
            className="input-field"
          />
          <button className="add-btn" onClick={handleAdd}>
            Add
          </button>
        </div>

        {list.length === 0 ? (
          <p className="empty-text">No items yet. Add your first one!</p>
        ) : (
          <ul className="item-list">
            {list.map((listItem, index) => (
              <li key={index} className="list-item">
                <span className="item-text">{listItem}</span>
                <button 
                  className="remove-btn" 
                  onClick={() => handleRemove(index)}
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default App;