import React, { useContext } from 'react'
import { FlatList, TouchableHighlight } from 'react-native'
import { Card, Text, Title, View, withTheme } from 'react-native-paper'
import { useNavigation } from '@react-navigation/native'

import { navigationConstants } from './../../../core-module/_constants'
import { AuthContext } from '../../../core-module/_contexts'
import { useScreenDimensions, useLandscapeOrientation } from './../../../hooks'

import { getCategoryName } from './../../../data/MockDataAPI'
import { recipes } from './../../../data/dataArrays'

export const MenuScreen = withTheme(props => {
    const { user } = useContext(AuthContext)
    const navigation = useNavigation()
    const screenData = useScreenDimensions()
    const isLandscape = useLandscapeOrientation()

    const width = (screenData.width / 2) - (isLandscape ? 40 : 20)

    const onPressRecipe = item => {
        navigation.navigate(navigationConstants.SCREENS.RECIPE, { item })
    }

    const renderRecipes = ({ item }) => (
        <TouchableHighlight onPress={() => onPressRecipe(item)}>
            <Card key={item.recipeId} style={{ margin: 10, width }}>
                <Card.Cover source={{ uri: item.photo_url }} />
                <Card.Title title={item.title} />
                {/* <Card.Content>
                    <Title>
                        {getCategoryName(item.categoryId)}
                    </Title>
                </Card.Content> */}
            </Card>
        </TouchableHighlight>
    )

    return (
        <FlatList
            vertical
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={recipes}
            renderItem={renderRecipes}
            keyExtractor={item => `${item.recipeId}`}
        />
    )
})
