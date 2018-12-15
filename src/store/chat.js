import firebase from 'react-native-firebase'
import { action, observable } from 'mobx'

export default class Chat {
  constructor() {
    this.database = firebase.database()
  }

  @observable
  userKey = ''

  @action
  async sendMessage(key, text) {
    const message = {
      sender: this.userKey,
      text: text,
      timeStamp: Math.floor(Date.now())
    }

    const messageKey = await this.database
      .ref('Messages')
      .child(key)
      .push(message).key

    await this.database
      .ref('Conversations')
      .child(key)
      .child('lastMsg')
      .set(messageKey)

    await this.database
      .ref('Conversations')
      .child(key)
      .child('lastTime')
      .set(message.timeStamp)
  }

  @action
  async onMessages(key, callback) {
    let messages = []

    this.database
      .ref('Messages')
      .child(key)
      .on('child_added', snapshot => {
        const message = {
          key: snapshot.key,
          ...snapshot.val()
        }

        messages.push(message)

        callback(messages)
      })
  }
}
