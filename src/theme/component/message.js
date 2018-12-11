import { StyleSheet } from 'react-native'
import color from '../colors'

const style = StyleSheet.create({
  container: {
    margin: 4,
    marginRight: 8,
    marginLeft: 8
  },
  senderView: {
    backgroundColor: color.primary,
    alignSelf: 'flex-end',
    padding: 8,
    paddingRight: 12,
    paddingLeft: 12,
    borderRadius: 50
  },
  senderText: {
    color: color.white,
    fontSize: 14
  },
  receiverView: {
    backgroundColor: color.primary,
    alignSelf: 'flex-start',
    padding: 8,
    paddingRight: 12,
    paddingLeft: 12,
    borderRadius: 50
  },
  receiverText: {
    color: color.white,
    fontSize: 14
  }
})

export default style
