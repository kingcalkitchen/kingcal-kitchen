import { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'

export const useScreenDimensions = () => {
    const [screenDimensions, setScreenDimensions] = useState(Dimensions.get('screen'))

    useEffect(() => {
        const onChange = result => {
            setScreenDimensions(result.screen)
        }

        Dimensions.addEventListener('change', onChange)
    })

    return screenDimensions
}