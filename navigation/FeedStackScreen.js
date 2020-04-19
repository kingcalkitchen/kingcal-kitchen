import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import { navigationConstants } from './../core-module/_constants'
import { FeedScreen, FeedItemDetailsScreen } from './../screens/Feed'
import { HeaderContent } from './../components/Header'

const FeedStack = createStackNavigator()

export const FeedStackScreen = props => {
    return (
        <FeedStack.Navigator initialRouteName={navigationConstants.SCREENS.FEED} headerMode="none">
            <FeedStack.Screen name={navigationConstants.SCREENS.FEED}>
                {props => <FeedScreen {...props} />}
            </FeedStack.Screen>
            <FeedStack.Screen name={navigationConstants.SCREENS.FEED_ITEM_DETAILS}>
                {props => <FeedItemDetailsScreen {...props} />}
            </FeedStack.Screen>
        </FeedStack.Navigator>
    )
}
