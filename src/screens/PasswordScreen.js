import { StyleSheet, View, Dimensions, Pressable } from 'react-native';
import Constants from 'expo-constants';
import { AntDesign } from '@expo/vector-icons';

import PasswordInfo from '../components/PasswordInfo';
import PasswordGenerator from '../components/PasswordGenerator';
import PasswordCounter from '../components/PasswordCounter';

import { TAB_BAR_HEIGHT } from '../constants';

const WINDOW_HEIGHT = Dimensions.get('window').height;

export default function PasswordScreen(props) {
    return (
        <View style={styles.root}>
            <View style={styles.topContainer}>
                <Pressable onPress={() => props.navigation.goBack()}>
                    <AntDesign name='arrowleft' size={40} color='#000' />
                </Pressable>

                <PasswordInfo></PasswordInfo>

                <Pressable onPress={() => props.navigation.navigate('Edit')}>
                    <AntDesign name='edit' size={40} color='#000' />
                </Pressable>
            </View>
            
            <PasswordGenerator></PasswordGenerator>

            <PasswordCounter></PasswordCounter>
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
    topContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    }
});
