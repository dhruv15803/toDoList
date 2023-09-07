import { useEffect, useState } from 'react';
import './App.css';
import Heading1 from './components/Heading1';
import Heading2 from './components/Heading2';
import Pending from './components/Pending';
import Completed from './components/Completed';
function App() {

  const List = JSON.parse(localStorage.getItem('List'));
  const completeList = JSON.parse(localStorage.getItem('completeList'));

  const [tasks,setTasks] = useState(List);
  const [completedTasks,setCompletedTasks] = useState(completeList);
  const [task,setTask] = useState('');
  const [emptyFieldMessage,setEmptyFieldMessage] = useState('');
  const [alreadInList,setAlreadyInList] = useState('');
  console.log(completeList);
  const handleOnChange = (event)=>{
    setTask(event.target.value);
  }

  const addTask = ()=>{
    let inList = false;



    for(let i=0;i<tasks.length;i++){
      if((task.trim().toLowerCase())===(tasks[i].task.trim().toLowerCase())){
        inList = true;
        break;
      }
    }
    if(inList === true){
      setAlreadyInList('The task already exists');
      setTimeout(()=>{
        setAlreadyInList('');
      },3000);
      return;
    }

    if(task===''){
      setEmptyFieldMessage('cannot add empty field');
      setTimeout(()=>{
        setEmptyFieldMessage('');
      },3000);
    }
    else{
      let size = tasks.length;
      let lastIndex = size-1;
      let id;
      if(tasks.length===0){
        id = 0;
      }
      else{
        id = tasks[lastIndex].id;
      }
      setTasks(prevTasks=>[...prevTasks,{
        "id":id+1,
        "task":task,
      }])
      setTask('');
    }
  }
  const deleteTask = (index)=>{
    const temp = [...tasks];
    temp.splice(index,1);
    setTasks(temp);
  }

  const completeTask = (index)=>{
    let id = tasks[index].id;
    let completedTask = tasks[index].task;
    setCompletedTasks(prevCompletedTasks=>[...prevCompletedTasks,{
      "id":id,
      "task":completedTask,
    }]);
    const temp = [...tasks];
    temp.splice(index,1);
    setTasks(temp);
  }

  const clearCompletedTasks = ()=>{
    setCompletedTasks([]);
  }

  const clearPendingTasks = ()=>{
    setTasks([]);
  }



  useEffect(()=>{
    localStorage.setItem('List',JSON.stringify(tasks));
  },[tasks]);

  useEffect(()=>{
    localStorage.setItem('completeList',JSON.stringify(completedTasks));
  },[completedTasks]);


  return (
    <>
    <Heading1/>
    <hr />
    <Heading2/>
    <Pending
      tasks={tasks}
      addTask={addTask} 
      task={task}
      handleOnChange={handleOnChange}
      deleteTask={deleteTask}
      emptyFieldMessage={emptyFieldMessage} 
      alreadInList={alreadInList} 
      completeTask={completeTask} 
      clearPendingTasks={clearPendingTasks}
     />
    <Completed completedTasks={completedTasks} clearCompletedTasks={clearCompletedTasks}/>
    </>
  );
}

export default App;
