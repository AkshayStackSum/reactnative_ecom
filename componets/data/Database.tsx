import AsyncStorage from "@react-native-async-storage/async-storage";

export const setAddressData = async (address) => {
  try {
    await AsyncStorage.setItem(
      'address',
      address,
    );
  } catch (error) {
    // Error saving data
  }
};

export const getAddress = async () => {
  try {
    const value = await AsyncStorage.getItem('address')
    if(value !== null) {
      // value previously stored
      return value
    }else{
      return ''
    }
  } catch(e) {
    // error reading value
  }
}


