import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import Fontisto from 'react-native-vector-icons/Fontisto'; // Corrected import

// Screens
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import SettingsScreen from './screens/SettingsScreen';

//Screen names
const homeName = "Home";
const detailsName = "Pills";
const settingsName = "Settings";

const Tab = createBottomTabNavigator();

function MainContainer() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (route.name === homeName) {
              iconName = focused ? 'today' : 'today-outline';
            } else if (route.name === detailsName) {
              iconName = focused ? 'pills' : 'pills';
            } else if (route.name === settingsName) {
              iconName = focused ? 'database' : 'database';
            }
            
            if (iconName === 'database') {
              return <Feather name={iconName} size={size} color={color} />;
            } else if (iconName === "pills") { // Corrected the condition
              return <Fontisto name={iconName} size={size} color={color} />; // Corrected the component name and used iconName
            }
            else {
              return <Ionicons name={iconName} size={size} color={color} />;
            }
          },
        })}
      >

        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={detailsName} component={DetailsScreen} />
        <Tab.Screen name={settingsName} component={SettingsScreen} />

      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default MainContainer;
