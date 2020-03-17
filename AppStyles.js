import { StyleSheet, Dimensions } from 'react-native'

// screen sizing
const { width, height } = Dimensions.get('window')
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height

const recipeNumColums = 2
// item size
const RECIPE_ITEM_HEIGHT = 150
const RECIPE_ITEM_MARGIN = 20

const FLEX_BASE = { flex: 1 }
const CONTAINER_BASE = {}

export const AppStyles = StyleSheet.create({
  flexBase: FLEX_BASE,
  container: {
    ...FLEX_BASE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
  },
  text: {
    fontSize: 20,
  },
  smallText: {
    fontSize: 10,
  },
  divider: {
    marginTop: 20, 
    marginBottom: 20 
  },
})

export const FormField = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  title: {
    flex: 1,
    fontFamily: 'FallingSky',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
  },
  textInput: {
      width: 300,
      fontSize: 30,
      borderWidth: 1,
      borderColor: '#eaeaea',
      margin: 15,
      padding: 10,
  },
})

// 2 photos per width
export const RecipeCard = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: RECIPE_ITEM_MARGIN,
    marginTop: 20,
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT + 75,
    borderColor: '#cccccc',
    borderWidth: 0.5,
    borderRadius: 15
  },
  photo: {
    width: (SCREEN_WIDTH - (recipeNumColums + 1) * RECIPE_ITEM_MARGIN) / recipeNumColums,
    height: RECIPE_ITEM_HEIGHT,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  title: {
    flex: 1,
    fontFamily: 'FallingSky',
    fontSize: 17,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#444444',
    marginTop: 3,
    marginRight: 5,
    marginLeft: 5,
  },
  category: {
    marginTop: 5,
    marginBottom: 5
  }
})
