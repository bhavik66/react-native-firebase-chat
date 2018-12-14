import React, { Component } from 'react'
import { View, FlatList, ActivityIndicator } from 'react-native'

import Contact from '../components/contact'
import style from '../theme/index'
import { inject, observer } from 'mobx-react'

@inject('Contact')
@observer
export default class Contacts extends Component {
  constructor(props) {
    super(props)
    this.props.Contact.fetchContacts()
  }

  render() {
    return (
      <View style={style.container}>
        {this.props.Contact.isLoading ? this.loadView() : this.listView()}
      </View>
    )
  }

  loadView() {
    return (
      <View style={style.load}>
        <ActivityIndicator size={'large'} />
      </View>
    )
  }

  listView() {
    return (
      <View>
        <FlatList
          data={this.props.Contact.contacts}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => (
            <Contact
              name={item.name}
              avatarUrl={{ uri: item.avatarSource }}
              onPress={() =>
                this.props.Contact.startConversation(item.key).then(key => {
                  this.props.navigation.replace('Chat', {
                    conversationKey: key,
                    title: item.name
                  })
                })
              }
            />
          )}
        />
      </View>
    )
  }
}
