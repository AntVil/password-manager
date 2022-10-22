import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import PasswordsScreen from './screens/PasswordsScreen';
import AddPasswordScreen from './screens/AddPasswordScreen';
import SettingsScreen from './screens/SettingsScreen';

import { TAB_BAR_HEIGHT } from './constants'

const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={{tabBarShowLabel: false}}
            >
                <Tab.Screen
                    name='Passwords'
                    component={PasswordsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name='unlock' color={color} size={size} />
                        ),
                        headerShown: false,
                        tabBarStyle: { height: TAB_BAR_HEIGHT }
                    }}
                />
                <Tab.Screen
                    name='New Password'
                    component={AddPasswordScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name='plus' color={color} size={size} />
                        ),
                        headerShown: false,
                        tabBarStyle: { height: TAB_BAR_HEIGHT }
                    }}
                />
                <Tab.Screen
                    name='Settings'
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name='setting' color={color} size={size} />
                        ),
                        headerShown: false,
                        tabBarStyle: { height: TAB_BAR_HEIGHT }
                    }}
                />
            </Tab.Navigator>
            <StatusBar></StatusBar>
        </NavigationContainer>
    );
}
