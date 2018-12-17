import React, { Component } from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Dimensions,
  Image,
  BackHandler
} from 'react-native'
import { inject } from 'mobx-react'
import * as Animatable from 'react-native-animatable'

import style from '../theme/index'

@inject('User')
export default class Verify extends Component {
  constructor(props) {
    super(props)
    this.state = {
      verificationCode: '123456'
    }
    this.screenWidth = Dimensions.get('window').width
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.handleBackPress)
  }

  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress)
  }

  handleBackPress = () => {
    this.content.flipOutX(400).then(() => {
      this.props.navigation.replace('Register')
    })
    return true
  }

  render() {
    return (
      <View style={style.container}>
        <Image
          source={require('../img/register-bg.png')}
          style={{
            width: this.screenWidth,
            position: 'absolute',
            bottom: 0
          }}
        />
        <Animatable.View
          ref={inst => (this.content = inst)}
          style={style.content}
          animation={'flipInX'}
        >
          <Text style={style.verifyText}>Verify your number</Text>
          <Text style={style.smsText}>Enter verification code</Text>
          <TextInput
            placeholder={'Verification Code'}
            keyboardType={'numeric'}
            style={style.textInput}
            underlineColorAndroid={'transparent'}
            onChangeText={text => this.setState({ verificationCode: text })}
            value={this.state.verificationCode}
          />
          <Text style={style.signinText}>
            By signing up, You agree to the{' '}
            {<Text style={style.termsText}>Terms &amp; Conditions</Text>}
          </Text>
          <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <TouchableOpacity style={style.nextButton} onPress={this.verify}>
              <Text style={style.footerButtonText}>Verify</Text>
            </TouchableOpacity>
          </View>
        </Animatable.View>
      </View>
    )
  }

  verify = async () => {
    const isVerify = await this.props.User.verify(this.state.verificationCode)
    if (isVerify) {
      this.props.navigation.replace('Profile')
    }
  }
}
