import React from "react";
import { Text, View, StyleSheet } from 'react-native';

function ToDoList({tasks}){
    return (
        <View style={styles.container}>
          <Text style={styles.heading}>Tasks:</Text>
          <View>
            {tasks.map((task, index) => (
              <Text key={index} style={styles.task}>{task}</Text>
            ))}
          </View>
        </View>
      );
}
const styles = StyleSheet.create({
    container: {
      padding: 10,
      borderBottomWidth: 1,
      borderColor: '#ccc',
      marginTop: 20,
      },
      heading: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
      },
    task:{
      padding: 10,
        fontSize: 16,
    }
  });

export default ToDoList
