import { Pressable, StyleSheet, Dimensions, View, useColorScheme } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const WINDOW_WIDTH = Dimensions.get('window').width;
const BUTTON_SIZE = WINDOW_WIDTH / 2;

export default function CreatePassword(props) {
    const theme = useColorScheme();

    return (
        <View style={{...styles.container, ...props.style}}>
            <Pressable style={styles.button} onPress={() => console.log('createPassword')}>
                <AntDesign name='plus' size={BUTTON_SIZE * 2 / 3} color='#000' />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        maxHeight: BUTTON_SIZE,
        marginHorizontal: (WINDOW_WIDTH - BUTTON_SIZE) / 2
    },
    button: {
        maxWidth: BUTTON_SIZE,
        maxHeight: BUTTON_SIZE,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#333',
        borderRadius: BUTTON_SIZE / 2,
        aspectRatio: 1
    }
});
