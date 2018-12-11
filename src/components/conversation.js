import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import styles from '../theme/component/conversation'

class Conversation extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { avatarUrl, name, lastMessage } = this.props
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Image source={avatarUrl} style={styles.avatar} />
        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.lastMessage}>{lastMessage}</Text>
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
