import React from 'react';

import { View } from 'react-native';
import { Icon } from 'native-base';

import css from '../styles/StarStyle.js';

class StarComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    var stars = [];
    for (var i = 0; i < 5; i++) {
      if (i < this.props.starCount) {
        stars.push(<Icon key={i} name="md-star" style={css.star} />);
      } else {
        stars.push(<Icon key={i} name="md-star-outline" style={css.star} />);
      }
    }

    return <View style={css.divStars}>{stars}</View>;
  }
}

export default StarComponent;
