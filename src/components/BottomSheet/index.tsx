import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useBottomSheet } from '../../hooks/bottomSheetHook'
import { Easing, useAnimatedStyle, useSharedValue, withDelay, withTiming } from 'react-native-reanimated'
import { CloseButton } from '../CloseButton'

interface BottomSheetProps {
    children: React.ReactNode,
    title: string

}
const { height } = Dimensions.get('window')

export function BottomSheet({ children, title }: BottomSheetProps) {
    const { onHide, visible } = useBottomSheet()
    const translateY = useSharedValue(-height / 2)
    const opacity = useSharedValue(0)

    const animatedBackgroundStyle = useAnimatedStyle(() => {
        return {
            opacity: opacity.value
        };
    });
    const animatedContainerStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateY: translateY.value }],
        };
    });

    useEffect(() => {
        opacity.value = withTiming(.3, { duration: 1000, easing: Easing.linear })
        translateY.value = withDelay(100, withTiming(height / 2, { duration: 2000, easing: Easing.linear }),)
    }, [visible])

    return (
        <View style={[styles.background, animatedBackgroundStyle]}>
            <View style={[styles.container, animatedContainerStyle]}>
                <View style={styles.header}>
                    <Text style={styles.title}>{title}</Text>
                    <CloseButton onPress={onHide} />
                </View>
                <View style={styles.body}>
                    {children}
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    background: {
        width: '100%',
        height: '100%',
        opacity: 0.5,
        backgroundColor: '#000',
        position: 'relative',

    },
    container: {

        backgroundColor: '#fff',
        position: 'absolute',
        left: 0,
        right0: 0,
        height: height / 2,
        bottom: 0,
        borderTopRightRadius: 16,
        borderTopLeftRadius: 16,

        gap: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 16,
        borderBottomColor: '#eee',
        borderWidth: 1,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    body: {
        flex: 1,
        width: '100%',
        height: '100%',
        padding: 16,

    }

})