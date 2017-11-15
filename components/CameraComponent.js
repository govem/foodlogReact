import React from 'react';
import { Text, View, Dimensions } from 'react-native';
import { Body, Left, Right, Button, Icon } from 'native-base';
import { Camera, Permissions, ScreenOrientation } from 'expo';

import css from '../styles/CameraStyle';

class CameraComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLandscape: false,
      hasCameraPermission: null,
      type: Camera.Constants.Type.back
    };
    Dimensions.addEventListener('change', this.changeOrientation);
  }

  async componentDidMount() {
    const { status } = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({ hasCameraPermission: status === 'granted' });

    ScreenOrientation.allow(ScreenOrientation.Orientation.ALL);
  }

  onTakePhoto = async () => {
    if (this.camera) {
      let photo = await this.camera.takePictureAsync();
      this.cancelCamera();
      this.props.photoTaken(photo);
    }
  };

  cancelCamera = () => {
    this.props.cancelCamera();
    ScreenOrientation.allow(ScreenOrientation.Orientation.PORTRAIT);
  };

  onGallery = () => {};

  onFlipCamera = () => {
    if (this.state.type == Camera.Constants.Type.back) {
      this.setState({ type: Camera.Constants.Type.front });
    } else {
      this.setState({ type: Camera.Constants.Type.back });
    }
  };

  changeOrientation = () => {
    const { width, height } = Dimensions.get('window');
    this.setState({ isLandscape: width > height });
  };

  render() {
    const { hasCameraPermission } = this.state;
    if (hasCameraPermission === null) {
      return <View />;
    } else if (hasCameraPermission === false) {
      return <Text>No access to camera</Text>;
    } else {
      return (
        <View style={{ flex: 1 }}>
          <Camera
            style={css.camera}
            type={this.state.type}
            ref={ref => {
              this.camera = ref;
            }}
          >
            <View style={this.state.isLandscape ? css.cameraLayerLandscape : css.cameraLayer}>
              <Left style={{ justifyContent: 'flex-start' }}>
                <Button style={css.btnCameraClose} onPress={this.cancelCamera} transparent>
                  <Icon style={css.iconReverseCamera} name="close-circle" />
                </Button>
              </Left>
              <Body style={{ justifyContent: 'center' }}>
                <Button style={css.btnCamera} onPress={this.onTakePhoto} transparent>
                  <Icon style={css.iconCamera} name="camera" />
                </Button>
              </Body>
              <Right style={{ justifyContent: 'flex-end' }}>
                <Button style={css.btnCameraReverse} onPress={this.onFlipCamera} transparent>
                  <Icon style={css.iconReverseCamera} name="reverse-camera" />
                </Button>
              </Right>
            </View>
          </Camera>
        </View>
      );
    }
  }
}

export default CameraComponent;
