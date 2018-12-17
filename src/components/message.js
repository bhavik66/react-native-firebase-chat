import React, { Component } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import Svg, { Path } from 'react-native-svg'
import { moderateScale } from 'react-native-size-matters'
import { inject } from 'mobx-react'

import styles from '../theme/component/message'

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

  receiverMsgView = () => {
    return (
      <View style={[styles.item, styles.itemIn]}>
        <View
          style={[styles.balloon, { padding: 4, backgroundColor: '#e2e2e2' }]}
        >
          <Text style={{ color: '#333' }}>{this.props.text}</Text>
          <View style={[styles.arrowContainer, styles.arrowLeftContainer]}>
            <Svg
              style={styles.arrowLeft}
              width={moderateScale(15.5, 0.6)}
              height={moderateScale(17.5, 0.6)}
              viewBox="32.484 17.5 15.515 17.5"
              enable-background="new 32.485 17.5 15.515 17.5"
            >
              <Path
                d="M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"
                fill="#e2e2e2"
                x="0"
                y="0"
              />
            </Svg>
          </View>
        </View>
      </View>
    )
  }

  senderMsgView = () => {
    return (
      <View style={[styles.item, styles.itemOut]}>
        <View style={[styles.balloon, { backgroundColor: '#7264af' }]}>
          <Text style={{ color: '#fff' }}>{this.props.text}</Text>
          <View style={[styles.arrowContainer, styles.arrowRightContainer]}>
            <Svg
              style={styles.arrowRight}
              width={moderateScale(15.5, 0.6)}
              height={moderateScale(17.5, 0.6)}
              viewBox="32.485 17.5 15.515 17.5"
              enable-background="new 32.485 17.5 15.515 17.5"
            >
              <Path
                d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
                fill={'#7264af'}
                x="0"
                y="0"
              />
            </Svg>
          </View>
        </View>
      </View>
    )
  }
}

Message.propTypes = {
  text: PropTypes.string.isRequired
}
