import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import SettingsScreen from './src/screens/SettingsScreen';
import SetnewGoalsScreen from './src/screens/SetNewGoalsScreen';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHouse, faHistory, faGear } from '@fortawesome/free-solid-svg-icons';
import { createStackNavigator } from '@react-navigation/stack';




const Tab = createBottomTabNavigator();

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
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >

        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="History" component={HistoryScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
  
      </Tab.Navigator>

    </NavigationContainer>
  )
}
