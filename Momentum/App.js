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




const Tab = createBottomTabNavigator();
const Stack = createStackNavigator(); 



function HomeStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Set New Goal" component={SetGoalsScreen} />
      <Stack.Screen name="Progress Tracker" component={ProgressScreen}/>
    </Stack.Navigator>
  );
}

function SettingsStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Settings" component={SettingsScreen} />
      <Stack.Screen name="Account" component={AccountScreen} />
    </Stack.Navigator>
  );
}

export default function App(){
  return(
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

            return <FontAwesomeIcon icon={icon} size={size} color={color} />;
          },
          tabBarActiveTintColor: '#007bff',
          tabBarInactiveTintColor: 'gray',
        })}
      >

        <Tab.Screen name="Home" component={HomeStack} options={{headerShown: false}}/>
        <Tab.Screen name="History" component={HistoryScreen}/>
        <Tab.Screen name="Settings" component={SettingsStack} options={{headerShown: false}}/>

  
      </Tab.Navigator>

    </NavigationContainer>
  )
}
