import { StyleSheet, Dimensions } from 'react-native'
import colors from './colors'

const style = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    margin: 24
  },
  verifyText: {
    fontSize: 22,
    color: colors.text,
    fontWeight: 'bold'
  },
  smsText: {
    fontSize: 18,
    color: colors.text,
    marginTop: 12
  },
  signinText: {
    marginTop: 24
  },
  termsText: {
    color: colors.primary,
    textDecorationLine: 'underline'
  },
  footer: {
    backgroundColor: colors.primary,
    padding: 12,
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  footerButtonText: {
    color: colors.white,
    fontSize: 16
  },
  textInput: {
    marginTop: 32,
    padding: 8,
    borderColor: colors.border,
    borderWidth: 0.5
  },
  load: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  addButton: {
    padding: 12,
    borderRadius: 50,
    backgroundColor: colors.primary,
    position: 'absolute',
    bottom: 24,
    right: 24
  }
})

export default style
