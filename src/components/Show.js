import React, {useState} from 'react'

export default function Show(props) {
  const addTask = () => {
    //console.log(text)
    //console.log(list)
    if(text!=''){
      if(list[0]==['No task to do']){
        newList([text])
      }else{
        newList([...list,text])
      }
      setText('')
    }
    
  }
  const handleOnChange = (event) => {
    setText(event.target.value) 
  }
  const [text, setText] = useState('')
  const [list, newList ] = useState (['No task to do'])
  return (
    <section>
      <h1>{props.heading}</h1>
      <div className='searchbox'>
        <input type="text" value={text} onChange={handleOnChange} placeholder={props.placeholder}  />
      </div>
      <button onClick={addTask}>Add</button>
      <div className='subheading'>List Of Tasks: </div>
      <div className='container'>
        <ul>
          {list.map((task,index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
        </div>
      
    </section>
  )
}
