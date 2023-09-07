import React from 'react'
import './componentCss/PendingCss.css'

export default function Pending(props) {
  const tasks = props.tasks;

  return (
    <>
    <div className="addTasksContainer">
      <input type="text" onChange={props.handleOnChange} value={props.task} name="addtasks" id="addTaskBox" className='inputBox' placeholder='Enter your task'/>
      <button className='addTaskBtn' onClick={props.addTask}>add task</button>
    </div>
    <div className="alreadyInListMessage">
      <p>{props.alreadInList}</p>
    </div>
    <div className='emptyFieldText'>
      <p>{props.emptyFieldMessage}</p>
    </div>
    <div className='parentPendingContainer'>
    { tasks.length!==0 && <div className="pendingContainer">
      {tasks.map((item,index)=>{
        return <div key={item.id} className="pendingItem">
        <p>{`• ${item.task}`}</p>
        <div className="itemBtns">
          <button className="itemBtn" onClick={()=>props.completeTask(index)}>complete task</button>
          <button className="itemBtn" onClick={()=>props.deleteTask(index)}>delete task</button>
        </div>
      </div>}
      )}
    </div>}
    {tasks.length!==0 && <button className='clearPendingBtn' onClick={props.clearPendingTasks}>clear all tasks</button>}
    </div>
    </>
  )
}
