import { StyleSheet, Text, View } from 'react-native';

export default function AddPasswordScreen() {
  return (
    <View style={styles.container}>
      <Text>Add Password</Text>
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
