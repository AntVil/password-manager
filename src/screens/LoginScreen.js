import { StyleSheet, Text, View, useColorScheme, Pressable } from 'react-native';
import Constants from 'expo-constants';

import { THEME_COLOR_0, THEME_COLOR_1 } from '../constants';
import { TextInput } from 'react-native-gesture-handler';

export default function LoginScreen(props) {
    const theme = useColorScheme();

    return (
        <View style={{...styles.root, backgroundColor: THEME_COLOR_1[theme]}}>
            <TextInput>Login</TextInput>
            <Pressable onPress={() => {props.navigation.navigate('Main')}}>
                <Text>Login</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
