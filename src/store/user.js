import { observable, action } from 'mobx'
import firebase from 'react-native-firebase'

import { getFileName } from '../utils/utils'

class User {
  @observable
  key = ''
  @observable
  name = ''
  @observable
  avatarSource = ''
  @observable
  fileName = ''

  phoneNumber = ''
  confirmResult = null

  @action
  async auth(phoneNumber) {
    this.phoneNumber = phoneNumber
    this.confirmResult = await firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber)
    if (this.confirmResult.verificationId) {
      return true
    } else {
      this.confirmResult = null
      return false
    }
  }

  @action
  async verify(verificationCode) {
    if (this.confirmResult !== null) {
      const result = await this.confirmResult.confirm(verificationCode)
      if (result._user) return true
      else {
        return false
      }
    }
  }

  @action
  async checkForExisting(callback) {
    let key = undefined
    const database = firebase.database()
    const user = {
      phoneNumber: '',
      name: '',
      avatar: '',
      avatarRef: ''
    }
    user.phoneNumber = this.phoneNumber
    user.name = this.name
    let snapshot

    if (!this.key) {
      snapshot = await database
        .ref('PhoneNumber')
        .once('value', this.phoneNumber)
      if (snapshot.val() != null) {
        key = snapshot.val()[this.phoneNumber]
        if (key === undefined) return
      }
    } else {
      key = this.key
    }
    const userSnapshot = await database
      .ref('Users')
      .child(key)
      .once('value')
    const _user = userSnapshot.val()
    callback(_user)
  }

  @action
  async signUpUser(isUpdateName, isUpdateImage) {
    try {
      this.checkForExisting(_user => {
        if (isUpdateImage) {
          await firebase
            .storage()
            .ref(_user.avatarRef)
            .delete()
          const rImage = await firebase
            .storage()
            .ref('/profilePics/' + getFileName(this.fileName))
            .putFile(imageUri)
          user.avatar = rImage.downloadURL
          user.avatarRef = rImage.ref
        }
      })

      if (key !== undefined) {
        await database
          .ref('Users')
          .child(key)
          .set(user)
      } else {
        key = await database.ref('Users').push(user).key
        await firebase
          .database()
          .ref('PhoneNumber')
          .child(this.phoneNumber)
          .set(key)
      }

      // dispatch({ type: SIGNUP_SUCCESS, key })
      return Promise.resolve(key)
    } catch (error) {
      // dispatch({ type: ERROR, message: error })
      return Promise.reject()
    }
  }
}

export default User
