import { StyleSheet, Text, View, Dimensions } from 'react-native';
import Constants from 'expo-constants';

import PasswordList from '../components/PasswordList';
import PasswordListSorter from '../components/PasswordListSorter';

const WINDOW_WIDTH = Dimensions.get('window').width;
const SORTER_MARGIN = 10;
const SORTER_WIDTH = 100;
const passwords = [
    { id: 0, name: 'Item 0' },
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'The very long item 2' }
];

export default function PasswordListScreen(props) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
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
        width: "100%",
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
