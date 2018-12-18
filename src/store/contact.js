import firebase from 'react-native-firebase'
import { action, observable } from 'mobx'

export const FETCH_CONTACTS = 'FETCH_CONTACTS'
export const START_CONVERSATION = 'START_CONVERSATION'

export default class Contact {
  constructor() {
    this.database = firebase.database()
  }

  @observable
  key = ''
  @observable
  contacts = null
  @observable
  isLoading = false

  @action
  async fetchContacts() {
    const snapshot = await this.database.ref('Users').once('value')
    let contacts = []
    snapshot.forEach(item => {
      if (this.key !== item.key) {
        const contact = {
          key: item.key,
          ...item.val()
        }
        contacts.push(contact)
      }
    })
    this.contacts = contacts
    this.isLoading = false
  }

  @action
  async startConversation(receiver) {
    try {
      let key = null

      let Users = {}
      Users[this.key] = true
      Users[receiver] = true

      const snapshot = await this.database
        .ref('Conversations')
        .orderByChild(this.key)
        .equalTo(true)
        .once('value')

      snapshot.forEach(item => {
        item.forEach(subItem => {
          if (subItem.key === receiver) {
            key = item.key
            return
          }
        })
      })

      if (key === null)
        key = await this.database.ref('Conversations').push(Users).key

      return Promise.resolve(key)
    } catch (error) {
      return Promise.reject(error)
    }
  }
}
