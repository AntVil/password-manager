import { useState } from 'react';
import { Text, Pressable, StyleSheet, View, Dimensions } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const WINDOW_WIDTH = Dimensions.get('window').width;

export default function PasswordCounter(props) {
    const [count, setCount] = useState(0);

    return (
        <View style={styles.container}>
            <Pressable onPress={() => setCount(Math.max(count - 1, 0))}>
                <AntDesign name="minuscircleo" size={40} color="black" />
            </Pressable>
            
            <View style={styles.counterContainer}>
                <Text style={styles.counter}>{count}</Text>
            </View>

            <Pressable onPress={() => setCount(count + 1)}>
                <AntDesign name="pluscircleo" size={40} color="black" />
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        paddingHorizontal: 20,
        paddingVertical: 20
    },
    counterContainer: {
        width: WINDOW_WIDTH / 2
    },
    counter: {
        fontSize: 30,
        textAlign: 'center'
    }
});
