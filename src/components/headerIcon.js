import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/MaterialIcons'
import colors from '../theme/colors'

const HeaderIcon = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View style={[{ margin: 8 }, props.style]}>
        <Icon name={props.name} size={24} color={colors.white} />
      </View>
    </TouchableOpacity>
  )
}

export default HeaderIcon
