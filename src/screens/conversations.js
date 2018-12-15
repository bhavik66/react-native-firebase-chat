import React, { Component } from 'react'
import {
  View,
  FlatList,
  ActivityIndicator,
  TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { inject, observer } from 'mobx-react'

import Conversation from '../components/conversation'
import style from '../theme/index'
import colors from '../theme/colors'

@inject('Conversation')
@observer
export default class Conversations extends Component {
  componentWillMount() {
    this.props.Conversation.fetchConversations()
  }

  render() {
    return (
      <View style={style.container}>
        {this.props.Conversation.isLoading ? this.loadView() : this.listView()}
        <TouchableOpacity
          style={style.addButton}
          onPress={() => this.props.navigation.navigate('Contact')}
        >
          <Icon size={24} name={'message'} color={colors.white} />
        </TouchableOpacity>
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
          data={this.props.Conversation.conversations}
          keyExtractor={(item, index) => `${index}`}
          renderItem={({ item }) => (
            <Conversation
              name={item.name}
              avatarUrl={{ uri: item.avatarSource }}
              onPress={() =>
                this.props.navigation.navigate('Chat', {
                  conversationKey: item.key,
                  imageURL: item.avatarSource,
                  title: item.name
                })
              }
              lastMessage={item.lastMessage}
            />
          )}
        />
      </View>
    )
  }
}
