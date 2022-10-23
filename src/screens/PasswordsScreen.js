import { useColorScheme } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import PasswordListScreen from './PasswordListScreen';
import PasswordScreen from './PasswordScreen';
import PasswordEditScreen from './PasswordEditScreen'

import { THEME_COLOR_0, THEME_COLOR_1 } from '../constants';

const Stack = createStackNavigator();

export default function PasswordsScreen() {
    const theme = useColorScheme();

    return (
        <NavigationContainer
            independent={true}
        >
            <Stack.Navigator>
                <Stack.Screen
                    name='List'
                    component={PasswordListScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Password'
                    component={PasswordScreen}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='Edit'
                    component={PasswordEditScreen}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
