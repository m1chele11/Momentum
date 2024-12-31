import { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ConfettiCannon from 'react-native-confetti-cannon';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Swipeable } from 'react-native-gesture-handler';

const ProgressScreen = () => {
  const [goals, setGoals] = useState([]);
  const [confettiGoal, setConfettiGoal] = useState(null); 

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


    const completedGoal = updatedGoals.find(goal => goal.id === id);
    if (completedGoal && !completedGoal.completed) {
      setConfettiGoal(null);
    } else {
      setConfettiGoal(id); 
    }
  };

  const deleteGoal = async (id) => {
    const updatedGoals = goals.filter(goal => goal.id !== id);
    setGoals(updatedGoals);
    await AsyncStorage.setItem('goals', JSON.stringify(updatedGoals));
  };

  useEffect(() => {
    loadGoals();
  }, []);

  const renderGoal = ({ item }) => {
    const deadline = new Date(item.deadline);
    const isMissed = !item.completed && deadline < new Date();


    const renderRightActions = (progress, dragX) => (
      <TouchableOpacity
        style={styles.deleteButton}
        onPress={() => {
          deleteGoal(item.id);
          Alert.alert('Goal Deleted', 'Your goal has been deleted successfully!');
        }}
      >
        <Icon name="trash" size={24} color="#fff" />
      </TouchableOpacity>
    );

    return (
      <Swipeable renderRightActions={renderRightActions}>
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
  
          {/* Display Missed Deadline text below date if the goal is missed */}
          {isMissed && <Text style={styles.missedText}>Missed Deadline</Text>}
  
          {/* Display confetti if the goal is completed */}
          {item.completed && confettiGoal === item.id && (
            <ConfettiCannon count={200} origin={{ x: 200, y: 0 }} />
          )}
  
          {/* Display blue badge for completed goals */}
          {item.completed && (
            <View style={styles.badgeContainer}>
              <Icon name="check-circle" size={20} color="#007bff" />
            </View>
          )}
        </TouchableOpacity>
      </Swipeable>
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
    backgroundColor: '#f44336',
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
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 10,
  },
  badgeContainer: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  deleteButton: {
    backgroundColor: '#e53946', 
    justifyContent: 'center',
    alignItems: 'center',
    width: 70,
    height: '90%',
    borderRadius: 10,
    marginRight: 10,
  },
});

export default ProgressScreen;



