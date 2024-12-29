import { View, Text, StyleSheet } from 'react-native';





const SetGoalsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Set New Goals</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'blue',
  },
});

export default SetGoalsScreen;


