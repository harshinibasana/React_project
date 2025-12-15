import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, deleteTask, markComplete } from './todoSlice';

export default function TodoPage(){
  const [input, setInput] = useState('');
  const tasks = useSelector(state => state.todos.tasks);
  const completed = useSelector(state => state.todos.completed);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Redux Todo</h2>
      <div className="input-group mb-3">
        <input className="form-control" value={input} onChange={e=>setInput(e.target.value)} />
        <button className="btn btn-primary" onClick={()=>{dispatch(addTask(input)); setInput('');}}>Add</button>
      </div>

      <h4>Tasks</h4>
      <ul className="list-group mb-4">
        {tasks.map(t=>(
          <li className="list-group-item d-flex justify-content-between" key={t.id}>
            {t.text}
            <span>
              <button className="btn btn-success btn-sm me-2" onClick={()=>dispatch(markComplete(t.id))}>Complete</button>
              <button className="btn btn-danger btn-sm" onClick={()=>dispatch(deleteTask(t.id))}>Delete</button>
            </span>
          </li>
        ))}
      </ul>

      <h4>Completed</h4>
      <ul className="list-group">
        {completed.map(t=>(
          <li className="list-group-item d-flex justify-content-between" key={t.id}>
            {t.text}
            <button className="btn btn-danger btn-sm" onClick={()=>dispatch(deleteTask(t.id))}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
