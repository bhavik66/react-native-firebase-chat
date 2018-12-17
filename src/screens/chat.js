import React, { Component } from 'react'
import { View, FlatList } from 'react-native'

import MsgBar from '../components/msgbar'
import Message from '../components/message'
import { observer, inject } from 'mobx-react'

@inject('Chat')
@observer
export default class Chat extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      messages: []
    }
    this.initY = 0
    this.scrolledY = 0
    this.conversationKey = this.props.navigation.state.params.conversationKey
  }

  componentDidMount() {
    this.props.Chat.onMessages(this.conversationKey, messages => {
      if (messages !== null) {
        this.setState({ messages: messages })
      }
    })
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          ref={instance => (this._chats = instance)}
          style={{ flexGrow: 1 }}
          data={this.state.messages}
          renderItem={({ item }) => (
            <Message text={item.text} sender={item.sender} />
          )}
          keyExtractor={(item, index) => item.key}
          onContentSizeChange={() =>
            this._chats.scrollToEnd({ animated: true })
          }
          // onScrollBeginDrag={this.onScrollBeginDrag}
          // onScrollEndDrag={this.onScrollEndDrag}
        />
        <MsgBar conversationKey={this.conversationKey} />
      </View>
    )
  }

  onScrollBeginDrag = event => {
    this.initY = event.nativeEvent.contentOffset.y
  }

  onScrollEndDrag = event => {
    this.scrolledY = event.nativeEvent.contentOffset.y
  }
}
