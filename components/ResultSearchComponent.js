import React from 'react';
import { View, Text, Image } from 'react-native';
import { Button, Icon } from 'native-base';
import css from '../styles/ResultSearchStyle.js';

class ResultSearchComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.item);
    return (
      <View style={this.props.index % 2 == 0 ? css.cellResult : css.cellResultGris}>
        <Image style={css.cellImage} source={require('../assets/cafe.png')} />
        <View style={css.cellTextZone}>
          <Text style={css.cellTitle}>{this.props.item.name}</Text>
          <Text style={css.cellText}>{this.props.item.vicinity}</Text>
        </View>
        <Button style={css.btnAdd}>
          <Icon name="add" />
        </Button>
      </View>
    );
  }
}

export default ResultSearchComponent;
