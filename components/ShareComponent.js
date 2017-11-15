import React from 'react';
import css from '../styles/ShareStyle';
import colors from '../styles/Colors';
import appstore from '../stores/Appstore';

import { LinearGradient } from 'expo';
import { View, Image, FlatList, RefreshControl, Text, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

class ShareComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      refreshing: false,
      selectedItem: null
    };
  }

  onPressItem = item => {
    this.setState({ selectedItem: item.id });
  };

  friendRender = (item, index) => {
    const isSelected = this.state.selectedItem === item.id;
    var rowStyle;
    if (index % 2 == 0) {
      rowStyle = css.divFriend;
    } else {
      rowStyle = [css.divFriend, css.divGris];
    }
    return (
      <TouchableOpacity onPress={() => this.onPressItem(item)}>
        <View style={rowStyle}>
          <Image source={{ uri: item.picture.data.uri }} style={css.friendImage} />
          <Text style={css.friendName}>{item.name}</Text>
          {isSelected && <Icon ios="ios-checkmark-circle" android="md-checkmark-circle" style={css.iconSelected} />}
        </View>
      </TouchableOpacity>
    );
  };

  onRefresh = () => {
    this.setState({ refreshing: true });
    console.log('refreshing');
    //TODO buscar datos y setear false cuando lleguen los datos
    this.setState({ refreshing: false });
  };

  render() {
    return (
      <LinearGradient colors={[colors.naranjo, colors.naranjoGradientEnd]} style={css.container}>
        <FlatList
          data={appstore.loggedUser.friends}
          extraData={this.state.selectedItem}
          style={css.friendList}
          renderItem={({ item, index }) => this.friendRender(item, index)}
          ListEmptyComponent={<Text style={css.noData}>Aún no tienes amigos con Foodlog</Text>}
          keyExtractor={item => item.id}
          refreshControl={
            <RefreshControl
              refreshing={this.state.refreshing}
              onRefresh={this.onRefresh.bind(this)}
              title="Tire para recargar"
            />
          }
        />
      </LinearGradient>
    );
  }
}

export default ShareComponent;
