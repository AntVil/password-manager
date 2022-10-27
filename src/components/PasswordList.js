import { FlatList, StyleSheet, View, useColorScheme } from 'react-native';

import PasswordListItem from './PasswordListItem';

export default function PasswordList(props) {
    const theme = useColorScheme();

    return (
        <FlatList
            style={styles.list}
            data={props.passwords}
            renderItem={({ item }) => (
                <PasswordListItem key={item.id} navigation={props.navigation} label={item.label}>{item.name}</PasswordListItem>
            )}
            ItemSeparatorComponent={() => (
                <View
                style={{
                    height: StyleSheet.hairlineWidth,
                    backgroundColor: '#CCC',
                }}
                />
            )}
        />
    );
}

const styles = StyleSheet.create({
    list: {
        width: '100%'
    }
});
