import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { useState } from 'react';

const SettingsScreen = ({ navigation }) => {


  const [notificationsEnabled, setNotificationsEnabled] = useState(false);
  const [darkModeEnabled, setDarkModeEnabled] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);
  const toggleDarkMode = () => setDarkModeEnabled((prev => !prev));

  return (
    <View style={styles.container}>

      {/*Account Button */}
      <TouchableOpacity
      style={styles.button}
      onPress={() => navigation.navigate('Account')}
      >
        <Text style={styles.buttonText}>Account</Text>
      </TouchableOpacity>

      {/*Sign out button */}
      <TouchableOpacity style={[styles.button, styles.signoutButton]} 
      onPress={() => alert('Signed Out')}
      >
        <Text style={styles.buttonText}>Sign Out</Text>
      </TouchableOpacity>

      {/* Notifications Toggle */}
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>Notifications</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={notificationsEnabled ? '#007AFF' : '#f4f3f4'}
          onValueChange={toggleNotifications}
          value={notificationsEnabled}
        />
      </View>

      {/* Dark Mode Toggle */}
      <View style={styles.toggleContainer}>
        <Text style={styles.toggleLabel}>Dark Mode</Text>
        <Switch
          trackColor={{ false: '#767577', true: '#5555FF' }}
          thumbColor={darkModeEnabled ? '#3333FF' : '#f4f3f4'}
          onValueChange={toggleDarkMode}
          value={darkModeEnabled}
        />
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f5f5f5',
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  signOutButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  toggleContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  toggleLabel: {
    fontSize: 16,
    fontWeight: '500',
  },
});

export default SettingsScreen;
