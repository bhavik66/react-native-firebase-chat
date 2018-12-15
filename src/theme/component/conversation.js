import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    // height: 78,
    flexDirection: 'row',
    margin: 16,
    marginTop: 2,
    marginBottom: 10,
    backgroundColor: '#fff',
    elevation: 10,
    borderRadius: 8,
    paddingTop: 4,
    paddingBottom: 4
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
    marginLeft: 4,
    justifyContent: 'space-between'
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 4,
    color: '#333'
  },
  lastMessage: {
    marginBottom: 4,
    flex: 1,
    flexWrap: 'wrap'
  }
})

export default styles
