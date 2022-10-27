import { useState } from 'react';
import { StyleSheet, Text, View, Dimensions, useColorScheme } from 'react-native';
import Constants from 'expo-constants';

import PasswordList from '../components/PasswordList';
import PasswordListSorter from '../components/PasswordListSorter';
import PasswordStorage from '../components/PasswordStorage';

import { THEME_COLOR_0, THEME_COLOR_1 } from '../constants';

const WINDOW_WIDTH = Dimensions.get('window').width;
const SORTER_MARGIN = 10;
const SORTER_WIDTH = 100;

export default function PasswordListScreen(props) {
    const theme = useColorScheme();

    const [passwords, setPasswords] = useState([]);
    
    PasswordStorage.getPasswords().then(
        (p) => setPasswords(p)
    )

    return (
        <View style={{...styles.root, backgroundColor: THEME_COLOR_1[theme]}}>
            <View style={{...styles.header, backgroundColor: THEME_COLOR_0[theme]}}>
                <PasswordListSorter style={styles.sorter}></PasswordListSorter>

                <View style={styles.title}>
                    <Text style={styles.titleText}>Passwords</Text>
                </View>
            </View>
            
            <PasswordList passwords={passwords} navigation={props.navigation}></PasswordList>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#FFF',
        paddingTop: Constants.statusBarHeight,
        paddingBottom: 10
    },
    sorter: {
        width: SORTER_WIDTH,
        marginHorizontal: SORTER_MARGIN,
        textAlign: 'center'
    },
    title: {
        width: WINDOW_WIDTH - 2 * SORTER_WIDTH - 4 * SORTER_MARGIN,
        marginRight: SORTER_WIDTH,
        justifyContent: 'center',
        alignItems: 'center'
    },
    titleText: {
        fontSize: 20,
        paddingVertical: 8
    },
    root: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
