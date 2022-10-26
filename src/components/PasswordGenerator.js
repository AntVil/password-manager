import { Pressable, StyleSheet, Dimensions, View, useColorScheme } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import * as Clipboard from 'expo-clipboard';

import Sha256 from './Sha256';

const WINDOW_WIDTH = Dimensions.get('window').width;
const BUTTON_SIZE = WINDOW_WIDTH * 2 / 3;

function generatePassword(masterPassword, passwordIdentifier, passwordCounter){
    const hex = Sha256.hash(`${masterPassword}${passwordIdentifier}${passwordCounter}`);

    const password = hex;

    Clipboard.setStringAsync(password);
}

export default function PasswordGenerator(props) {
    const theme = useColorScheme();

    return (
        <View style={styles.container}>
            <Pressable style={styles.button} onPress={() => generatePassword('generatePassword', ',', '#')}>
                <AntDesign name='unlock' size={BUTTON_SIZE * 2 / 3} color='#000' />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        marginHorizontal: (WINDOW_WIDTH - BUTTON_SIZE) / 2
    },
    button: {
        width: BUTTON_SIZE,
        height: BUTTON_SIZE,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333',
        borderRadius: BUTTON_SIZE / 2,
    }
});
