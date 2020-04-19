import React, { useContext } from 'react'
import { FlatList, Text, View, TouchableHighlight, Image } from 'react-native'
import { withTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import { navigationConstants } from './../../../core-module/_constants'
import { AuthContext } from '../../../core-module/_contexts'

import { getNumberOfRecipes } from './../../../data/MockDataAPI'
import { categories } from './../../../data/dataArrays'

import { styles } from './styles'

export const CategoriesScreen = withTheme(props => {
    const { user } = useContext(AuthContext)
    const navigation = useNavigation()

    const onPressCategory = item => {
        const title = item.name
        const category = item
        navigation.navigate(navigationConstants.SCREENS.RECIPESLIST, { category, title })
    }

    const renderCategory = ({ item }) => (
        <TouchableHighlight underlayColor={props.theme.colors.primary} onPress={() => onPressCategory(item)}>
            <View style={styles.categoriesItemContainer}>
                <Image style={styles.categoriesPhoto} source={{ uri: item.photo_url }} />
                <Text style={styles.categoriesName}>{item.name}</Text>
                <Text style={styles.categoriesInfo}>{getNumberOfRecipes(item.id)} recipes</Text>
            </View>
        </TouchableHighlight>
    )

    return (
        <View>
            <FlatList
                data={categories}
                renderItem={renderCategory}
                keyExtractor={item => `${item.id}`}
            />
        </View>
    )
})
