import React, { useState } from 'react';
//74


  function App() {
	const [notes, setNotes] = useState([1, 2, 3, 4, 5]);
	const [editingIndex, setEditingIndex] = useState(-1);
  
	const handleClick = (index) => {
	  setEditingIndex(index);
	};
  
	const handleBlur = (index, value) => {
	  const newNotes = [...notes];
	  newNotes[index] = value;
	  setNotes(newNotes);
	  setEditingIndex(-1);
	};

    const handleClickChangeList = () => {
		let newList = [...notes].sort(function (a, b) {
			return b-a;
        });
		setNotes(newList);
	};
	



	
  
	return (
	  <div>
		<ul>
		  {notes.map((note, index) => (
			<li key={index}>
			  {editingIndex === index ? (
				<input
				  type="text"
				  defaultValue={note}
				  onBlur={(e) => handleBlur(index, e.target.value)}
				/>
			  ) : (
				<span onClick={() => handleClick(index)}>{note}</span>
			  )}
			</li>
		  ))}
		</ul>
		<button onClick={() => handleClickChangeList()}>Click to change list</button>
	  </div>
	);
  }

export default App;