import { StyleSheet } from 'react-native'
import colors from '../colors'

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 8
  },
  textInput: {
    flexGrow: 1,
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 50,
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16
  },
  sendIcon: {
    margin: 8
  }
})

export default style
