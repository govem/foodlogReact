import React from 'react';
import { StyleSheet } from 'react-native';
import { AppLoading, Font } from 'expo';
import { StyleProvider, Container, Drawer, Text } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import { observer } from 'mobx-react';

import LoginComponent from './components/LoginComponent';
import HeaderComponent from './components/HeaderComponent';
import MainComponent from './components/MainComponent';
import SidebarComponent from './components/SidebarComponent';
import Navigator from './components/Navigator';

import appstore from './stores/Appstore.js';

@observer
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isReady: false
    };
  }

  async componentWillMount() {
    await Font.loadAsync({
      PTSans: require('./assets/fonts/PT_Sans-Web-Regular.ttf'),
      PTSansBold: require('./assets/fonts/PT_Sans-Web-Bold.ttf')
    });
    this.setState({ isReady: true });
  }

  closeDrawer = () => {
    this.drawer._root.close();
  };
  openDrawer = () => {
    this.drawer._root.open();
  };

  render() {
    if (!this.state.isReady) {
      return <AppLoading onFinish={() => this.setState({ isReady: true })} onError={console.warn} />;
    }

    return (
      <StyleProvider style={getTheme(material)}>
        {appstore.loggedUser == null ? (
          <LoginComponent />
        ) : (
          <Drawer
            ref={ref => {
              this.drawer = ref;
            }}
            content={<SidebarComponent />}
            onClose={() => this.closeDrawer()}
          >
            <Navigator />
          </Drawer>
        )}
      </StyleProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDA63A',
    flexDirection: 'column'
  }
});
