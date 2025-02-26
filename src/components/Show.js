import axios from 'axios'
import Axios from 'axios'
import React, { useState, useEffect } from 'react'

export default function Show(props) {
  const addTask = () => {
    //console.log(text)
    //console.log(list)
    if (text !== '') {
      if (list[0] === 'No task to do') {
        newList([text])
      } else {
        newList([...list, text])
      }
      setText('');
    }

  }
  const deleteTask = async(index, task) => {
    const response = await Axios.delete("http://localhost:4000/api",{
      data:{index,task}
    })  
    console.log(response.data.message)
    console.log(response.data.data)
    newList(response.data.data)
  }

  const updateTask = (index, task) => {
    //console.log(task)
    setEditedIndex(index)
    setEditedValue(task)
  }

  const save = () => {
    const updatedList = list.map((task, index) => {
      if (editedIndex === index) {
        return editedValue;
      }
      return task;
      //console.log(index + task)
      //console.log(editedValue)

    });
    newList(updatedList);
    setEditedIndex(null);
  }

  const deleteAll = async() => {
    const response = await Axios.delete("http://localhost:4000/api");
    console.log(response.data.message)
    console.log(response.data.data)
    newList(response.data.data)
  }

  const handleOnChange = (event) => {
    setText(event.target.value)
  }

  const [text, setText] = useState('')
  const [list, newList] = useState([])
  const [editedValue, setEditedValue] = useState('')
  const [editedIndex, setEditedIndex] = useState(null)



  useEffect(() => {
    const getData = async () => {
      const response = await Axios.get("http://localhost:4000/api");
      newList(response.data)
    };
    getData();
  }, []);



  useEffect(() => {
    if (list.length > 0) {
      const postData = async () => {
        await Axios.post("http://localhost:4000/api", {list});
      };
      postData();
    }
  }, [list]);

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
            <li key={index}>
              {editedIndex === index ? (
                <>
                  <input type="text" value={editedValue} onChange={(e) => setEditedValue(e.target.value)} />
                  <button onClick={() => { save(index, task) }}>Save</button>
                </>
              ) : (
                <>
                  {task}
                  {task !== 'No task to do' && (
                    <>
                      <button onClick={() => { deleteTask(index, task) }}>Delete</button>
                      <button onClick={() => { updateTask(index, task) }}>Update</button>
                    </>)}
                </>
              )}
            </li>

          ))}
        </ul>
        {list[0] !== 'No task to do' && list.length !== 0 && (
          <button onClick={deleteAll}>Clear All</button>
        )}
      </div>

    </section>
  )
}
