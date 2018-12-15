import React, { Component } from 'react'
import { Animated, View } from 'react-native'

export default class progressiveImage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      thumbnailOpacity: new Animated.Value(0),
      isImageLoaded: false
    }
  }
  onLoad() {
    this.setState({ isImageLoaded: true })
    Animated.timing(this.state.thumbnailOpacity, {
      toValue: 0,
      duration: 250
    }).start()
  }
  onThumbnailLoad() {
    if (!this.state.isImageLoaded)
      Animated.timing(this.state.thumbnailOpacity, {
        toValue: 1,
        duration: 250
      }).start()
  }
  render() {
    return (
      <View
        width={this.props.style.width}
        height={this.props.style.height}
        backgroundColor={'#ffffff'}
        style={this.props.style}
      >
        <Animated.Image
          resizeMode={'cover'}
          key={this.props.key}
          style={[
            {
              position: 'absolute'
            },
            this.props.style
          ]}
          source={this.props.source}
          onLoad={event => this.onLoad(event)}
        />
        <Animated.Image
          resizeMode={'cover'}
          key={this.props.key}
          style={[
            {
              opacity: this.state.thumbnailOpacity
            },
            this.props.style
          ]}
          source={this.props.thumbnail}
          onLoad={event => this.onThumbnailLoad(event)}
        />
      </View>
    )
  }
}
