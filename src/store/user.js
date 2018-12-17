import { observable, action } from 'mobx'
import firebase from 'react-native-firebase'

import { getFileName } from '../utils/utils'

class User {
  constructor() {
    this.database = firebase.database()
  }

  @observable
  key = ''
  @observable
  name = ''
  @observable
  avatarSource = ''
  @observable
  avatarRef = ''
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
    return false
  }

  @action
  async getCurrentUser() {
    let key = undefined
    if (this.key) {
      key = this.key
    } else {
      const snapshot = await firebase
        .database()
        .ref('PhoneNumber')
        .once('value', this.phoneNumber)
      if (snapshot.val() !== null) {
        key = snapshot.val()[this.phoneNumber]
        if (key === undefined) return
      }
    }
    const userSnapshot = await this.database
      .ref('Users')
      .child(key)
      .once('value')
    const _user = userSnapshot.val()
    if (_user) {
      this.name = _user.name
      this.avatarSource = _user.avatarSource
      this.avatarRef = _user.avatarRef
      this.phoneNumber = _user.phoneNumber
      this.key = key
    }
  }

  @action
  async save() {
    const imgData = await this.imageUpload()
    const user = {
      name: this.name,
      phoneNumber: this.phoneNumber,
      avatarSource: imgData.avatarSource,
      avatarRef: imgData.avatarRef
    }

    const key = await this.database.ref('Users').push(user).key
    await this.database
      .ref('PhoneNumber')
      .child(this.phoneNumber)
      .set(key)
    return key
  }

  @action
  async update() {
    const imgData = await this.imageUpload()
    const user = {
      name: this.name,
      phoneNumber: this.phoneNumber,
      avatarSource: imgData.avatarSource,
      avatarRef: imgData.avatarRef
    }
    await this.database
      .ref('Users')
      .child(this.key)
      .set(user)
  }

  async imageUpload() {
    let data = {
      avatarSource: this.avatarSource,
      avatarRef: this.avatarRef
    }
    if (this.fileName !== '') {
      if (this.avatarRef !== '') {
        await firebase
          .storage()
          .ref(this.avatarRef)
          .delete()
      }
      const rImage = await firebase
        .storage()
        .ref('/profilePics/' + getFileName(this.fileName))
        .putFile(this.avatarSource)
      data = {
        avatarSource: rImage.downloadURL,
        avatarRef: rImage.ref
      }
    }
    return data
  }
}

export default User
