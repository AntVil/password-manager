import { Text, StyleSheet, Dimensions, View, useColorScheme } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const CELL_WIDTH = WINDOW_WIDTH / 3;
const GRID_HORIZONTAL_MARGIN = WINDOW_WIDTH / 10;

export default function PasswordSettings(props) {
    const theme = useColorScheme();

    return (
        <View style={styles.container}>
            <Text style={styles.cell}>Settings</Text>
            <Text style={styles.cell}>Settings</Text>
            
            <Text style={styles.cell}>Settings</Text>
            <Text style={styles.cell}>Settings</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        justifyContent: 'space-between',
        padding: GRID_HORIZONTAL_MARGIN
    },
    cell: {
        width: CELL_WIDTH,
        marginHorizontal: (WINDOW_WIDTH - 2 * GRID_HORIZONTAL_MARGIN - 2 * CELL_WIDTH) / 4
    }
});
