import React from 'react'
import { Icon, withBadge } from 'react-native-elements'
import { Alert } from 'react-native'

const BadgedIcon = withBadge(1)(Icon)

class Cart extends React.Component {
  constructor(props) {
    super(props);
    this.state = { }
  }

  render() {
    return (
      <BadgedIcon name='shopping-cart' onPress={() => Alert.alert('it works!!')} />
    )
  }
}

export default Cart