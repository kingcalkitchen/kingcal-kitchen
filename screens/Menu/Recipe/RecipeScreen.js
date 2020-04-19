import React, { useState, useContext } from 'react'
import { ScrollView, Image, Dimensions, TouchableHighlight } from 'react-native'
import { withTheme, Text, View } from 'react-native-paper'
import Carousel, { Pagination } from 'react-native-snap-carousel'
import { useNavigation, useRoute } from '@react-navigation/native'

import { ViewIngredientsButton } from './../../../components/ViewIngredientsButton'

import { styles } from './styles'






//import { useScreenDimensions, useLandscapeOrientation } from './../../../misc'
import { getIngredientName, getCategoryName, getCategoryById } from './../../../data/MockDataAPI'

//import { AuthContext } from '../../../core-module/_contexts'

const { width: viewportWidth } = Dimensions.get('window')

export const RecipeScreen = withTheme(props => {
    const [activeSlide, setActiveSlide] = useState(0)

    //const { user } = useContext(AuthContext)
    const navigation = useNavigation()
    // const screenData = useScreenDimensions()
    // const isLandscape = useLandscapeOrientation()
    const route = useRoute()
    const { item } = route.params

    const category = getCategoryById(item.categoryId)
    const title = getCategoryName(category.id)

    const renderImage = data => (
        <TouchableHighlight>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={{ uri: data.item }} />
            </View>
        </TouchableHighlight>
    )

    const onPressIngredient = item => {
        var name = getIngredientName(item)
        let ingredient = item
        navigation.navigate('Ingredient', { ingredient, name })
    }

    return (
        <ScrollView style={styles.container}>
            <View style={styles.carouselContainer}>
                <View style={styles.carousel}>
                    <Carousel
                        ref={c => {
                            this.slider1Ref = c;
                        }}
                        data={item.photosArray}
                        renderItem={renderImage}
                        sliderWidth={viewportWidth}
                        itemWidth={viewportWidth}
                        inactiveSlideScale={1}
                        inactiveSlideOpacity={1}
                        firstItem={0}
                        loop={false}
                        autoplay={false}
                        autoplayDelay={500}
                        autoplayInterval={3000}
                        onSnapToItem={index => setActiveSlide(index)}
                    />
                    <Pagination
                        dotsLength={item.photosArray.length}
                        activeDotIndex={activeSlide}
                        containerStyle={styles.paginationContainer}
                        dotColor="rgba(255, 255, 255, 0.92)"
                        dotStyle={styles.paginationDot}
                        inactiveDotColor="white"
                        inactiveDotOpacity={0.4}
                        inactiveDotScale={0.6}
                        carouselRef={this.slider1Ref}
                        tappableDots={!!this.slider1Ref}
                    />
                </View>
            </View>
            <View style={styles.infoRecipeContainer}>
                <Text style={styles.infoRecipeName}>{item.title}</Text>
                <View style={styles.infoContainer}>
                    <TouchableHighlight onPress={() => navigation.navigate('RecipesList', { category, title })}>
                        <Text style={styles.category}>{getCategoryName(item.categoryId).toUpperCase()}</Text>
                    </TouchableHighlight>
                </View>

                <View style={styles.infoContainer}>
                    <Image style={styles.infoPhoto} source={require('./../../../core-module/_assets/icons/time.png')} />
                    <Text style={styles.infoRecipe}>{item.time} minutes </Text>
                </View>

                <View style={styles.infoContainer}>
                    <ViewIngredientsButton onPress={() => onPressIngredient(item)} />
                </View>
                <View style={styles.infoContainer}>
                    <Text style={styles.infoDescriptionRecipe}>{item.description}</Text>
                </View>
            </View>
        </ScrollView>
    )
})
