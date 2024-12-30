import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import { useState } from 'react';
import { useTheme } from '../context/themeContext';
import { lightTheme, darkTheme } from '../themes/themes';

const SettingsScreen = ({ navigation }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const theme = isDarkMode ? darkTheme : lightTheme;

  const [notificationsEnabled, setNotificationsEnabled] = useState(false);

  const toggleNotifications = () => setNotificationsEnabled((prev) => !prev);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      {/* Account Button */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: theme.buttonBackground }]}
        onPress={() => navigation.navigate('Account')}
      >
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>Account</Text>
      </TouchableOpacity>

      {/* Sign out button */}
      <TouchableOpacity 
        style={[styles.button, styles.signoutButton, { backgroundColor: theme.signOutButton }]} 
        onPress={() => alert('Signed Out')}
      >
        <Text style={[styles.buttonText, { color: theme.buttonText }]}>Sign Out</Text>
      </TouchableOpacity>

      {/* Notifications Toggle */}
      <View style={styles.toggleContainer}>
        <Text style={[styles.toggleLabel, { color: theme.text }]}>Notifications</Text>
        <Switch
          trackColor={{ 
            false: '#767577', 
            true: isDarkMode ? 'black' : '#81b0ff'}}
          thumbColor={notificationsEnabled ? '#5555FF' : '#f4f3f4'}
          onValueChange={toggleNotifications}
          value={notificationsEnabled}
        />
      </View>

      {/* Dark Mode Toggle */}
      <View style={styles.toggleContainer}>
        <Text style={[styles.toggleLabel, { color: theme.text }]}>Dark Mode</Text>
        <Switch
          trackColor={{ false: '#767577', true: 'black' }}
          thumbColor={isDarkMode ? '#5555FF' : '#f4f3f4'}
          onValueChange={toggleTheme}
          value={isDarkMode}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  button: {
    padding: 15,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
    opacity: 0.9,
  },
  signOutButton: {
    backgroundColor: '#FF3B30',
  },
  buttonText: {
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


