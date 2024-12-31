import { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

const SetGoalsScreen = ({ navigation }) => {
  const [goalName, setGoalName] = useState('');
  const [deadline, setDeadline] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const saveGoal = async () => {
    if (!goalName.trim()) {
      Alert.alert('Error', 'Goal name cannot be empty.');
      return;
    }

    const newGoal = { id: Date.now(), name: goalName, deadline: deadline.toISOString(), completed: false };
    try {
      const storedGoals = await AsyncStorage.getItem('goals');
      const goals = storedGoals ? JSON.parse(storedGoals) : [];
      await AsyncStorage.setItem('goals', JSON.stringify([...goals, newGoal]));
      Alert.alert('Success', 'Goal saved!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Error', 'Failed to save goal.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Goal Name:</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter goal name"
        value={goalName}
        onChangeText={setGoalName}
      />
      <Text style={styles.label}>Deadline:</Text>
      <Button title={deadline.toDateString()} onPress={() => setShowDatePicker(true)} />
      {showDatePicker && (
        <DateTimePicker
          value={deadline}
          mode="date"
          display="default"
          onChange={(event, selectedDate) => {
            setShowDatePicker(false);
            if (selectedDate) {
              setDeadline(selectedDate);
            }
          }}
        />
      )}
      <Button title="Save Goal" onPress={saveGoal} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
});

export default SetGoalsScreen;
