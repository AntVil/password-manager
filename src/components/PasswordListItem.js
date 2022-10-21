import { StyleSheet, Image, Text, Dimensions, Pressable } from 'react-native';

const ICON_SIZE = 50;
const ITEM_HORIZONTAL_PADDING = 30;
const ITEM_VERTICAL_PADDING = 5;
const WINDOW_WIDTH = Dimensions.get('window').width;

export default function PasswordListItem(props) {
    return (
        <Pressable style={styles.item} onPress={() => props.navigation.navigate('Password')}>
            <Image
                style={styles.icon}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png'
                }}
            />
            <Text style={styles.text}>{props.children}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: ICON_SIZE + 2 * ITEM_VERTICAL_PADDING
    },
    icon: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        borderRadius: ICON_SIZE / 2
    },
    text: {
        width: (WINDOW_WIDTH - ICON_SIZE) - 2 * ITEM_HORIZONTAL_PADDING,
        textAlign: 'center',
        fontSize: 16
    }
});
