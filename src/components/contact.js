import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import PropTypes from 'prop-types'

import ProgressiveImage from './progressiveImage'
import styles from '../theme/component/conversation'

class Contact extends Component {
  render() {
    const { avatarUrl, name } = this.props
    return (
      <TouchableOpacity
        style={[styles.container, { paddingTop: 8, paddingBottom: 8 }]}
        onPress={this.props.onPress}
      >
        <ProgressiveImage
          source={avatarUrl}
          style={styles.avatar}
          thumbnail={require('../img/profile.png')}
        />
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
  avatarUrl: PropTypes.object,
  lastMessage: PropTypes.string
}

export default Contact
