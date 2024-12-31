import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
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

  const renderGoal = ({ item }) => {
    const deadline = new Date(item.deadline);
    const isMissed = !item.completed && deadline < new Date();

    return (
      <TouchableOpacity
        style={[
          styles.goalItem,
          item.completed && styles.completedGoal,
          isMissed && styles.missedGoal,
        ]}
        onPress={() => {
          if (isMissed) {
            Alert.alert('Missed Deadline', 'This goal has passed its deadline.');
          } else {
            toggleCompletion(item.id);
          }
        }}
      >
        <Text style={styles.goalText}>{item.name}</Text>
        <Text style={styles.goalDate}>
          {deadline.toLocaleDateString()} {deadline.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </Text>
        {isMissed && <Text style={styles.missedText}>Missed Deadline</Text>}
      </TouchableOpacity>
    );
  };

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
  missedGoal: {
    backgroundColor: '#ff5252',
  },
  goalText: {
    color: '#fff',
    fontSize: 18,
  },
  goalDate: {
    color: '#ddd',
    fontSize: 14,
  },
  missedText: {
    color: '#fff',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 16,
  },
});

export default ProgressScreen;

