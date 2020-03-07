import * as React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import TabBarIcon from '../components/TabBarIcon'
// import HomeScreen from '../screens/HomeScreen'
// import LinksScreen from '../screens/LinksScreen'

const BottomTab = createBottomTabNavigator()
const INITIAL_ROUTE_NAME = 'Home'

// export default function BottomTabNavigator({ navigation, route }) {
//   // Set the header title on the parent stack navigator depending on the
//   // currently active tab. Learn more in the documentation:
//   // https://reactnavigation.org/docs/en/screen-options-resolution.html
//   navigation.setOptions({ headerTitle: getHeaderTitle(route) })

//   return ()
// }

// function getHeaderTitle(route) {
//   const routeName = route.state?.routes[route.state.index]?.name ?? INITIAL_ROUTE_NAME

//   switch (routeName) {
//     case 'Home':
//       return 'Home'
//     case 'Locations':
//       return 'Locations'





//       // start here
//       // list all screens
//   }
// }
