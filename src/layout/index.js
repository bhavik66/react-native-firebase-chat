import React, { Component } from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'

import Test from '../screens/test'
import Splash from '../screens/splash'
import Register from '../screens/register'
import Profile from '../screens/profile'
import Conversation from '../screens/conversations'
import Contacts from '../screens/contacts'
import Chat from '../screens/chat'
import HeaderIcon from '../components/headerIcon'

const AppNavigator = createStackNavigator({
  // Test: {
  //   screen: Test
  // },
  Splash: {
    screen: Splash,
    navigationOptions: {
      header: null
    }
  },
  Register: {
    screen: Register,
    navigationOptions: {
      header: null
    }
  },
  Profile: {
    screen: Profile,
    navigationOptions: {
      header: null
    }
  },
  Conversation: {
    screen: Conversation,
    navigationOptions: ({ navigation }) => {
      return {
        title: 'Conversation',
        headerRight: (
          <HeaderIcon
            name={'person'}
            style={{ marginRight: 16 }}
            onPress={() => navigation.navigate('Profile')}
          />
        )
      }
    }
  },
  Contact: {
    screen: Contacts,
    navigationOptions: {
      title: 'Contacts'
    }
  },
  Chat: {
    screen: Chat
  }
})

export default createAppContainer(AppNavigator)
