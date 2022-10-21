import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import PasswordListScreen from './screens/PasswordListScreen';
import AddPasswordScreen from './screens/AddPasswordScreen';
import SettingsScreen from './screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{tabBarShowLabel: false}}
      >
        <Tab.Screen
            name='Passwords'
            component={PasswordListScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name='unlock' color={color} size={size} />
                )
            }}
        />
        <Tab.Screen
            name='New Password'
            component={AddPasswordScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name='plus' color={color} size={size} />
                )
            }}
        />
        <Tab.Screen
            name='Settings'
            component={SettingsScreen}
            options={{
                tabBarIcon: ({ color, size }) => (
                    <AntDesign name='setting' color={color} size={size} />
                )
            }}
        />
      </Tab.Navigator>
      <StatusBar></StatusBar>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#00f',
    }
});
