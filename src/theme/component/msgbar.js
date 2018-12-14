import { StyleSheet } from 'react-native'
import colors from '../colors'

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: 100,
    elevation: 2,
    backgroundColor: colors.white,
    margin: 8
  },
  textInput: {
    flexGrow: 1,
    padding: 8,
    paddingLeft: 16,
    paddingRight: 16
  },
  sendIcon: {
    margin: 4,
    borderRadius: 100,
    backgroundColor: colors.primary,
    padding: 8
  }
})

export default style
