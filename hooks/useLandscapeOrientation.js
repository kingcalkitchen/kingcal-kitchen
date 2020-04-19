import { useState, useEffect } from 'react'
import { Dimensions } from 'react-native'

export const useLandscapeOrientation = () => {
    const [screenOrientation, setScreenOrientation] = useState(Dimensions.get('screen'))

    useEffect(() => {
        const onChange = result => {
            setScreenOrientation(result.screen)
        }

        Dimensions.addEventListener('change', onChange)
    })

    return screenOrientation.width > screenOrientation.height
}
