import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import ToDoForm from './components/ToDoForm';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    if (taskText && !tasks.includes(taskText)) {
      setTasks([...tasks, taskText]);
    }
  };

  return (
    <View style={styles.container}>
      <ToDoForm addTask={addTask} />
      <FlatList
        data={tasks}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => <Text style={styles.taskItem}>{`${index + 1}. ${item}`}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "white"
  },
  task: {
    fontSize: 22,
    backgroundColor: 'white',
  },
});

export default App;
