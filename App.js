import React, { useState } from 'react';
import {  View } from 'react-native';
import ToDoForm from './ToDoForm';
import ToDoList from './ToDoList';

function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  return (
    <View>
      <ToDoList tasks={tasks}/>
      <ToDoForm addTask={addTask}/>
    </View>
  );
}

export default App;
