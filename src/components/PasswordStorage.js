import AsyncStorage from '@react-native-async-storage/async-storage';

export default class PasswordStorage {
    static async addPassword(password){
        let store = this.getPasswords();
        
        // TODO: check if password not present
        store.push(password);
        await AsyncStorage.setItem('passwords', JSON.stringify(store));
    }

    static async getPasswords() {
        return (await AsyncStorage.getItem('passwords')) != null ? JSON.parse(jsonValue) : [];
    }
}
