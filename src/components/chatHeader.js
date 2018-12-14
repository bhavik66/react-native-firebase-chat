import React, { Component } from 'react'
import { View, Image, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

import colors from '../theme/colors'

export const ChatHeader = props => {
  return (
    <View
      style={{
        flexDirection: 'row',
        elevation: 10,
        backgroundColor: colors.primary,
        alignItems: 'center',
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 4,
        paddingBottom: 4
      }}
    >
      <TouchableOpacity onPress={() => props.nav.goBack()}>
        <Icon name={'arrow-back'} color={colors.white} size={28} />
      </TouchableOpacity>
      <Image
        source={{ uri: props.uri }}
        style={{
          width: 42,
          height: 42,
          borderRadius: 100,
          margin: 4,
          marginRight: 16,
          marginLeft: 16,
          borderWidth: 1
        }}
      />
      <Text style={{ color: colors.white, fontSize: 20, fontWeight: '500' }}>
        {props.title}
      </Text>
    </View>
  )
}
