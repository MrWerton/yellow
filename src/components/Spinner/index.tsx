import { View } from 'react-native'
import React, { useEffect } from 'react'
import { Easing, useAnimatedStyle, useSharedValue, withRepeat, withTiming } from 'react-native-reanimated'
import { theme } from '../../@shared/themes';

interface SpinnerProps {
    size?: number,
    color?: string
}
export function Spinner({ size = 60, color = theme.colors.primary }: SpinnerProps) {
    const rotation = useSharedValue(0)

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotation.value}deg` }],
        };
    });

    const containerStyle = { width: size, height: size, borderRadius: size / 2, borderColor: color, borderWidth: 2 }


    useEffect(() => {
        rotation.value = withRepeat(
            withTiming(360, { duration: 2000, easing: Easing.linear }),
            -1
        );
    }, [])


    return <View style={[animatedStyle, containerStyle]} />

}

