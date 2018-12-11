import React, { Component } from 'react'
import { View, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import style from '../theme/component/msgbar'
import colors from '../theme/colors'
import { inject } from 'mobx-react'

@inject('Chat')
export default class MsgBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }
  }

  render() {
    return (
      <View style={[style.container, this.props.style]}>
        <TextInput
          style={style.textInput}
          underlineColorAndroid={'transparent'}
          onChangeText={text => this.setState({ text: text })}
          value={this.state.text}
        />
        <TouchableOpacity style={style.sendIcon} onPress={this.onSend}>
          <Icon name={'send'} color={colors.primary} size={32} />
        </TouchableOpacity>
      </View>
    )
  }

  onSend = () => {
    const { conversationKey } = this.props
    this.props.Chat.sendMessage(conversationKey, this.state.text)
    this.setState({ text: '' })
  }
}
