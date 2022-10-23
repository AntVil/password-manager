import { useState } from 'react';
import { StyleSheet, View, useColorScheme } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

export default function PasswordListSorter(props){
    const theme = useColorScheme();

    const ITEMS = [
        { label: 'sort name', value: 'name' },
        { label: 'sort label', value: 'label' }
    ];

    const [sorting, setSorting] = useState(ITEMS[0]);

    return (
        <View
            style={props.style}
        >
            <RNPickerSelect
                onValueChange={(value) => setSorting(value)}
                items={ITEMS}
                value={sorting}
                style={styles.select}
                placeholder={{ }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#EEE'
    },
    select: {
        placeholder: {
            fontSize: 16,
            textAlign: 'center'
        },
        inputIOS: {
            paddingTop: 8,
            paddingBottom: 8,
            fontSize: 16,
            textAlign: 'center'
        },
        inputAndroid: {
            color: 'white',
            textAlign: 'center'
        }
    }
});
  