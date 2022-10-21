import { Text, Pressable, StyleSheet, View } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function PasswordCounter(props) {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => console.log("minus")}>
                <AntDesign name="minuscircleo" size={40} color="black" />
            </Pressable>

            <Text style={styles.counter}>0</Text>

            <Pressable onPress={() => console.log("plus")}>
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
    counter: {
        fontSize: 30
    }
});
