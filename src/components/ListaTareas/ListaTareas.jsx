
import React, { useState } from 'react';

export const ListaTareas = () => {
  const [tasks, setTasks] = useState([]);
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    setTasks([...tasks, { name: taskName, description: taskDescription }]);
    setTaskName('');
    setTaskDescription('');
  };

  return (
    <div>
      <input 
        type="text" 
        placeholder="Nombre de la tarea" 
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
      />
      <input 
        type="text" 
        placeholder="Descripción" 
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
      />
      <button onClick={handleAddTask}>Agregar Tarea</button>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task.name}: {task.description}</li>
        ))}
      </ul>
    </div>
  );
};
