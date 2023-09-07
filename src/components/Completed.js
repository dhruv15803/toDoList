import React from 'react'
import './componentCss/CompletedCss.css'
export default function Completed(props) {
    const completedTasks = props.completedTasks;
  return (
    <>
    {completedTasks.length!==0 && <div>
    <center><h2>completed list</h2></center>
    <div className="completedContainer">
      {completedTasks.map((item,index)=>{
        return <div key={item.id} className="completedItem">
        <p>{`• ${item.task}`}</p>
      </div>}
      )}
    </div>
    <center><button className='completedTaskBtn' onClick={props.clearCompletedTasks}>Clear completed tasks</button></center>
    </div>}
    </>
  )
}
