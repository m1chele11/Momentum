import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Button } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const ProgressScreen = () => {
  const [goals, setGoals] = useState([]);

  const loadGoals = async () => {
    try {
      const storedGoals = await AsyncStorage.getItem('goals');
      setGoals(storedGoals ? JSON.parse(storedGoals) : []);
    } catch (error) {
      console.error('Failed to load goals:', error);
    }
  };

  const toggleCompletion = async (id) => {
    const updatedGoals = goals.map((goal) =>
      goal.id === id ? { ...goal, completed: !goal.completed } : goal
    );
    setGoals(updatedGoals);
    await AsyncStorage.setItem('goals', JSON.stringify(updatedGoals));
  };

  useEffect(() => {
    loadGoals();
  }, []);

  const renderGoal = ({ item }) => (
    <TouchableOpacity
      style={[styles.goalItem, item.completed && styles.completedGoal]}
      onPress={() => toggleCompletion(item.id)}
    >
      <Text style={styles.goalText}>{item.name}</Text>
      <Text style={styles.goalDate}>{new Date(item.deadline).toDateString()}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={goals}
        keyExtractor={(item) => item.id.toString()}
        renderItem={renderGoal}
        ListEmptyComponent={<Text>No goals found. Create one!</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  goalItem: {
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: '#007bff',
  },
  completedGoal: {
    backgroundColor: '#4caf50',
  },
  goalText: {
    color: '#fff',
    fontSize: 18,
  },
  goalDate: {
    color: '#ddd',
    fontSize: 14,
  },
});

export default ProgressScreen;
