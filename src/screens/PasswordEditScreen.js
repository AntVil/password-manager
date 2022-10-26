import { StyleSheet, View, Dimensions, Pressable, useColorScheme } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';

import PasswordEditInfo from '../components/PasswordEditInfo';
import PasswordSettings from '../components/PasswordSettings';

import { THEME_COLOR_0, THEME_COLOR_1 } from '../constants';

const WINDOW_HEIGHT = Dimensions.get('window').height;

export default function PasswordEditScreen(props) {
    const theme = useColorScheme();

    return (
        <View style={{...styles.root, backgroundColor: THEME_COLOR_1[theme]}}>
            <View style={{...styles.topContainer}}>
                <Pressable onPress={() => props.navigation.goBack()}>
                    <AntDesign name='arrowleft' size={40} color='#000' />
                </Pressable>

                <PasswordEditInfo></PasswordEditInfo>

                <Pressable onPress={() => console.log('edit')}>
                    <AntDesign name='save' size={40} color='#000' />
                </Pressable>
            </View>
            
            <PasswordSettings></PasswordSettings>
        </View>
    );
}

const styles = StyleSheet.create({
    root: {
        paddingTop: Constants.statusBarHeight,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: WINDOW_HEIGHT - Constants.statusBarHeight
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});
