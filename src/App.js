import React from 'react'
import { View, StatusBar } from 'react-native'

import { Provider } from 'mobx-react'

import AppNavigator from './layout/index'
import colors from './theme/colors'
import stores from './store'
import './utils/enableFontPatch'

export default class Root extends React.Component {
  render() {
    return (
      <Provider {...stores}>
        <View style={{ flex: 1 }}>
          <StatusBar
            barStyle={'light-content'}
            backgroundColor={colors.primary}
          />
          <AppNavigator />
        </View>
      </Provider>
    )
  }
}
