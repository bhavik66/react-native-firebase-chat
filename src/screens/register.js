import React, { Component } from 'react'
import {
  View,
  TextInput,
  Text,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from 'react-native'
import PhoneInput from 'react-native-phone-input'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { inject } from 'mobx-react'

import style from '../theme/index'
import colors from '../theme/colors'
@inject('User')
export default class Register extends Component {
  constructor(props) {
    super(props)
    this.state = {
      phoneNumber: '+919033090059',
      verificationCode: '123456'
    }
    this.screenWidth = Dimensions.get('window').width
  }

  componentDidMount() {
    this.phone.focus()
  }

  render() {
    return (
      <ScrollView
        ref={instance => (this.scoll = instance)}
        contentContainerStyle={{ flexGrow: 1 }}
        horizontal
        showsHorizontalScrollIndicator={false}
        scrollEnabled={false}
      >
        {this.registerView()}
        {this.verifyView()}
      </ScrollView>
    )
  }

  registerView = () => {
    return (
      <View style={style.container}>
        <View style={style.content}>
          <Text style={style.verifyText}>Verify your number</Text>
          <Text style={style.smsText}>You'll get a code via SMS</Text>
          <PhoneInput
            ref={instance => (this.phone = instance)}
            style={{
              marginTop: 32,
              padding: 8,
              borderColor: colors.border,
              borderWidth: 0.5
            }}
            initialCountry={'in'}
            textStyle={{ fontSize: 18 }}
            flagStyle={{ height: 32, width: 42 }}
            onChangePhoneNumber={phoneNumber =>
              this.setState({ phoneNumber: phoneNumber })
            }
            textProps={{ value: this.state.phoneNumber }}
          />
          <Text style={style.signinText}>
            By signin up, You agree to the{' '}
            {<Text style={style.termsText}>Terms &amp; Conditions</Text>}
          </Text>
        </View>
        <View style={style.footer}>
          <TouchableOpacity
            style={style.footerButton}
            onPress={() => this.handleNext(1)}
          >
            <Text style={style.footerButtonText}>REGISTER</Text>
            <Icon
              name={'keyboard-arrow-right'}
              size={32}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  verifyView = () => {
    return (
      <View style={style.container}>
        <View style={style.content}>
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
            By signin up, You agree to the{' '}
            {<Text style={style.termsText}>Terms &amp; Conditions</Text>}
          </Text>
        </View>
        <View style={style.footer}>
          <TouchableOpacity
            style={style.footerButton}
            onPress={() => this.handleNext(2)}
          >
            <Text style={style.footerButtonText}>FINISH</Text>
            <Icon
              name={'keyboard-arrow-right'}
              size={32}
              color={colors.white}
            />
          </TouchableOpacity>
        </View>
      </View>
    )
  }

  handleNext = async step => {
    switch (step) {
      case 1:
        const isConfirm = await this.props.User.auth(this.state.phoneNumber)
        if (isConfirm) {
          this.scoll.scrollTo({
            x: step * this.screenWidth,
            y: 0,
            animated: true
          })
        }
        break
      case 2:
        const isVerify = await this.props.User.verify(
          this.state.verificationCode
        )
        if (isVerify) {
          this.props.navigation.replace('Profile')
        }
        break
    }
  }
}
