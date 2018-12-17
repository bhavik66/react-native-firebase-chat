import firebase from 'react-native-firebase'
import { action, observable } from 'mobx'

export const FETCH_CONVERSATION = 'FETCH_CONVERSATION'

export default class Conversations {
  constructor() {
    this.database = firebase.database()
  }

  @observable
  key = ''
  @observable
  conversations = null
  @observable
  isLoading = false

  @action
  fetchConversations() {
    this.isLoading = true
    this.database
      .ref('Conversations')
      .orderByChild(this.key)
      .equalTo(true)
      .on('value', snapshot => {
        let conversations = []
        let promises = []

        snapshot.forEach(item => {
          promises.push(this.loadUserData(item, this.key))
        })

        Promise.all(promises).then(data => {
          data.forEach(item => conversations.push(item))
          conversations.sort((a, b) => {
            return b.lastTime - a.lastTime
          })
          this.conversations = conversations
          this.isLoading = false
        })
      })
  }

  loadUserData(item, userkey) {
    return new Promise(async resolve => {
      const lastMsg = await this.database
        .ref('Messages')
        .child(item.key)
        .child(item.child('lastMsg').val())
        .once('value')

      item.forEach(async subItem => {
        if (subItem.val() === true && subItem.key !== userkey) {
          const user = await this.database
            .ref('Users')
            .child(subItem.key)
            .once('value')
          const data = {
            key: item.key,
            lastTime: item.val().lastTime,
            lastMessage: lastMsg.val() ? lastMsg.val().text : '',
            ...user.val()
          }
          resolve(data)
        }
      })
    })
  }
}
