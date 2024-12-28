import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './src/screens/HomeScreen';
import HistoryScreen from './src/screens/HistoryScreen';
import SettingsScreen from './src/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Tab.Navigator>

        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="History" component={HistoryScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
  
      </Tab.Navigator>

    </NavigationContainer>
  )
}
