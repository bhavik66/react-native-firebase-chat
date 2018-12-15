import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import ProgressiveImage from './progressiveImage'
import styles from '../theme/component/conversation'

class Conversation extends Component {
  render() {
    const { avatarUrl, name, lastMessage } = this.props
    let _lastMessage = lastMessage
    if (lastMessage.length > 35) {
      _lastMessage = lastMessage.substring(0, 32) + '...'
    }

    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <ProgressiveImage
          source={avatarUrl}
          style={styles.avatar}
          thumbnail={require('../img/profile.png')}
        />
        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.lastMessage}>{_lastMessage}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

Conversation.defaultProps = {
  avatarUrl: require('../img/profile.png'),
  lastMessage: 'Message Here'
}

Conversation.propTypes = {
  name: PropTypes.string.isRequired,
  lastMessage: PropTypes.string,
  avatarUrl: PropTypes.object
}

export default Conversation
