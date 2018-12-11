import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

import styles from '../theme/component/message'
import { inject } from 'mobx-react'

@inject('Chat')
export default class Message extends Component {
  render() {
    return (
      <View style={styles.container}>
        {this.props.sender === this.props.Chat.userKey
          ? this.senderMsgView()
          : this.receiverMsgView()}
      </View>
    )
  }

  senderMsgView = () => {
    return (
      <View style={styles.senderView}>
        <Text style={styles.senderText}>{this.props.text}</Text>
      </View>
    )
  }

  receiverMsgView = () => {
    return (
      <View style={styles.receiverView}>
        <Text style={styles.receiverText}>{this.props.text}</Text>
      </View>
    )
  }
}

Message.propTypes = {
  text: PropTypes.string.isRequired
}
