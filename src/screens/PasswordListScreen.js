import { StyleSheet, Text, View } from 'react-native';

import PasswordList from '../components/PasswordList';

const passwords = [
    {
        id: 0,
        name: 'Item 0'
    },
    {
        id: 1,
        name: 'Item 1'
    },
    {
        id: 2,
        name: 'The very long item 2'
    }
];

export default function PasswordListScreen() {
  return (
    <View style={styles.container}>
      <PasswordList passwords={passwords}></PasswordList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
