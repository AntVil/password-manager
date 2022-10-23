import { StyleSheet, View, Dimensions, useColorScheme } from 'react-native';
import Constants from 'expo-constants';

import PasswordInfo from '../components/PasswordInfo';
import CreatePassword from '../components/CreatePassword';
import { THEME_COLOR_0, THEME_COLOR_1 } from '../constants';

const WINDOW_HEIGHT = Dimensions.get('window').height;

export default function AddPasswordScreen(props) {
    const theme = useColorScheme();

    return (
        <View style={{...styles.root, backgroundColor: THEME_COLOR_1[theme]}}>
            <PasswordInfo></PasswordInfo>
            
            <CreatePassword style={styles.button}></CreatePassword>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        paddingTop: Constants.statusBarHeight,
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: WINDOW_HEIGHT - Constants.statusBarHeight
    },
    button: {
        flex: 1,
        justifyContent: 'center'
    }
});
