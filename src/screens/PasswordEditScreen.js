import { StyleSheet, View, Dimensions, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';

import PasswordInfo from '../components/PasswordInfo';
import PasswordSettings from '../components/PasswordSettings';

import { TAB_BAR_HEIGHT } from '../constants';

const WINDOW_HEIGHT = Dimensions.get('window').height;

export default function PasswordEditScreen(props) {
    return (
        <View style={styles.root}>
            <View style={styles.topContainer}>
                <Pressable onPress={() => props.navigation.goBack()}>
                    <AntDesign name='arrowleft' size={40} color='#000' />
                </Pressable>

                <PasswordInfo></PasswordInfo>

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
        marginTop: Constants.statusBarHeight,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        height: WINDOW_HEIGHT - Constants.statusBarHeight - TAB_BAR_HEIGHT
    },
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});
