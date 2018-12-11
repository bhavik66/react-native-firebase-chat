import { AsyncStorage } from 'react-native'

export function saveKey(key) {
  return AsyncStorage.setItem('USER_KEY', key)
}

export function loadKey(callback) {
  return AsyncStorage.getItem('USER_KEY', callback)
}
