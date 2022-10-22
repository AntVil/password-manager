import { StyleSheet, View, Dimensions } from 'react-native';
import Constants from 'expo-constants';

import PasswordInfo from '../components/PasswordInfo';
import CreatePassword from '../components/CreatePassword';

import { TAB_BAR_HEIGHT } from '../constants';
const WINDOW_HEIGHT = Dimensions.get('window').height;

export default function AddPasswordScreen(props) {
    return (
        <View style={styles.root}>
            <PasswordInfo></PasswordInfo>
            
            <CreatePassword style={styles.button}></CreatePassword>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        marginTop: Constants.statusBarHeight,
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: WINDOW_HEIGHT - Constants.statusBarHeight - TAB_BAR_HEIGHT
    },
    button: {
        flex: 1,
        justifyContent: 'center'
    }
});
