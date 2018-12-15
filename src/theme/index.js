import { StyleSheet } from 'react-native'
import colors from './colors'

const style = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 56
  },
  content: {
    margin: 24
  },
  verifyText: {
    fontSize: 24,
    color: colors.text,
    fontWeight: 'bold'
  },
  smsText: {
    fontSize: 18,
    color: 'rgb(91,82,121)',
    marginTop: 12
  },
  signinText: {
    marginTop: 24
  },
  termsText: {
    color: colors.primary,
    textDecorationLine: 'underline'
  },
  nextButton: {
    backgroundColor: colors.primary,
    padding: 14,
    paddingRight: 22,
    paddingLeft: 22,
    marginTop: 46,
    borderRadius: 100,
    alignSelf: 'center',
    elevation: 8
  },
  footerButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end'
  },
  footerButtonText: {
    color: colors.white,
    fontSize: 20,
    fontWeight: '500'
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
    right: 24,
    elevation: 10
  }
})

export default style
