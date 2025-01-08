import React, { useState } from 'react'

export default function Show(props) {
  const addTask = () => {
    //console.log(text)
    //console.log(list)
    if (text !== '') {
      if (list[0] == 'No task to do') {
        newList([text])
      } else {
        newList([...list, text])
      }
      setText('')
    }

  }
  const deleteTask = (index, task) => {
    //console.log("Clicked item" + index + task)
    const updatedList = list.filter(list => list !== task)
    //console.log(updatedList)
    newList(updatedList)
  }

  const deleteAll = () => {
    newList(['No task to do'])
  }
  const handleOnChange = (event) => {
    setText(event.target.value)
  }
  const [text, setText] = useState('')
  const [list, newList] = useState(['No task to do'])
  return (
    <section>
      <h1>{props.heading}</h1>
      <div className='searchbox'>
        <input type="text" value={text} onChange={handleOnChange} placeholder={props.placeholder} />
      </div>
      <button onClick={addTask}>Add</button>
      <div className='subheading'>List Of Tasks: </div>
      <div className='container'>
        <ul>
          {list.map((task, index) => (
            <li key={index}>{task}
              {task !== 'No task to do' && (
                <button onClick={() => { deleteTask(index, task) }}>Delete</button>)
              }         
            </li>

          ))}
        </ul>
        { list[0] !== 'No task to do' && (
        <button onClick={deleteAll}>Clear All</button>
      )}
      </div>

    </section>
  )
}
