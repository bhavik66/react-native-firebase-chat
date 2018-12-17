<p align="center">
  <img src="https://i.imgur.com/CbpT7sy.jpg" alt="FirebaseChat" title="FirebaseChat" />
</p>

# React Native Firebase Chat

[![Build Status][ico-travis]][link-travis]
[![React Native][react_native-badge]][react_native-url]
[![Android Platform][android_platform-badge]][android_platform-url]
[![Android Studio][android_studio-badge]][android_studio-url]
[![Codebeat][codebeat-badge]][codebeat-url]

React Native chat application using Firebase backend. 

In this project We have used following Firebase serivces.
* **Firebase Authentication** : For authentication user by phone number
* **Firebase RealTime Database** : That's we for handle realtime chat
* **Firebase Storage** : That's we use for store user profile image

BinBytes is an mobile & web application development agency in Rajkot, India. You'll find an overview of all our services [on our website](https://binbytes.com).

## Requirements

### Mandatory
- [Android Studio](https://developer.android.com/studio/index.html).
- [Node](https://nodejs.org), [Watchman](https://facebook.github.io/watchman/) and [React Native](https://facebook.github.io/react-native/).

### Optional
- [VS Code](https://code.visualstudio.com/)
- [Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

## Enviroment Settings

### Mandatory
- Install [Android Studio](https://developer.android.com/studio/index.html) and create an emulator.
- Install [Node](https://nodejs.org), [Watchman](https://facebook.github.io/watchman/) and [React Native](https://facebook.github.io/react-native/).


### Optional
- Install [VS Code](https://code.visualstudio.com/) and follow extensions: `prettier`

## Firebase Steup
- For Firebase setup you need follow this [instructions](https://firebase.google.com/docs/android/setup)

## Steps to Run
### 1. Clone project and install the dependencies
```
git clone git@github.com:binbytes/react-native-firebase-chat.git && cd react-native-firebase-chat && npm install
```

### 2. Setup firebase in Android
- Download `google-services.json` from Firebase Project and copy it to `react-native-firebase-chat/android/app`

(For download `google-services.json` use [this](https://support.google.com/firebase/answer/7015592))

### 3. Make sure you have started an emulator and run the app on Android
```
react-native run-android
```

## Architecture

<p align="center">
  <img src="https://i.imgur.com/RUJUqGE.jpg" />
</p>

## Security

If you discover any security related issues, please email author email instead of using the issue tracker.

## Credits

- [Bhavik Charola](https://github.com/bhavik66)

## License

MIT License. Please see the [license file](LICENSE.md) for more information.


[react_native-badge]: https://img.shields.io/badge/React%20Native-0.57.7-blue.svg?style=flat
[react_native-url]: https://facebook.github.io/react-native/
[android_platform-badge]: https://img.shields.io/badge/Android-4.1+-green.svg
[android_platform-url]: https://developer.android.com/index.html
[android_studio-badge]: https://img.shields.io/badge/Android%20Studio-3.2.1+-green.svg
[android_studio-url]: https://developer.android.com/studio/install
[codebeat-badge]: https://codebeat.co/badges/f22bd54a-d944-440d-aa4d-3a99f79b41d3
[codebeat-url]: https://codebeat.co/projects/github-com-binbytes-react-native-firebase-chat-master
[ico-travis]: https://img.shields.io/travis/binbytes/laravel-model-media-backup/master.svg?style=flat-square
[link-travis]: https://travis-ci.org/binbytes/react-native-firebase-chat