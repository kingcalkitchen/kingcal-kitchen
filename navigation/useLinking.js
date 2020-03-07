import { useLinking } from '@react-navigation/native';
import { Linking } from 'expo';

export default function(containerRef) {
  return useLinking(containerRef, {
    prefixes: [Linking.makeUrl('/')],
    config: {
      Root: {
        path: 'root',
        screens: {
          Home: 'home',
          Locations: 'locations',
          Categories: 'categories',
          MealMenuHome: 'mealMenuHome',
          Ingredient: 'ingredient',
          IngredientsDetails: 'ingredientsDetails',
          Recipe: 'recipe',
          RecipesList: 'recipesList',
          Search: 'search',
          Login: 'login',
          Register: 'register',
        },
      },
    },
  });
}
