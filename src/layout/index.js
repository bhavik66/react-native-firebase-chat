import React from 'react'
import { createStackNavigator, createAppContainer } from 'react-navigation'
import { fromRight, fromTop } from 'react-navigation-transitions'

import Splash from '../screens/splash'
import Register from '../screens/register'
import Verify from '../screens/verify'
import Profile from '../screens/profile'
import Conversation from '../screens/conversations'
import Contacts from '../screens/contacts'
import Chat from '../screens/chat'
import { Header } from '../components/header'
import { ChatHeader } from '../components/chatHeader'

const handleCustomTransition = ({ scenes }) => {
  if (scenes[scenes.length - 1].route.routeName === 'Contact') return null
  if (scenes[scenes.length - 1].route.routeName === 'Profile')
    return fromTop(800)
  return fromRight(500)
}

const AppNavigator = createStackNavigator(
  {
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
    Verify: {
      screen: Verify,
      navigationOptions: {
        header: null
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: ({ navigation }) => {
        return {
          header: <Header nav={navigation} title={'Profile'} absolute back />
        }
      }
    },
    Conversation: {
      screen: Conversation,
      navigationOptions: ({ navigation }) => {
        return {
          header: (
            <Header
              nav={navigation}
              title={'Conversations'}
              rightIcon={'person'}
              absolute
            />
          )
        }
      }
    },
    Contact: {
      screen: Contacts,
      navigationOptions: ({ navigation }) => {
        return {
          header: <Header nav={navigation} title={'Contacts'} back absolute />
        }
      }
    },
    Chat: {
      screen: Chat,
      navigationOptions: ({ navigation }) => {
        return {
          header: (
            <ChatHeader
              nav={navigation}
              uri={navigation.state.params.imageURL}
              title={navigation.state.params.title}
            />
          )
        }
      }
    }
  },
  {
    transitionConfig: nav => handleCustomTransition(nav)
  }
)

export default createAppContainer(AppNavigator)
