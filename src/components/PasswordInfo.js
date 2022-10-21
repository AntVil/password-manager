import { Text, Image, StyleSheet, Dimensions, View } from 'react-native';

const WINDOW_WIDTH = Dimensions.get('window').width;
const ICON_SIZE = WINDOW_WIDTH / 2;

export default function PasswordInfo(props) {
    return (
        <View style={styles.container}>
            <Image
                style={styles.icon}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png'
                }}
            />
            <Text style={styles.title}>Item</Text>
            <Text style={styles.label}>Label</Text>
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
