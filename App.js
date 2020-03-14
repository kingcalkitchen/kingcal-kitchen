import * as React from 'react'
import { Provider } from 'react-redux'
import { SplashScreen } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { AsyncStorage, Button, Text, Platform, StatusBar, Alert } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TabBarIcon from './components/TabBarIcon'

import { navigationConstants, userConstants } from './core-module/_constants'
import { userActions } from './core-module/_actions'

import { HomeScreen } from './screens/HomeScreen'
import LocationsScreen from './screens/Locations/LocationsScreen'
import KingCalKitchenScreen from './screens/Locations/KingCalKitchen'
import CuttingEdgeNutritionScreen from './screens/Locations/CuttingEdgeNutrition'
import FgnFitnessScreen from './screens/Locations/FgnFitness'

//import AuthLoadingScreen from './screens/AuthLoadingScreen'
import { LoginScreen } from './screens/LoginScreen'
import { RegisterScreen } from './screens/RegisterScreen'


import CategoriesScreen from './screens/MealMenu/Categories/CategoriesScreen'
import DrawerContainer from './screens/MealMenu/DrawerContainer/DrawerContainer'
import MealMenuHomeScreen from './screens/MealMenu/Home/HomeScreen'
import IngredientScreen from './screens/MealMenu/Ingredient/IngredientScreen'
import IngredientsDetailsScreen from './screens/MealMenu/IngredientsDetails/IngredientsDetailsScreen'
import RecipeScreen from './screens/MealMenu/Recipe/RecipeScreen'
import RecipesListScreen from './screens/MealMenu/RecipesList/RecipesListScreen'
import SearchScreen from './screens/MealMenu/Search/SearchScreen'
//import SplashScreen from './screens/MealMenu/Splash/SplashScreen'

import useLinking from './navigation/useLinking'

import { store } from './core-module/_helpers'

import {decode, encode} from 'base-64'

if (!global.btoa) {  global.btoa = encode }

if (!global.atob) { global.atob = decode }

export default function App(props) {
  const [token, setToken] = React.useState(store.getState().user.token)
  const [userLoggingIn, setUserLoggingIn] = React.useState(false)
  const [isSignout, setIsSignout] = React.useState(false)

  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  const [initialNavigationState, setInitialNavigationState] = React.useState()
  const containerRef = React.useRef()
  const { getInitialState } = useLinking(containerRef)

  const setStorage = async token => {
    setToken(token)
    setUserLoggingIn(false)
    setIsSignout(false)
    await AsyncStorage.setItem(userConstants.USER_TOKEN, token)
  }
  const _signInAsync = credentials => {
    setUserLoggingIn(true)
    store.dispatch(userActions.getToken(credentials, setStorage))
  }

  const removeStorage = async () => {
    setToken(null)
    setIsSignout(true)
    await AsyncStorage.removeItem(userConstants.USER_TOKEN)
  }
  const _signOutAsync = () => {
    store.dispatch(userActions.removeToken(removeStorage))
  }

  const _registerAsync = user => {
    store.dispatch(userActions.register(user, _signInAsync))
  }

  const Stack = createStackNavigator()
  const Tab = createBottomTabNavigator()

  const HomeStack = createStackNavigator()
  function HomeStackScreen() {
    return (
      <HomeStack.Navigator>
        <HomeStack.Screen name={navigationConstants.HOME}>
          {props => <HomeScreen {...props} signOut={() => _signOutAsync()} />}
        </HomeStack.Screen>
      </HomeStack.Navigator>
    )
  }

  // TODO
  // there should only be one location template
  // remove kingcal kitchen, cutting edge nutrition, and fgn fitness
  const LocationStack = createStackNavigator()
  function LocationStackScreen() {
    return (
      <LocationStack.Navigator>
        <LocationStack.Screen name={navigationConstants.LOCATIONS} component={LocationsScreen} />
        <LocationStack.Screen name={navigationConstants.KINGCAL_KITCHEN} component={KingCalKitchenScreen} />
        <LocationStack.Screen name={navigationConstants.CUTTING_EDGE_NUTRITION} component={CuttingEdgeNutritionScreen} />
        <LocationStack.Screen name={navigationConstants.FGN_FITNESS} component={FgnFitnessScreen} />
      </LocationStack.Navigator>
    )
  }

  const MealMenuStack = createStackNavigator()
  function MealMenuStackScreen() {
    return (
      <MealMenuStack.Navigator
        initialRouteName={navigationConstants.MEAM_MENU_HOME}
        headerMode={Platform.OS === 'ios' ? 'float' : 'screen'}
      >
        <MealMenuStack.Screen name={navigationConstants.MEAM_MENU_HOME} component={MealMenuHomeScreen} />
        <MealMenuStack.Screen name={navigationConstants.CATEGORIES} component={CategoriesScreen} />
        <MealMenuStack.Screen name={navigationConstants.INGREDIENT} component={IngredientScreen} />
        <MealMenuStack.Screen name={navigationConstants.INGREDIENTS} component={IngredientsDetailsScreen} />
        <MealMenuStack.Screen name={navigationConstants.RECIPE} component={RecipeScreen} />
        <MealMenuStack.Screen name={navigationConstants.RECIPESLIST} component={RecipesListScreen} />
        <MealMenuStack.Screen name={navigationConstants.SEARCH} component={SearchScreen} />
      </MealMenuStack.Navigator>
    )
  }

  React.useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        SplashScreen.preventAutoHide()

        // Load our initial navigation state
        setInitialNavigationState(await getInitialState())

        // Look for token, then verify
        verifyUser()

        // Load fonts
        await Font.loadAsync({
          ...Ionicons.font,
          'FallingSky': require('./assets/fonts/FallingSky.ttf'),
          'FallingSkyCond': require('./assets/fonts/FallingSkyCond.ttf'),
        })
      } catch (e) {
        // We might want to provide this error information to an error reporting service
        console.warn(e)
      } finally {
        setLoadingComplete(true)
        SplashScreen.hide()
      }
    }

    async function verifyUser() {
      let userToken
      try {
        userToken = await AsyncStorage.getItem(userConstants.USER_TOKEN)
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      store.dispatch(userActions.restoreToken(userToken))
    }

    loadResourcesAndDataAsync()
  }, [])

  // if (userLoggingIn) {
  //   // We haven't finished checking for the token yet
  //   return <AuthLoadingScreen />;
  // }

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null
  } else {
    return (
      <Provider store={store}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        >
          {token === null ? (
            <>
              <Stack.Navigator
                screenOptions={{
                  headerStyle: {
                    backgroundColor: '#f4511e',
                  },
                  headerTintColor: '#fff',
                }}
              >
                <Stack.Screen name={navigationConstants.SIGN_IN} options={{ headerShown: false, animationTypeForReplace: isSignout ? 'pop' : 'push' }}>
                  {props => <LoginScreen {...props} signIn={credentials => _signInAsync(credentials)} />}
                </Stack.Screen>
                <Stack.Screen name={navigationConstants.SIGN_UP} options={{ headerShown: false }}>
                  {props => <RegisterScreen {...props} register={user => _registerAsync(user)} />}
                </Stack.Screen>
              </Stack.Navigator>
            </>
          ) : (
              <>
                <Tab.Navigator>
                  <Tab.Screen
                    name={navigationConstants.HOME}
                    component={HomeStackScreen}
                    options={{
                      title: 'Home',
                      tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />,
                    }}
                  />
                  <Tab.Screen
                    name={navigationConstants.LOCATIONS}
                    component={LocationStackScreen}
                    options={{
                      title: 'Locations',
                      tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-compass' : 'md-compass'} />,
                    }}
                  />
                  <Tab.Screen
                    name={navigationConstants.MEAM_MENU_HOME}
                    component={MealMenuStackScreen}
                    options={{
                      title: 'MealMenuHome',
                      tabBarIcon: ({ focused }) => <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-pizza' : 'md-pizza'} />,
                    }}
                  />
                </Tab.Navigator>
              </>
            )
          }
        </NavigationContainer>
      </ Provider>
    )
  }
}