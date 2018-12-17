import React, { Component } from 'react'
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  StyleSheet
} from 'react-native'
import ImagePicker from 'react-native-image-picker'
import { inject, observer } from 'mobx-react'

import ProgressiveImage from '../components/progressiveImage'
import style from '../theme/index'
import colors from '../theme/colors'
import { saveKey } from '../utils/db'

@inject('User')
@observer
export default class Profile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: false,
      isFromFile: false
    }
  }

  componentDidMount() {
    this.props.User.getCurrentUser()
  }

  render() {
    return (
      <View style={[style.container, _style.container]}>
        <TouchableOpacity
          style={[_style.avatar, { backgroundColor: '#fff', elevation: 15 }]}
          onPress={this.selectAvatar}
        >
          <ProgressiveImage
            style={[_style.avatar]}
            source={
              this.props.User.avatarSource !== ''
                ? {
                    uri:
                      (this.state.isFromFile ? 'file:///' : '') +
                      this.props.User.avatarSource
                  }
                : require('../img/profile.png')
            }
            thumbnail={require('../img/profile.png')}
          />
        </TouchableOpacity>
        <TextInput
          style={_style.textInput}
          underlineColorAndroid={'transparent'}
          placeholder={'Name'}
          onChangeText={text => (this.props.User.name = text)}
          value={this.props.User.name}
        />
        {this.state.isLoading ? (
          <ActivityIndicator
            size={'large'}
            color={colors.primary}
            style={{ margin: 24 }}
          />
        ) : (
          <View
            style={{
              backgroundColor: colors.primary,
              alignSelf: 'center',
              padding: 8,
              paddingRight: 32,
              paddingLeft: 32,
              borderRadius: 6
            }}
          >
            <TouchableOpacity onPress={this.onSaveOrUpdate}>
              <Text style={[style.footerButtonText, { fontWeight: '500' }]}>
                Continue
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    )
  }

  onSaveOrUpdate = () => {
    this.setState({ isLoading: true })
    if (this.props.User.key === '') {
      this.props.User.save().then(userKey => {
        saveKey(userKey).then(() => {
          this.props.navigation.replace('Splash')
        })
      })
    } else {
      this.props.User.update().then(() => {
        saveKey(this.props.User.key).then(() => {
          this.props.navigation.replace('Splash')
        })
      })
    }
  }

  selectAvatar = () => {
    ImagePicker.showImagePicker(null, response => {
      if (response.didCancel) {
        // console.log('User cancelled image picker')
      } else if (response.error) {
        // console.log('ImagePicker Error: ', response.error)
      } else if (response.customButton) {
        // console.log('User tapped custom button: ', response.customButton)
      } else {
        this.props.User.avatarSource = response.path
        this.props.User.fileName = response.fileName
        this.setState({ isFromFile: true + 9190 })
      }
    })
  }
}

const _style = StyleSheet.create({
  container: {
    justifyContent: 'center'
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
    alignSelf: 'center'
  },
  textInput: {
    backgroundColor: colors.white,
    margin: 32,
    padding: 8,
    borderColor: colors.border,
    borderRadius: 6,
    textAlign: 'center',
    fontSize: 18,
    elevation: 6
  }
})
