import { StatusBar } from 'expo-status-bar';
import { useColorScheme } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign } from '@expo/vector-icons';

import PasswordsScreen from './PasswordsScreen';
import AddPasswordScreen from './AddPasswordScreen';
import SettingsScreen from './SettingsScreen';

import { TAB_BAR_HEIGHT, THEME_COLOR_0, THEME_COLOR_4, FONT_COLOR } from '../constants'

const Tab = createBottomTabNavigator();

export default function MainScreen() {
    const theme = useColorScheme();

    return (
        <NavigationContainer
            independent={true}
        >
            <Tab.Navigator
                screenOptions={{
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: THEME_COLOR_4[theme],
                    tabBarInactiveTintColor: FONT_COLOR[theme],
                    tabBarStyle: {
                        backgroundColor: THEME_COLOR_0[theme],
                        height: TAB_BAR_HEIGHT,
                        borderTopColor: 'transparent'
                    }
                }}
            >
                <Tab.Screen
                    name='Passwords'
                    component={PasswordsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name='unlock' color={color} size={size} />
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name='New Password'
                    component={AddPasswordScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name='plus' color={color} size={size} />
                        ),
                        headerShown: false
                    }}
                />
                <Tab.Screen
                    name='Settings'
                    component={SettingsScreen}
                    options={{
                        tabBarIcon: ({ color, size }) => (
                            <AntDesign name='setting' color={color} size={size} />
                        ),
                        headerShown: false
                    }}
                />
            </Tab.Navigator>
            <StatusBar></StatusBar>
        </NavigationContainer>
    );
}
