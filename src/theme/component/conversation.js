import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    height: 78,
    flexDirection: 'row'
  },
  avatar: {
    width: 56,
    height: 56,
    marginLeft: 16,
    marginRight: 16,
    borderRadius: 100,
    alignSelf: 'center'
  },
  content: {
    margin: 12,
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#333'
  },
  lastMessage: {
    marginBottom: 4
  }
})

export default styles
