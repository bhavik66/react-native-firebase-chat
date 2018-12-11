import React, { Component } from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

import PropTypes from 'prop-types'

import styles from '../theme/component/conversation'

class Contact extends Component {
  render() {
    const { avatarUrl, name } = this.props
    return (
      <TouchableOpacity style={styles.container} onPress={this.props.onPress}>
        <Image source={avatarUrl} style={styles.avatar} />
        <View style={styles.content}>
          <Text style={styles.name}>{name}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

Contact.defaultProps = {
  avatarUrl: require('../img/profile.png')
}

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  lastMessage: PropTypes.string
}

export default Contact
