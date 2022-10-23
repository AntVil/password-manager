import { StyleSheet, Image, Text, Dimensions, Pressable, useColorScheme } from 'react-native';

const ICON_SIZE = 50;
const ITEM_HORIZONTAL_MARGIN = 30;
const ITEM_VERTICAL_MARGIN = 5;
const LABEL_SIZE = 50;
const LABEL_HORIZONTAL_MARGIN = 10;

const WINDOW_WIDTH = Dimensions.get('window').width;

export default function PasswordListItem(props) {
    const theme = useColorScheme();

    return (
        <Pressable style={styles.item} onPress={() => props.navigation.navigate('Password')}>
            <Image
                style={styles.icon}
                source={{
                    uri: 'https://reactnative.dev/img/tiny_logo.png'
                }}
            />
            
            <Text numberOfLines={1} style={styles.title}>{props.children}</Text>
            
            <Text numberOfLines={1} style={styles.label}>{props.label}</Text>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    item: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        height: ICON_SIZE + 2 * ITEM_VERTICAL_MARGIN
    },
    icon: {
        width: ICON_SIZE,
        height: ICON_SIZE,
        borderRadius: ICON_SIZE / 2
    },
    title: {
        width: (WINDOW_WIDTH - ICON_SIZE - LABEL_SIZE) - 2 * ITEM_HORIZONTAL_MARGIN - 2 * LABEL_HORIZONTAL_MARGIN,
        textAlign: 'center',
        fontSize: 16
    },
    label: {
        width: LABEL_SIZE,
        marginVertical: LABEL_HORIZONTAL_MARGIN
    }
});
