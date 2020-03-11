import * as React from 'react'
//import { Provider } from 'react-redux'
import { SplashScreen } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import { AsyncStorage, Button, Text, Platform, StatusBar } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import TabBarIcon from './components/TabBarIcon'

import { navigationConstants, userConstants } from './core-module/_constants'

import HomeScreen from './screens/HomeScreen'
import LocationsScreen from './screens/Locations/LocationsScreen'
import KingCalKitchenScreen from './screens/Locations/KingCalKitchen'
import CuttingEdgeNutritionScreen from './screens/Locations/CuttingEdgeNutrition'
import FgnFitnessScreen from './screens/Locations/FgnFitness'

//import AuthLoadingScreen from './screens/AuthLoadingScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'


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

import { Context } from './core-module/_helpers'

const Stack = createStackNavigator()
const Tab = createBottomTabNavigator()

const HomeStack = createStackNavigator()
function HomeStackScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name={navigationConstants.HOME} component={HomeScreen} />
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
      initialRouteName="MealMenuHome"
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

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = React.useState(false)
  const [initialNavigationState, setInitialNavigationState] = React.useState()
  const containerRef = React.useRef()
  const { getInitialState } = useLinking(containerRef)

  const [state, dispatch] = React.useReducer((prevState, action) => {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return { ...prevState, userToken: action.token, isLoading: false }
      case 'SIGN_IN':
        return { ...prevState, isSignout: false, userToken: action.token }
      case 'SIGN_OUT':
        return { ...prevState, isSignout: true, userToken: null }
      default:
        return prevState
    }
  }, {
    isLoading: true,
    isSignout: false,
    userToken: null,
  })

  // Load any resources or data that we need prior to rendering the app
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
        userToken = await AsyncStorage.getItem('userToken')
      } catch (e) {
        // Restoring token failed
      }

      // After restoring token, we may need to validate it in production apps

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      dispatch({ type: userConstants.RESTORE_TOKEN, token: userToken })
    }

    loadResourcesAndDataAsync()
  }, [])

  const context = React.useMemo(
    () => ({
      signIn: async data => {
        // In a production app, we need to send some data (usually username, password) to server and get a token
        // We will also need to handle errors if sign in failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        await AsyncStorage.setItem('userToken', 'xxx')

        dispatch({ type: 'SIGN_IN', token: 'xxx' })
      },
      signOut: () => {
        dispatch({ type: 'SIGN_OUT' })
      },
      signUp: async data => {
        // In a production app, we need to send user data to server and get a token
        // We will also need to handle errors if sign up failed
        // After getting token, we need to persist the token using `AsyncStorage`
        // In the example, we'll use a dummy token

        dispatch({ type: 'SIGN_IN', token: 'xxx' })
      },
    }),
    []
  )

  // if (state.isLoading) {
  //   // We haven't finished checking for the token yet
  //   return <AuthLoadingScreen />;
  // }

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return null
  } else {
    return (
      <Context.Provider value={context}>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer
          ref={containerRef}
          initialState={initialNavigationState}
        >
          {state.userToken == null ? (
            <>
              <Stack.Navigator
                screenOptions={{
                  headerStyle: {
                    backgroundColor: '#f4511e',
                  },
                  headerTintColor: '#fff',
                }}
              >
                <Stack.Screen
                  name={navigationConstants.SIGN_IN}
                  component={LoginScreen}
                  options={{
                    headerShown: false,
                    animationTypeForReplace: state.isSignout ? 'pop' : 'push',
                  }}
                />
                <Stack.Screen
                  name={navigationConstants.SIGN_UP}
                  component={RegisterScreen}
                  options={{
                    headerShown: false,
                  }}
                />
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
      </Context.Provider>
    )
  }
}
