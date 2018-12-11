import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'

const HeaderIcon = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[{ margin: 8 }, props.style]}>
        <Icon name={props.name} size={24} />
      </View>
    </TouchableOpacity>
  )
}

export default HeaderIcon
