import { StyleSheet, Text, View, useColorScheme } from 'react-native';
import Constants from 'expo-constants';

import { THEME_COLOR_0, THEME_COLOR_1 } from '../constants';

export default function SettingsScreen() {
    const theme = useColorScheme();

    return (
        <View style={{...styles.root, backgroundColor: THEME_COLOR_1[theme]}}>
            <View style={{...styles.header, backgroundColor: THEME_COLOR_0[theme]}}>
                <Text style={styles.titleText}>Settings</Text>
            </View>

            <Text>Settings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#FFF',
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 10,
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 20,
        textAlign: 'center',
        paddingVertical: 8
    },
    root: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});
