import { StyleSheet } from 'react-native'
import { moderateScale } from 'react-native-size-matters'

const style = StyleSheet.create({
  item: {
    marginVertical: moderateScale(7, 2),
    flexDirection: 'row'
  },
  itemIn: {
    marginLeft: 20
  },
  itemOut: {
    alignSelf: 'flex-end',
    marginRight: 20
  },
  balloon: {
    maxWidth: moderateScale(250, 2),
    paddingHorizontal: moderateScale(10, 2),
    paddingTop: moderateScale(5, 2),
    paddingBottom: moderateScale(7, 2),
    borderRadius: 20
  },
  arrowContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
    flex: 1
  },
  arrowLeftContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-start'
  },

  arrowRightContainer: {
    justifyContent: 'flex-end',
    alignItems: 'flex-end'
  },

  arrowLeft: {
    left: moderateScale(-6, 0.5)
  },

  arrowRight: {
    right: moderateScale(-6, 0.5)
  }
})

export default style
