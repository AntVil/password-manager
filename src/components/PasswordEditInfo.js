import { Image, StyleSheet, Dimensions, View, useColorScheme, TextInput } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const ICON_SIZE = WINDOW_WIDTH / 2;

export default function PasswordEditInfo(props) {
    const theme = useColorScheme()

    return (
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png'
                }}
            />
            <TextInput style={styles.title} onChangeText={(s) => console.log(`Item text ${s}`)}>Item</TextInput>
            <TextInput style={styles.label} onChangeText={(s) => console.log(`Item text ${s}`)}>Label</TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    icon: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        borderRadius: ICON_SIZE / 2,
        marginTop: 30
    },
    title: {
        fontSize: 30
    },
    label: {
        fontSize: 20,
    }
});
