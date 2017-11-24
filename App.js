import React from 'react';
import { AppLoading, Font } from 'expo';
import { StyleProvider, Drawer, Root } from 'native-base';
import getTheme from './native-base-theme/components';
import material from './native-base-theme/variables/material';
import { observer } from 'mobx-react';
import { reaction } from 'mobx';

import LoginComponent from './components/LoginComponent';
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

  abreDrawer = reaction(
    () => appstore.drawerOpened,
    drawerOpened => {
      if (drawerOpened == true) {
        this.drawer._root.open();
        appstore.toggleDrawer();
      }
    }
  );

  render() {
    if (!this.state.isReady) {
      return <AppLoading onFinish={() => this.setState({ isReady: true })} onError={console.warn} />;
    }

    return (
      <Root>
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
              <Navigator
                onNavigationStateChange={(prevState, newState, action) => {
                  console.log('cambiando navegacion: ' + JSON.stringify(prevState) + ' ' + JSON.stringify(newState));
                }}
              />
            </Drawer>
          )}
        </StyleProvider>
      </Root>
    );
  }
}
