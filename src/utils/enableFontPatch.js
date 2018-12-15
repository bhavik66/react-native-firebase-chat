const React = require('react')
const { Platform, Text } = require('react-native')

const defaultFontFamily = {
  ...Platform.select({
    android: { fontFamily: 'Roboto' }
  })
}

const oldRender = Text.render
Text.render = function(...args) {
  const origin = oldRender.call(this, ...args)
  return React.cloneElement(origin, {
    style: [defaultFontFamily, origin.props.style]
  })
}
