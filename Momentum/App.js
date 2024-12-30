import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SetGoalsScreen from './src/screens/SetGoalsScreen';
import ProgressScreen from './src/screens/ProgressScreen';
import AccountScreen from './src/screens/AccountScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faHistory, faGear } from '@fortawesome/free-solid-svg-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { ThemeProvider, useTheme } from './src/context/themeContext'; 
import { darkTheme, lightTheme } from './src/themes/themes';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

function HomeStack() {
  const { isDarkMode } = useTheme(); // Get current theme from ThemeContext

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Home" 
        component={HomeScreen} 
        options={{
          headerShown: true, // Keep header
          headerStyle: {
            backgroundColor: theme.background, // Set header background color based on theme
          },
          headerTintColor: theme.text, // Set text color for header (e.g., title, back button) based on theme
        }} 
      />
      <Stack.Screen 
        name="Set New Goal" 
        component={SetGoalsScreen} 
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTintColor: theme.text,
        }} 
      />
      <Stack.Screen 
        name="Progress Tracker" 
        component={ProgressScreen} 
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTintColor: theme.text,
        }} 
      />
    </Stack.Navigator>
  );
}

function SettingsStack() {
  const { isDarkMode } = useTheme(); // Get current theme from ThemeContext

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <Stack.Navigator>
      <Stack.Screen 
        name="Settings Main" 
        component={SettingsScreen} 
        options={{
          headerShown: true, 
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTintColor: theme.text,
        }} 
      />
      <Stack.Screen 
        name="Account" 
        component={AccountScreen} 
        options={{
          headerShown: true,
          headerStyle: {
            backgroundColor: theme.background,
          },
          headerTintColor: theme.text,
        }} 
      />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <ThemeProvider>
      <AppWithNavigation />
    </ThemeProvider>
  );
}

// This component will have access to the theme context
function AppWithNavigation() {
  const { isDarkMode } = useTheme(); // Get current theme from ThemeContext

  const theme = isDarkMode ? 'dark' : 'light';

  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let icon;
            if (route.name === 'Home') {
              icon = faHouse;
            } else if (route.name === 'History') {
              icon = faHistory;
            } else if (route.name === 'Settings') {
              icon = faGear;
            }

            // Adjust icon color based on theme
            return <FontAwesomeIcon icon={icon} size={size} color={color} />;
          },
          // Tab bar styling based on the theme
          tabBarActiveTintColor: theme === 'dark' ? '#5555FF' : '#007bff', // Active tab icon/text color
          tabBarInactiveTintColor: theme === 'dark' ? '#aaa' : 'gray', // Inactive tab icon/text color
          tabBarStyle: {
            backgroundColor: theme === 'dark' ? '#333' : '#fff', // Tab bar background color
          },
          tabBarLabelStyle: {
            fontSize: 14, // Label font size
            fontWeight: 'bold',
          },
        })}
      >
        <Tab.Screen name="Home" component={HomeStack} options={{ headerShown: false }} />
        <Tab.Screen name="History" component={HistoryScreen} />
        <Tab.Screen name="Settings" component={SettingsStack} options={{ headerShown: false }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
