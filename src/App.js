import './App.css';
import {useState} from 'react';

function App() {
  const [toDos, settoDos] = useState([]);
  const [toDo, settoDo] = useState('');
  const [delToDos, setdelToDos] = useState([]);
  
  return (    
    <div className="col-12 app" >
      <div className="text-center">
        <div className="mainHeading">
          <h1>ToDo List</h1>
        </div>
        <div className="subHeading">
          <br />
          <h2>Whoop, it's Wednesday 🌝 ☕ </h2>
        </div>
        <div className="justify-content-center d-flex">
          <div className="input">
            <input onChange={(e)=>{settoDo(e.target.value)}} type="text" placeholder="🖊️ Add item..." />
            <i onClick={()=>{settoDos([...toDos,{id: Date.now(),text: toDo,status: false}])}} className="fas fa-plus"></i>
          </div>
        </div>
      </div>
      
      <div className='col-12 d-flex'>
      <div className="col-4 text-center">
        <div className="subHeading">  
          <h2>ToDos 🤔</h2>
        </div>
        { toDos.map((obj)=>{
          return(
          <div className="todos">
            <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  settoDos(toDos.filter(obj2=>{
                    if(obj2.id === obj.id){
                      obj2.status = e.target.checked
                    }
                    return obj2
                  }))
                }} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={()=>{
                  settoDos(toDos.filter(obj3=> obj3.id!==obj.id))
                  setdelToDos([...delToDos,obj])
                }} className="fas fa-times"></i>
              </div>
            </div>
          </div>         
          );
        })}
      </div>

      <div className="col-4 ">
        <div className="text-center">
          <h2>Completed task</h2>
          <div className="">
            { toDos.map((obj)=>{
              if(obj.status){
                return(
                  <h4>{obj.text}</h4>
                );
              }return null;
            })}
          </div>
        </div>
      </div>

      <div className="col-4">
            <h2>Removed Task</h2>
            <div className="">
            { delToDos.map((obj)=>{
              return(
              <h4>{obj.text}<span><i className="fa fa-undo" onClick={()=>{
                setdelToDos(delToDos.filter(objd => obj !==objd))
                settoDos([...toDos,obj])
              }}></i></span></h4>
              )             
            })}
          </div>
      </div>
      </div>

    </div>
  );
}

export default App;
