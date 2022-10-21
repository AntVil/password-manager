import { StyleSheet, Text, View } from 'react-native';
import Constants from 'expo-constants';

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.titleText}>Settings</Text>
            </View>

            <Text>Settings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: "100%",
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
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
});
